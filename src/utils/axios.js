import axios from 'axios';

export const getToken = () => {
  return localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
};

const authAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
});

authAxios.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${getToken()}`;
    if (config.url === '/users/updateMe') {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
  }

  return config;
});

authAxios.interceptors.response.use(
  (response) => response,
  function (error) {
    if (error?.response?.status === 401) {
      localStorage.setItem('token', null);
      authAxios.defaults.headers.Authorization = null;
    }
    return Promise.reject(error);
  },
);

export default authAxios;
