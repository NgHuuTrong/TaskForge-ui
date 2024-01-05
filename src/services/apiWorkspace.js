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
  try {
    const { data } = await authAxios.get(`/workspaces/${workspaceId}`);
    const dataMem = await authAxios.get(`workspaces/${workspaceId}/members`);
    if (dataMem)
      data.data.workspace.members = dataMem.data.data.users
    return data.data.workspace;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
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

export async function sendInvitationWorkspace({ workspaceId, userId }) {
  const data = await authAxios
    .post(`/workspaces/${workspaceId}/send-invitation/${userId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });

  return data;
}

export async function deleteWorkspaceMember({ workspaceId, userId }) {
  try {
    const { data } = await authAxios.delete(`/workspaces/${workspaceId}/remove-workspace-member/${userId}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteWorkspace({ workspaceId }) {
  try {
    const { data } = await authAxios.delete(`/workspaces/${workspaceId}`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function leaveWorkspace(workspaceId) {
  const data = await authAxios
    .delete(`/workspaces/leave-workspace/${workspaceId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });

  return data;
}

export async function sendInvitationWorkspace({ workspaceId, userId }) {
  const data = await authAxios
    .post(`/workspaces/${workspaceId}/send-invitation/${userId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });

  return data;
}

export async function deleteWorkspaceMember({ workspaceId, userId }) {
  try {
    const { data } = await authAxios.delete(`/workspaces/${workspaceId}/remove-workspace-member/${userId}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteWorkspace({ workspaceId }) {
  try {
    const { data } = await authAxios.delete(`/workspaces/${workspaceId}`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function leaveWorkspace(workspaceId) {
  const data = await authAxios
    .delete(`/workspaces/leave-workspace/${workspaceId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });

  return data;
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