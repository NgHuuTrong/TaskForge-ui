import authAxios, { getToken } from '../utils/axios';

export async function getCurrentUser() {
  try {
    if (!getToken()) return null;
    const { data } = await authAxios.get('/users/me');
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function updateCurrentUser({ username, bio, file }) {
  try {
    let updateData;

    if (username || bio) {
      const { data } = await authAxios.patch('users/me', { username, bio });
      updateData = data;
    }
    if (!file) return updateData.data;

    const formData = new FormData();

    formData.append('avatar', file);

    const response = await authAxios.post('users/upload-avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    updateData = response;

    return updateData.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function patchPassword({ currentPassword, newPassword, newPasswordConfirm }) {
  await authAxios
    .patch('/auth/update-password', {
      currentPassword,
      newPassword,
      newPasswordConfirm,
    })
    .then((response) => response.data.data)
    .then((data) => {
      console.log(data);
      localStorage.setItem('token', JSON.stringify(data.accessToken));
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.response.data.message);
    });
  console.log('patchPassword');
}
