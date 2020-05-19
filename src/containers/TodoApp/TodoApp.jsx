import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Todo from '../../components/TodoApp/Todo/Todo';
import Items from '../../components/TodoApp/Items/Items';

const Wrapper = styled.div`
  background-color: #e4d5bc;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const ListWrapper = styled.div`
  border: 1px solid red;
  padding: 20px;
`;
const ItemsWrapper = styled.div`
  border: 1px solid blue;
  padding: 20px;
`;

const UL = styled.div`
  /* list-style-type: none; */
`;

const Todos = (props) => {
  const {
    todos,
    onfetchTodos,
    onAddTodo,
    onRemoveTodo,
    onUpdateItemStatus,
    onAddItem,
    onRemoveItem,
  } = props;
  const [selectedTodo, setSelectedTodo] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const [listTitleValue, setListTitleValue] = useState('');

  useEffect(() => {
    onfetchTodos();
  }, [onfetchTodos]);

  const selectList = (event) => {
    setSelectedTodo(
      todos.find((todo) => todo.id === parseInt(event.target.value, 10))
    );
  };

  const addTodoHandler = () => {
    setFormVisible(true);
  };

  const removeTodoHandler = (id) => {
    onRemoveTodo(id);
    if (id === selectedTodo.id) {
      setSelectedTodo({});
    }
  };

  const removeItemHandler = (itemId) => {
    onRemoveItem(selectedTodo.id, itemId);
  };

  const addItemHandler = (itemText) => {
    onAddItem(selectedTodo.id, itemText);
  };

  const toggleItemCompleteHandler = (itemId, itemStatus) => {
    onUpdateItemStatus(selectedTodo.id, itemId, itemStatus);
  };

  const titleValueUpdateHandler = (event) => {
    setListTitleValue(event.target.value);
  };

  const submitNewList = (event) => {
    event.preventDefault();
    if (listTitleValue.length > 0) {
      onAddTodo(listTitleValue);
    }

    setFormVisible(false);
    setListTitleValue('');
  };

  let list;
  if (todos) {
    list = todos.map((todo) => {
      return (
        <div key={todo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            submitted={() => {}}
            count={todo.item_count}
            clicked={selectList}
            deleteTodo={removeTodoHandler}
          />
        </div>
      );
    });
  }

  let items;
  if (selectedTodo && selectedTodo.items) {
    items = todos.find((todo) => todo.id === selectedTodo.id).items;
  }

  return (
    <Wrapper>
      <ListWrapper>
        <h2>My lists</h2>
        <UL>{list}</UL>
        {formVisible && (
          <form onSubmit={submitNewList}>
            <input
              type="text"
              value={listTitleValue}
              onChange={titleValueUpdateHandler}
              name="new-list"
              placeholder="Add title..."
            />
          </form>
        )}
        <button type="button" onClick={addTodoHandler}>
          + List
        </button>
      </ListWrapper>
      <ItemsWrapper>
        {items && (
          <Items
            items={items}
            todoId={selectedTodo.id}
            todoTitle={selectedTodo.title}
            clicked={addItemHandler}
            toggleItemComplete={toggleItemCompleteHandler}
            deleteItem={removeItemHandler}
          />
        )}
      </ItemsWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    loading: state.todo.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onfetchTodos: () => dispatch(actions.fetchTodos()),
  onAddTodo: (listTitle) => dispatch(actions.addList(listTitle)),
  onAddItem: (todoId, itemName) => dispatch(actions.addItem(todoId, itemName)),
  onRemoveTodo: (todoId) => dispatch(actions.removeList(todoId)),
  onUpdateItemStatus: (todoId, itemId, itemStatus) =>
    dispatch(actions.updateItemStatus(todoId, itemId, itemStatus)),
  onRemoveItem: (todoId, itemId) =>
    dispatch(actions.removeItem(todoId, itemId)),
});

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created_by: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          done: PropTypes.bool.isRequired,
          todo_id: PropTypes.number.isRequired,
          created_at: PropTypes.string.isRequired,
          updated_at: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onfetchTodos: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateItemStatus: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
