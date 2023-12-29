import axios from 'axios';

const token = localStorage.getItem('authTokens')
  ? JSON.parse(localStorage.getItem('authTokens'))
  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcwMzI5NjQ5NiwiZXhwIjoxNzEzNjY0NDk2fQ.nqBgnI6jxVXAzb4W_TsRIz-WgbV5F9ravJ-rghRZH0M';

const authAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
});

authAxios.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token || ''}`;
    if (config.url === '/users/updateMe') {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
  }

  return config;
});

authAxios.interceptors.response.use((response) => {
  return response;
});

export default authAxios;
