import authAxios from '../utils/axios';

export const login = async ({ email, password }) => {
  const data = await authAxios
    .post('/auth/signin', { email, password })
    .then((response) => {
      localStorage.setItem('token', JSON.stringify(response.data.data.accessToken));
    })
    .then((data) => {
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
  return data;
};

export const loginByGoogle = async (body) => {
  const data = await authAxios
    .post('/auth/google/signin', body)
    .then((response) => {
      return response.data.data;
    })
    .then((data) => {
      localStorage.setItem('token', JSON.stringify(data.accessToken));
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });

  return data;
};

export const signup = async ({ username, email, name, password, passwordConfirm }) => {
  await authAxios.post('/auth/signup', { username, email, name, password, passwordConfirm }).catch((err) => {
    console.log(err.response);
    throw new Error(err.response.data.message);
  });
  console.log('signup');
};

export const logout = async () => {
  const data = await authAxios
    .delete('/auth/logout')
    .then((response) => {
      localStorage.setItem('token', null);
      authAxios.defaults.headers.Authorization = null;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });

  return data;
};

export const forgotPassword = async ({ email }) => {
  await authAxios.post('/auth/forgot-password', { email }).catch((err) => {
    console.log(err.response);
    throw new Error(err.response.data.message);
  });
  console.log('forgotPassword');
};

export const resetPassword = async ({ password, passwordConfirm, token }) => {
  await authAxios.patch(`/auth/reset-password/${token}`, { password, passwordConfirm }).catch((err) => {
    console.log(err.response);
    throw new Error(err.response.data.message);
  });
  console.log('resetPassword');
};

