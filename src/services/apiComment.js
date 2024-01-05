import authAxios from '../utils/axios';

export async function getComments(cardId) {
    const data = await authAxios
        .get(`/comments/${cardId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.comments;
}

export async function createComment({ cardId, body }) {
    const data = await authAxios
        .post(`/comments/${cardId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.comment;
}

export async function deleteComment(commentId) {
    const data = await authAxios
        .delete(`/comments/${commentId}`)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data;
}

export async function patchComment({ commentId, body }) {
    const data = await authAxios
        .patch(`/comments/${commentId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.comment;
}