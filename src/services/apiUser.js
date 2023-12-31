import authAxios, { getToken } from '../utils/axios';

export async function getCurrentUser() {
  try {
    console.log('hi1');
    if (getToken() === '') return null;
    console.log('hi');
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
