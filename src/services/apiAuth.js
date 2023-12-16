import { API } from './API';

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post('/auth/login', { email, password });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const signup = async ({ username, email, name, password, passwordConfirm }) => {
  try {
    const { data } = await API.post('/auth/signup', { username, email, name, password, passwordConfirm });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
