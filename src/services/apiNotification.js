import authAxios from '../utils/axios';

export async function getMyNotifications() {
    const data = await authAxios
        .get('/notifications/my-notifications')
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response);
            throw new Error(err.response.data);
        });

    return data.notifications;
}

export async function readNotification({ notificationId, body }) {
    const data = await authAxios
        .patch(`notifications/read-notification/${notificationId}`, body)
        .then((response) => response.data.data)
        .catch((err) => {
            console.log(err.response.data);
            throw new Error(err.response.data.message);
        });

    return data.notification;
}