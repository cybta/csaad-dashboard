import axios from 'axios';

export const csGet = async (url: string, cb: (data: any) => any) => {
  const data: any = await axios.get(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  if (typeof cb === 'function') cb(data.data);
};

export const csPost = async (url: string, data: any, cb?: any) => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post(url, data, axiosConfig)
    .then((res) => {
      console.log('RESPONSE RECEIVED: ', res);

      if (cb) cb(res);
    })
    .catch((err) => {
      if (cb) cb(err);
      console.error('ERROR: ', err);
    });
};

export const csDelete = async (url: string, data: any) => {
  const axiosConfig = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  };

  axios
    .post(url, data, axiosConfig)
    .then((res) => {
      console.log('RESPONSE RECEIVED: ', res);
    })
    .catch((err) => {
      console.error('ERROR: ', err);
    });
};
