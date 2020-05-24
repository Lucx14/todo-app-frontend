import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Todo from '../../components/TodoApp/Todo/Todo';
import Items from '../../components/TodoApp/Items/Items';
import ActionButton from '../../components/UI/Button/ActionButton';
import { sortById } from '../../shared/utility';
import {
  Wrapper,
  StyledLoader,
  ListWrapper,
  ListContentWrapper,
  ItemsWrapper,
  ItemsPlaceholder,
  CustomOverlay,
  PlaceholderText,
  Input,
  NewListWrapper,
  Icon,
  TodoWrapper,
  DeleteButton,
  ControlsWrapper,
  HeadingWrapper,
} from './style';

const Todos = (props) => {
  const {
    todos,
    loading,
    onfetchTodos,
    onAddTodo,
    onRemoveTodo,
    onUpdateItemStatus,
    onAddItem,
    onRemoveItem,
    onUpdateTodoTitle,
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
    list = sortById(todos).map((todo) => {
      return (
        <TodoWrapper key={todo.id} active={todo.id === selectedTodo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            submitted={() => {}}
            count={todo.items.filter((item) => item.done !== true).length}
            clicked={selectList}
            updater={onUpdateTodoTitle}
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
    <StyledLoader active={loading} spinner>
      <Wrapper>
        <ListWrapper>
          <HeadingWrapper>My Lists</HeadingWrapper>
          <ListContentWrapper>{list}</ListContentWrapper>
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
                  autoFocus
                  onBlur={hideForm}
                />
              </form>
            </NewListWrapper>
          )}
          <ControlsWrapper>
            {!formVisible && (
              <ActionButton clicked={addTodoHandler}>
                <i className="fas fa-plus-circle" /> Add List
              </ActionButton>
            )}
            {formVisible && (
              <ActionButton clicked={hideForm}>
                <i className="far fa-times-circle" /> Cancel
              </ActionButton>
            )}
            {!trashVisible && (
              <ActionButton clicked={showTrash}>
                <i className="fas fa-minus-circle" /> Delete List
              </ActionButton>
            )}
            {trashVisible && (
              <ActionButton clicked={hideTrash}>
                <i className="far fa-times-circle" /> Cancel
              </ActionButton>
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
          {!items && (
            <ItemsPlaceholder>
              <CustomOverlay>
                <PlaceholderText>
                  <i className="fas fa-list-ul" />
                </PlaceholderText>
              </CustomOverlay>
            </ItemsPlaceholder>
          )}
        </ItemsWrapper>
      </Wrapper>
    </StyledLoader>
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
  onUpdateTodoTitle: (todoId, title) =>
    dispatch(actions.updateListTitle(todoId, title)),
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
  onUpdateTodoTitle: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
