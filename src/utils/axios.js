import axios from 'axios';

const token = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;

const authAxios = axios.create({
  baseURL: 'localhost:3000/api',
});

authAxios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token || ''}`;
      if (config.url === '/users/updateMe') {
        config.headers['Content-Type'] = 'multipart/form-data';
      }
    }

    return config;
  },
  (error) => {
    throw error.response;
  },
);

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error.response;
  },
);

export default authAxios;
