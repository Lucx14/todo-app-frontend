import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import fetchTodosSaga, {
  addListSaga,
  addItemSaga,
  deleteListSaga,
  updateItemStatusSaga,
  deleteItemSaga,
} from './todo';

import {
  signInSaga,
  logoutSaga,
  authCheckStateSaga,
  checkAuthTimeoutSaga,
} from './auth';

export function* watchTodo() {
  yield takeEvery(actionTypes.FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(actionTypes.ADD_LIST, addListSaga);
  yield takeEvery(actionTypes.ADD_ITEM, addItemSaga);
  yield takeEvery(actionTypes.REMOVE_LIST, deleteListSaga);
  yield takeEvery(actionTypes.UPDATE_ITEM_STATUS, updateItemStatusSaga);
  yield takeEvery(actionTypes.REMOVE_ITEM, deleteItemSaga);
}

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INIT, signInSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}
