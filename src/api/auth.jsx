import axios from 'axios';
import getData from './helpers';

export async function signIn(email, password) {
  return axios
    .post('https://mysterious-reaches-53245.herokuapp.com/auth/login', {
      email,
      password,
    })
    .then(getData);
}

export async function signUp(name, email, password, passwordConfirmation) {
  return axios
    .post('https://mysterious-reaches-53245.herokuapp.com/signup', {
      name,
      email,
      password,
      passwordConfirmation,
    })
    .then(getData);
}
