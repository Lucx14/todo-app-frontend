import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mysterious-reaches-53245.herokuapp.com/',
  headers: {
    Accept: 'application/vnd.todos.v1+json',
  },
});

instance.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('token');
  if (jwt) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});

export default instance;
