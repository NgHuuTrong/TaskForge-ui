import authAxios from '../utils/axios';

export async function getCard(cardId) {
    const data = await authAxios
        .get(`/cards/${cardId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('getCard', data);
    return data.card;
}

export async function createNewCard({ title, listId }) {
    const data = await authAxios
        .post('/cards', {
            title,
            listId
        })
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('createNewCard', data);
    return data.card;
}

export async function deleteCard(cardId) {
    const data = await authAxios
        .delete(`/cards/${cardId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data;
}

export async function patchCard({ cardId, body }) {
    const data = await authAxios
        .patch(`cards/${cardId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.card;
}

export async function moveCardInList(body) {
    const data = await authAxios
        .patch('/cards/move-card-in-list', body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.list;
}

export async function moveCardToAnotherList({ cardId, body }) {
    const data = await authAxios
        .patch(`/cards/move-card-another-list/${cardId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.list;
}

export async function joinCard(cardId) {
    const data = await authAxios
        .post(`/cards/join/${cardId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('joinCard', data);
    return data.card;
}

export async function assignMemberToCard({ body }) {
    const data = await authAxios
        .post('/cards/assign', body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('assignMemberToCard', data);
    return data;
}


export async function uploadFileCard({ cardId, body }) {
    const data = await authAxios
        .post(`/cards/upload-file/${cardId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.cardAttachment;
}

export async function uploadLinkCard({ cardId, body }) {
    const data = await authAxios
        .post(`/cards/upload-link/${cardId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.cardAttachment;
}

export async function deleteCardAttachment(attachmentId) {
    const data = await authAxios
        .delete(`/cards/delete-attachment/${attachmentId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data;
}

export async function copyCard({ cardId, body }) {
    const data = await authAxios
        .post(`/cards/copy-card/${cardId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('copyCard', data);
    return data.card;
}

export async function patchCardAttachment({ attachmentId, body }) {
    const data = await authAxios
        .patch(`cards/update-attachment/${attachmentId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });
    console.log('patchCardAttachment', data);
    return data.cardAttachment;
}