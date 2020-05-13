import axios from './axios';
import getData from './helpers';

export default async function gettodos() {
  return axios.get(`todos`).then(getData);
}
