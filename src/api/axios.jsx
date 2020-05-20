import axios from 'axios';

const jwt =
  'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE1OTAwNjI5Njl9.Ofjm4dHYESWrCBcxaWm5eoD5KJ0D8LjE_5py6H-pLq4';
const instance = axios.create({
  baseURL: 'https://mysterious-reaches-53245.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${jwt}`,
    Accept: 'application/vnd.todos.v1+json',
  },
});

export default instance;
