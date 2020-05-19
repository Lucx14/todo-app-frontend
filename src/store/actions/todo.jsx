import * as actionTypes from './actionTypes';

// FETCH LISTS
export const fetchTodosSuccess = (todos) => ({
  type: actionTypes.FETCH_TODOS_SUCCESS,
  todos,
});

export const fetchTodosFail = (error) => ({
  type: actionTypes.FETCH_TODOS_FAIL,
  error,
});

export const fetchTodosStart = () => ({
  type: actionTypes.FETCH_TODOS_START,
});

export const fetchTodos = () => ({
  type: actionTypes.FETCH_TODOS,
});

// ADD LIST
export const addList = () => ({
  type: actionTypes.ADD_LIST,
});

export const addListStart = () => ({
  type: actionTypes.ADD_LIST_START,
});

export const addListSuccess = (list) => ({
  type: actionTypes.ADD_LIST_SUCCESS,
  list,
});

export const addListFail = (error) => ({
  type: actionTypes.ADD_LIST_FAIL,
  error,
});

// REMOVE LIST
export const removeList = (listId) => ({
  type: actionTypes.REMOVE_LIST,
  listId,
});

export const removeListStart = () => ({
  type: actionTypes.REMOVE_LIST_START,
});

export const removeListSuccess = (listId) => ({
  type: actionTypes.REMOVE_LIST_SUCCESS,
  listId,
});

export const removeListFail = () => ({
  type: actionTypes.REMOVE_LIST_FAIL,
});

// ADD ITEM
export const addItem = (todoId, itemName) => ({
  type: actionTypes.ADD_ITEM,
  todoId,
  itemName,
});

export const addItemStart = () => ({
  type: actionTypes.ADD_ITEM_START,
});

export const addItemSuccess = (todo) => ({
  type: actionTypes.ADD_ITEM_SUCCESS,
  todo,
});

export const addItemFail = (error) => ({
  type: actionTypes.ADD_ITEM_FAIL,
  error,
});
