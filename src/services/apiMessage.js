import authAxios from '../utils/axios';

export async function getMessagesOfBoard(boardId) {
  const data = await authAxios
    .get(`messages/${boardId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  console.log('getMessagesOfBoard', data);
  return data;
}
