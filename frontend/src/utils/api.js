import axios from 'axios';

const api = axios.create({
  baseURL: 'https://marketplace-6tji.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
