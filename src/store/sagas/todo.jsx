import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import {
  getTodos as apiGetTodos,
  addTodo as apiAddTodo,
  addItem as apiAddItem,
} from '../../api/todos';

export default function* fetchTodosSaga() {
  yield put(actions.fetchTodosStart());

  try {
    const response = yield apiGetTodos().then((res) => {
      return res.map((todo) => {
        return {
          id: todo.id,
          title: todo.title,
          created_at: todo.created_at,
          updated_at: todo.updated_at,
          created_by: todo.created_by,
          item_count: todo.items.length,
          items: todo.items.map((item) => {
            return {
              id: item.id,
              name: item.name,
              done: item.done === true,
              todo_id: item.todo_id,
              created_at: item.created_at,
              updated_at: item.updated_at,
            };
          }),
        };
      });
    });
    yield put(actions.fetchTodosSuccess(response));
  } catch (err) {
    yield put(actions.fetchTodosFail(err));
  }
}

export function* addListSaga() {
  yield put(actions.addListStart());

  try {
    const response = yield apiAddTodo('New List!');
    yield put(actions.addListSuccess(response));
  } catch (err) {
    yield put(actions.addListFail(err));
  }
}

export function* addItemSaga(action) {
  yield put(actions.addItemStart());

  try {
    const response = yield apiAddItem(action.todoId, action.itemName);
    yield put(actions.addItemSuccess(response));
  } catch (err) {
    yield put(actions.addItemFail(err));
  }
}
