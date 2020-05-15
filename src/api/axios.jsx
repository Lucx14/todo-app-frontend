import axios from 'axios';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE1ODk2NDUwODB9.JGyq75s5zapypso4MjNUB-buYxf4ZQLcLVxRpmN2s7g';
const instance = axios.create({
  baseURL: 'https://mysterious-reaches-53245.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${jwt}`,
    Accept: 'application/vnd.todos.v1+json',
  },
});

// instance.defaults.headers.common.Authorization = jwt;
// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${jwt}`;
//   return config;
// });

export default instance;
