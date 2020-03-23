import axios from 'axios';

const API = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: API,
});

export default api;
