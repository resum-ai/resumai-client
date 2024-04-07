import { getCookie } from '@/utils/cookie';
import axios from 'axios';

// TODO base_url 세팅
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const privateInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

privateInstance.defaults.headers.common['Authorization'] =
  `Bearer ${getCookie('access_token')}`;
