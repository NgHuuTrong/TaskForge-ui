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

export async function editTemplate(id, description, type, defaultList, defaultBackground) {
  defaultList = JSON.stringify(defaultList);
  const data = await authAxios
    .patch('/templates/' + id, {
      id,
      description,
      type,
      defaultList,
      defaultBackground,
    })
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('Edit template');
}
