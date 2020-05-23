import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import {
  getTodos as apiGetTodos,
  addTodo as apiAddTodo,
  addItem as apiAddItem,
  deleteTodo as apiDeleteTodo,
  updateItemStatus as apiUpdateItemStatus,
  deleteItem as apiDeleteItem,
  updateTodo as apiUpdateTodo,
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

export function* addListSaga(action) {
  yield put(actions.addListStart());

  try {
    const response = yield apiAddTodo(action.listTitle).then((res) => {
      return {
        id: res.id,
        title: res.title,
        created_at: res.created_at,
        updated_at: res.updated_at,
        created_by: res.created_by,
        item_count: res.items.length,
        items: res.items,
      };
    });
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

export function* deleteListSaga(action) {
  yield put(actions.removeListStart());

  try {
    yield apiDeleteTodo(action.listId);
    yield put(actions.removeListSuccess(action.listId));
  } catch (err) {
    yield put(actions.removeListFail(err));
  }
}

export function* updateListTitleSaga(action) {
  yield put(actions.updateListTitleStart());

  try {
    yield apiUpdateTodo(action.listId, action.title);
    yield put(actions.updateListTitleSuccess(action.listId, action.title));
  } catch (err) {
    yield put(actions.updateListTitleFail(err));
  }
}

export function* updateItemStatusSaga(action) {
  yield put(actions.updateItemStatusStart());

  try {
    yield apiUpdateItemStatus(action.todoId, action.itemId, action.itemStatus);
    yield put(
      actions.updateItemStatusSuccess(
        action.todoId,
        action.itemId,
        action.itemStatus
      )
    );
  } catch (err) {
    yield put(actions.updateItemStatusFail(err));
  }
}

export function* deleteItemSaga(action) {
  yield put(actions.removeItemStart());

  try {
    yield apiDeleteItem(action.todoId, action.itemId);
    yield put(actions.removeItemSuccess(action.todoId, action.itemId));
  } catch (err) {
    yield put(actions.removeItemFail(err));
  }
}
