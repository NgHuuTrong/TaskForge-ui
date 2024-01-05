import authAxios from '../utils/axios';

export async function getMyWorkspaces() {
  const res = await authAxios
    .get('/workspaces/my-workspaces')
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });
  console.log('getMyWorkspaces', res);
  const data = res.workspaceMembers.map((el) => el.workspace);
  return data;
}

export async function getWorkspace(workspaceId) {
  const data = await authAxios
    .get(`/workspaces/${workspaceId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('getWorkspace', data);
  return data.workspace;
}

export async function createNewWorkspace({ name, description }) {
  const data = await authAxios
    .post('/workspaces', {
      name,
      description,
    })
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('createNewWorkspace', data);
  return data.workspace;
}

export async function patchWorkspace({ workspaceId, body }) {
  const data = await authAxios
    .patch(`workspaces/${workspaceId}`, body)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('patchWorkspace', data);
}

export async function getWorkspaceMembers(workspaceId) {
  const res = await authAxios
    .get(`/workspaces/${workspaceId}/members`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });

  return res.users;
}