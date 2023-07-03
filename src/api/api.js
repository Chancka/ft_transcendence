import axios from 'axios';

const API = 'http://localhost:8000';

const login = async (username, password) => {
  try {
    const res = await axios.post(`${API}/login`, {
      username,
      password,
    });

    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    console.log('coucou ca err', err);
  }
};

export default {
  login,
}
