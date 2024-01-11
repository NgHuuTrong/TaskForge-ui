import authAxios from '../utils/axios';

export async function getMyBoards() {
  const data = await authAxios
    .get('/boards/joined-boards')
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });

  return data.boardMembers;
}

export async function getRecentBoards() {
  const data = await authAxios
    .get('/boards/recent-boards')
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });

  return data.boardMembers;
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
  return data.boardMembers.filter((board) => board.starred);
}

export async function getBoard(boardId) {
  const data = await authAxios
    .get(`/boards/${boardId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });

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

  return data.board;
}

export async function deleteBoard(boardId) {
  const data = await authAxios
    .delete(`boards/${boardId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  return data;
}

export async function addUserToBoard({ body }) {
  const data = await authAxios
    .post('/boards/share-board', body)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });

  return data.board;
}

export async function joinBoard(boardId) {
  const data = await authAxios
    .post(`/boards/join-board/${boardId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });

  return data;
}

export async function deleteMemberFromBoard({ boardId, memberId }) {
  await authAxios
    .delete(`boards/${boardId}/remove-board-member/${memberId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
}

export async function leaveBoard(boardId) {
  const data = await authAxios
    .delete(`/boards/leave-board/${boardId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  return data;
}

export async function getBoardByToken(token) {
  const res = await authAxios
    .get(`/boards/by-token/${token}`)
    .then((response) => response.data.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
  
  return res.board
}

export async function acceptBoardLink(token) {
  const data = await authAxios
    .post(`/boards/accept-invitation-link/${token}`)
    .then((response) => response.data.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });

  return data.board;
}