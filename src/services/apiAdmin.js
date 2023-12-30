import authAxios from '../utils/axios';

export async function getUsers() {
  const data = await authAxios
    .get('/users')
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });
  console.log('users', data);
  data.users.sort((a, b) => a.id - b.id);
  return data.users;
}

export async function deleteTemplate(templateId) {
  console.log(templateId);
  const data = await authAxios
    .delete('/templates/' + templateId)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('Template deleted');
}

export async function editTemplate(data) {
  console.log(data);
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'defaultList') {
      formData.append(key, data[key].join('/'));
    } else {
      formData.append(key, data[key]);
    }
  });
  await authAxios
    .patch('/templates/' + data.id, formData)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('Edit template');
}
