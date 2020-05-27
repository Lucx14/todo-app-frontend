import * as actionTypes from './actionTypes';
import {
  fetchTodos,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFail,
} from './todo';

describe('fetchTodos', () => {
  test('returns an action with type `FETCH_TODOS`', () => {
    const action = fetchTodos();
    expect(action).toEqual({ type: actionTypes.FETCH_TODOS });
  });
});

describe('fetchTodosStart', () => {
  test('returns an action with type `FETCH_TODOS_START`', () => {
    const action = fetchTodosStart();
    expect(action).toEqual({ type: actionTypes.FETCH_TODOS_START });
  });
});

describe('fetchTodosSuccess', () => {
  test('returns an action with type `FETCH_TODOS_SUCCESS`', () => {
    const action = fetchTodosSuccess('Test-todos');
    expect(action).toEqual({
      type: actionTypes.FETCH_TODOS_SUCCESS,
      todos: 'Test-todos',
    });
  });
});

describe('fetchTodosFail', () => {
  test('returns an action with type `FETCH_TODOS_FAIL`', () => {
    const action = fetchTodosFail('Test-error');
    expect(action).toEqual({
      type: actionTypes.FETCH_TODOS_FAIL,
      error: 'Test-error',
    });
  });
});
