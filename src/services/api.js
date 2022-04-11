import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sample-api-78c77.firebaseio.com/',
});