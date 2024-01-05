import authAxios from '../utils/axios';

export const login = async ({ email, password }) => {
  try {
    const { data } = await authAxios.post('/auth/signin', { email, password });
    localStorage.setItem('token', JSON.stringify(data.data.accessToken));

    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const signup = async ({ username, email, name, password, passwordConfirm }) => {
  try {
    const { data } = await authAxios.post('/auth/signup', { username, email, name, password, passwordConfirm });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const logout = async() => {
  try {
    localStorage.setItem('token', JSON.stringify(''))
  } catch(error) {
    console.log(error);
    throw new Error(error.message);
  }
}