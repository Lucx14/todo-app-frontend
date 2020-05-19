import axios from 'axios';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE1ODk5NzYzNjZ9.wb6OKGKg_z-kMbF0cTVoh_H6PjhtQVrdUhEOafU9Rtw';
const instance = axios.create({
  baseURL: 'https://mysterious-reaches-53245.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${jwt}`,
    Accept: 'application/vnd.todos.v1+json',
  },
});

export default instance;
