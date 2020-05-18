import axios from './axios';
import getData from './helpers';

export async function getTodos() {
  return axios.get(`todos`).then(getData);
}

export async function addTodo(title) {
  return axios
    .post('todos', {
      title,
    })
    .then(getData);
}

export async function getTodo(id) {
  return axios.get(`todos/${id}`).then(getData);
}

export async function updateTodo(id, title) {
  return axios
    .put(`todos/${id}`, {
      title,
    })
    .then(getData);
}

export async function deleteTodo(id) {
  return axios.delete(`todos/${id}`).then(getData);
}

export async function addItem(todoId, itemText) {
  return axios
    .post(`todos/${todoId}/items`, {
      name: itemText,
    })
    .then(getData);
}
