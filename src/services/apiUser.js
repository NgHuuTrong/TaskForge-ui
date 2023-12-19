import { API } from './API';

export async function getCurrentUser(token) {
  try {
    if (token) {
      const { data } = await API.get('/users/me', {
        headers: {
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        },
      });
      // console.log(data)
      return data.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
