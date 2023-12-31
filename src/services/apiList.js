import authAxios from '../utils/axios';

export async function getList(listId) {
    const data = await authAxios
        .get(`/lists/${listId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('getList', data);
    return data.list;
}

export async function createNewList({ name, boardId }) {
    const data = await authAxios
        .post('/lists', {
            name,
            boardId
        })
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('createNewList', data);
    return data.list;
}

export async function deleteList(listId) {
    const data = await authAxios
        .delete(`/lists/${listId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data;
}

export async function removeAllCards(listId) {
    const data = await authAxios
        .delete(`/lists/all-cards/${listId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data;
}

export async function copyList({listId, body}) {
    const data = await authAxios
        .post(`/lists/copy-list/${listId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('copyList', data);
    return data.list;
}

export async function patchList({ listId, body }) {
    const data = await authAxios
        .patch(`lists/${listId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('patchList', data);
}

export async function moveList(body) {
    const data = await authAxios
        .patch('lists/move-list', body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.board;
}

export async function moveAllCardsInList({ listId, body }) {
    const data = await authAxios
        .patch(`lists/move-all-cards/${listId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.list;
}