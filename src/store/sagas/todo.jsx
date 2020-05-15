import { put } from 'redux-saga/effects';
import axios from '../../api/axios';
import * as actions from '../actions/index';

export default function* fetchTodosSaga(action) {
  yield put(actions.fetchTodosStart());

  try {
    const response = yield axios.get('todos');
    const fetchedTodos = [];
    for (const key in response.data) {
      fetchedTodos.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(actions.fetchTodosSuccess(fetchedTodos));
  } catch (err) {
    yield put(actions.fetchTodosFail(err));
  }
}
