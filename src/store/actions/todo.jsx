import * as actionTypes from './actionTypes';

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
