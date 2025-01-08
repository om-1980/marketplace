import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://marketplace-y1kf.vercel.app/' : 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
