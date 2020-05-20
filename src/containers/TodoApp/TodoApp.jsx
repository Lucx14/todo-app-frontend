import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Todo from '../../components/TodoApp/Todo/Todo';
import Items from '../../components/TodoApp/Items/Items';

const Wrapper = styled.div`
  display: flex;
`;
const ListWrapper = styled.div`
  background-color: #f3f2f8;
  padding: 0.625rem;
  width: 50%;
`;
const ItemsWrapper = styled.div`
  background-color: #fff;
  border: 1px solid blue;
  width: 50%;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 5px;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: black solid 1px;
  outline: none;
  font-size: 1rem;
`;

const NewListWrapper = styled.div`
  display: flex;
  margin: 0.5rem;
  align-items: center;
`;

const Icon = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #339af0;
  border-radius: 50%;
  color: white;
`;

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  width: 10%;
  color: #808080;
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-right: -0.5rem;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadingWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 10px;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 1rem;
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
  const [trashVisible, setTrashVisible] = useState(false);

  useEffect(() => {
    onfetchTodos();
  }, [onfetchTodos]);

  const selectList = (event) => {
    setSelectedTodo(
      todos.find(
        (todo) => todo.id === parseInt(event.target.getAttribute('value'), 10)
      )
    );
  };

  const addTodoHandler = () => {
    setFormVisible(true);
  };

  const removeTodoHandler = (id, event) => {
    event.preventDefault();
    onRemoveTodo(id);
    if (id === selectedTodo.id) {
      setSelectedTodo({});
    }
    setTrashVisible(false);
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

  const showTrash = () => {
    setTrashVisible(true);
  };

  const hideTrash = () => {
    setTrashVisible(false);
  };

  const hideForm = () => {
    setFormVisible(false);
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
        <TodoWrapper key={todo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            submitted={() => {}}
            count={todo.item_count}
            clicked={selectList}
          />
          {trashVisible && (
            <DeleteButton
              type="button"
              onClick={(e) => removeTodoHandler(todo.id, e)}
              value={todo.id}
            >
              <i className="fas fa-trash-alt" />
            </DeleteButton>
          )}
        </TodoWrapper>
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
        <HeadingWrapper>My Lists</HeadingWrapper>
        <div>{list}</div>
        {formVisible && (
          <NewListWrapper>
            <Icon className="fas fa-list-ul fa-sm" />
            <form onSubmit={submitNewList}>
              <Input
                type="text"
                value={listTitleValue}
                onChange={titleValueUpdateHandler}
                name="new-list"
                placeholder="Add title..."
              />
            </form>
          </NewListWrapper>
        )}
        <ControlsWrapper>
          {!formVisible && (
            <AddButton type="button" onClick={addTodoHandler}>
              <i className="fas fa-plus-circle" /> Add List
            </AddButton>
          )}
          {formVisible && (
            <AddButton type="button" onClick={hideForm}>
              <i className="far fa-times-circle" /> Cancel
            </AddButton>
          )}
          {!trashVisible && (
            <AddButton type="button" onClick={showTrash}>
              <i className="fas fa-minus-circle" /> Delete List
            </AddButton>
          )}
          {trashVisible && (
            <AddButton type="button" onClick={hideTrash}>
              <i className="far fa-times-circle" /> Cancel
            </AddButton>
          )}
        </ControlsWrapper>
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
