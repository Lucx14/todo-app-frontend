import axios from 'axios';

// heroku deployed api is now at
// https://mysterious-reaches-53245.herokuapp.com/todos
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default instance;
