import authAxios from '../utils/axios';

export async function getMyBoards() {
  const data = await authAxios
    .get('/boards/joined-boards')
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });
  console.log('getMyBoards', data);
  return data.boards;
}

export async function getRecentBoards() {
  const data = await authAxios
    .get('/boards/recent-boards')
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });
  console.log('getRecentBoards', data);
  return data.boardMembers.filter((item) => item.starred);
}

export async function getStarredBoards() {
  const data = await authAxios
    .get('/boards/joined-boards')
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });
  console.log('getStarredBoards', data);
  return data.boardMembers;
}

export async function getBoard(boardId) {
  const data = await authAxios
    .get(`/boards/${boardId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('getBoard', data);
  return data.board;
}

export async function getBoardMembers(boardId, search) {
  const data = await authAxios
    .get(`/boards/${boardId}/members?search=${search}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('getBoardMembers', data);
  return data.users;
}

export async function createNewBoard({ name, workspaceId, templateId = 1, visibility = 'false' }) {
  const data = await authAxios
    .post('/boards', {
      name,
      workspaceId,
      templateId,
      visibility,
    })
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('createNewBoard', data);
  return data.board;
}

export async function starredBoard({ boardId, starred }) {
  const data = await authAxios
    .patch(`boards/starred-board/${boardId}`, {
      starred,
    })
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('starredBoard', data);
  return data.boardMember;
}

export async function patchBoard({ boardId, body }) {
  const data = await authAxios
    .patch(`boards/${boardId}`, body)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('patchBoard', data);
  return data.board;
}

export async function leaveBoard(boardId) {
  const data = await authAxios
    .delete(`/boards/leave-board/${boardId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });

  return data.board;
}