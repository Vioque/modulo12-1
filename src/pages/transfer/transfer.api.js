import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = account =>
  Axios.post(url).then(response => {
    return response.data;
  });

