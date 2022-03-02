/* eslint-disable no-alert */
import axios from 'axios';

const baseURL = 'http://localhost:8080/api';
const headers = {
  'Content-Type': 'application/json',
};

const createAccount = async (email, password) => {
  axios
    .post(`${baseURL}/register`, {
      email,
      password,
    }, { headers })
    .then(({
      status,
    }) => {
      if (status === 200) {
        localStorage.clear();
        alert('Compte crée');
      }
    })
    .catch((error) => {
      if (error.response) {
        alert(JSON.stringify(error.response?.data?.error));
      }
    });
};
const login = async (email, password) => {
  axios
    .post(`${baseURL}/login`, {
      email,
      password,
    }, { headers })
    .then(({
      status,
      data,
    }) => {
      if (status === 200) {
        window.localStorage.setItem(
          'user_data_storage_key',
          JSON.stringify(data.Authorization),
        );
      }
    }).catch((error) => {
      if (error.response) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(error.response?.data?.error));
      }
    });
};

const userDisplayer = async ({ setUserList }) => {
  axios.defaults.headers.common.Authorization = JSON.parse(window.localStorage.getItem('user_data_storage_key'));
  axios.defaults.headers.common['Content-type'] = 'application/json';

  axios
    .get(`${baseURL}/users`)
    .then(({
      data,
    }) => {
      setUserList(data);
    });
};

const api = { createAccount, login, userDisplayer };
export default api;
