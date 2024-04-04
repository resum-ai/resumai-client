import axios from 'axios';

// TODO base_url 세팅
export const api = axios.create({
  // baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});
