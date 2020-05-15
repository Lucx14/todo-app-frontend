import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import fetchTodosSaga from './todo';

export default function* watchTodo() {
  yield takeEvery(actionTypes.FETCH_TODOS, fetchTodosSaga);
}
