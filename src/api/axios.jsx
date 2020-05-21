import axios from 'axios';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE1OTAxNTI3MTh9.6Mo2KRQ2DkIhxukHN5kH18D7gU-kaj-h6A-sNhMqWBs';
const instance = axios.create({
  baseURL: 'https://mysterious-reaches-53245.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${jwt}`,
    Accept: 'application/vnd.todos.v1+json',
  },
});

export default instance;
