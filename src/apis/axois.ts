import axios from 'axios';

// TODO base_url 세팅
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});
