import { useState, useCallback } from 'react';
import {
  getTodos as apiGetTodos,
  addTodo as apiAddTodo,
  deleteTodo as apiDeleteTodo,
} from '../api/todos';

export default function useTodoApi() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getTodos = useCallback(() => {
    setLoading(true);
    apiGetTodos()
      .then((result) => {
        setTodos(
          result.map((todo) => {
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
          })
        );
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const addTodo = useCallback(() => {
    setLoading(true);
    apiAddTodo('New List')
      .then((result) => {
        setTodos((prevState) => [...prevState, result]);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const deleteTodo = useCallback((todoId) => {
    setLoading(true);
    apiDeleteTodo(todoId)
      .then(() => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return [todos, getTodos, addTodo, deleteTodo, loading, error];
}
