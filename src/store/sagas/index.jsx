import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import fetchTodosSaga, {
  addListSaga,
  addItemSaga,
  deleteListSaga,
  updateItemStatusSaga,
  deleteItemSaga,
  updateListTitleSaga,
} from './todo';

import {
  signInSaga,
  logoutSaga,
  authCheckStateSaga,
  checkAuthTimeoutSaga,
  signUpSaga,
} from './auth';

export function* watchTodo() {
  yield takeEvery(actionTypes.FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(actionTypes.ADD_LIST, addListSaga);
  yield takeEvery(actionTypes.ADD_ITEM, addItemSaga);
  yield takeEvery(actionTypes.REMOVE_LIST, deleteListSaga);
  yield takeEvery(actionTypes.UPDATE_ITEM_STATUS, updateItemStatusSaga);
  yield takeEvery(actionTypes.REMOVE_ITEM, deleteItemSaga);
  yield takeEvery(actionTypes.UPDATE_LIST_TITLE, updateListTitleSaga);
}

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INIT, signInSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_SIGNUP, signUpSaga);
}
