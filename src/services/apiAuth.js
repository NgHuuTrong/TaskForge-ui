import { API } from './API';
import { getCurrentUser } from './apiUser';

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post('/auth/signin', { email, password });
    const user = await getCurrentUser(data.data.accessToken);
    const finalData = {
      accessToken: data.data.accessToken,
      user: user,
    };
    return finalData;
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
