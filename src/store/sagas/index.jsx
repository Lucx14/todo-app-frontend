import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import fetchTodosSaga, {
  addListSaga,
  addItemSaga,
  deleteListSaga,
  updateItemStatusSaga,
} from './todo';

export default function* watchTodo() {
  yield takeEvery(actionTypes.FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(actionTypes.ADD_LIST, addListSaga);
  yield takeEvery(actionTypes.ADD_ITEM, addItemSaga);
  yield takeEvery(actionTypes.REMOVE_LIST, deleteListSaga);
  yield takeEvery(actionTypes.UPDATE_ITEM_STATUS, updateItemStatusSaga);
}
