import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
  todos: [],
  loading: false,
};

const fetchTodosStart = (state) => updateObject(state, { loading: true });

const fetchTodosSuccess = (state, action) =>
  updateObject(state, {
    todos: action.todos,
    loading: false,
  });

const fetchTodosFail = (state) => updateObject(state, { loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_START:
      return fetchTodosStart(state, action);
    case actionTypes.FETCH_TODOS_SUCCESS:
      return fetchTodosSuccess(state, action);
    case actionTypes.FETCH_TODOS_FAIL:
      return fetchTodosFail(state, action);
    default:
      return state;
  }
};

export default reducer;
