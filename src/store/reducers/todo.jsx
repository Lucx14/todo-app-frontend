import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

// Initial state
const initialState = {
  todos: [],
  loading: false,
};

// Fetching todos
const fetchTodosStart = (state) => updateObject(state, { loading: true });
const fetchTodosSuccess = (state, action) =>
  updateObject(state, {
    todos: action.todos,
    loading: false,
  });
const fetchTodosFail = (state) => updateObject(state, { loading: false });

// Add a todo
const addListStart = (state) => updateObject(state, { loading: true });
const addListSuccess = (state, action) =>
  updateObject(state, {
    todos: [...state.todos, action.list],
    loading: false,
  });
const addListFail = (state) => updateObject(state, { loading: false });

// Remove a todo
const removeListStart = (state) => updateObject(state, { loading: true });
const removeListSuccess = (state, action) =>
  updateObject(state, {
    todos: state.todos.filter((todo) => todo.id !== action.listId),
    loading: false,
  });
const removeListFail = (state) => updateObject(state, { loading: false });

// Add an item
const addItemStart = (state) => updateObject(state, { loading: true });
const addItemSuccess = (state, action) => {
  const returnedItem = action.todo.items.slice(-1)[0];
  const newItem = {
    id: returnedItem.id,
    done: returnedItem.done || false,
    name: returnedItem.name,
    todo_id: returnedItem.todo_id,
    created_at: returnedItem.created_at,
    updated_at: returnedItem.updated_at,
  };
  return updateObject(state, {
    todos: state.todos.map((todo) => {
      if (todo.id === action.todo.id) {
        const newItemCount = todo.item_count + 1;
        return {
          ...todo,
          item_count: newItemCount,
          items: [...todo.items, newItem],
        };
      }
      return {
        ...todo,
      };
    }),
    loading: false,
  });
};

const addItemFail = (state) => updateObject(state, { loading: false });

// Update an items status
const updateItemStatusStart = (state) => updateObject(state, { loading: true });
const updateItemStatusSuccess = (state, action) => {
  return updateObject(state, {
    todos: state.todos.map((todo) => {
      if (todo.id === action.todoId) {
        return {
          ...todo,
          items: todo.items.map((item) => {
            if (item.id === action.itemId) {
              return {
                ...item,
                done: action.itemStatus,
              };
            }
            return {
              ...item,
            };
          }),
        };
      }
      return {
        ...todo,
      };
    }),
    loading: false,
  });
};
const updateItemStatusFail = (state) => updateObject(state, { loading: false });

// Remove an item
const removeItemStart = (state) => updateObject(state, { loading: true });
const removeItemSuccess = (state, action) => {
  return updateObject(state, {
    todos: state.todos.map((todo) => {
      if (todo.id === action.todoId) {
        const newItemCount = todo.item_count - 1;
        return {
          ...todo,
          item_count: newItemCount,
          items: todo.items.filter((item) => item.id !== action.itemId),
        };
      }
      return {
        ...todo,
      };
    }),
    loading: false,
  });
};
const removeItemFail = (state) => updateObject(state, { loading: false });

// Update a list title
const updateListTitleStart = (state) => updateObject(state, { loading: true });
const updateListTitleSuccess = (state, action) => {
  return updateObject(state, {
    todos: state.todos.map((todo) => {
      if (todo.id === action.listId) {
        return {
          ...todo,
          title: action.title,
        };
      }
      return {
        ...todo,
      };
    }),
    loading: false,
  });
};
const updateListTitleFail = (state) => updateObject(state, { loading: false });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_START:
      return fetchTodosStart(state, action);
    case actionTypes.FETCH_TODOS_SUCCESS:
      return fetchTodosSuccess(state, action);
    case actionTypes.FETCH_TODOS_FAIL:
      return fetchTodosFail(state, action);
    case actionTypes.ADD_LIST_START:
      return addListStart(state, action);
    case actionTypes.ADD_LIST_SUCCESS:
      return addListSuccess(state, action);
    case actionTypes.ADD_LIST_FAIL:
      return addListFail(state, action);
    case actionTypes.ADD_ITEM_START:
      return addItemStart(state, action);
    case actionTypes.ADD_ITEM_SUCCESS:
      return addItemSuccess(state, action);
    case actionTypes.ADD_ITEM_FAIL:
      return addItemFail(state, action);
    case actionTypes.REMOVE_LIST_START:
      return removeListStart(state, action);
    case actionTypes.REMOVE_LIST_SUCCESS:
      return removeListSuccess(state, action);
    case actionTypes.REMOVE_LIST_FAIL:
      return removeListFail(state, action);
    case actionTypes.UPDATE_ITEM_STATUS_START:
      return updateItemStatusStart(state, action);
    case actionTypes.UPDATE_ITEM_STATUS_SUCCESS:
      return updateItemStatusSuccess(state, action);
    case actionTypes.UPDATE_ITEM_STATUS_FAIL:
      return updateItemStatusFail(state, action);
    case actionTypes.REMOVE_ITEM_START:
      return removeItemStart(state, action);
    case actionTypes.REMOVE_ITEM_SUCCESS:
      return removeItemSuccess(state, action);
    case actionTypes.REMOVE_ITEM_FAIL:
      return removeItemFail(state, action);
    case actionTypes.UPDATE_LIST_TITLE_START:
      return updateListTitleStart(state, action);
    case actionTypes.UPDATE_LIST_TITLE_SUCCESS:
      return updateListTitleSuccess(state, action);
    case actionTypes.UPDATE_LIST_TITLE_FAIL:
      return updateListTitleFail(state, action);
    default:
      return state;
  }
};

export default reducer;
