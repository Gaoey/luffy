import axios from 'axios'

const API_URL = "https://reqres.in/api";

const userAPI = {
  async fetchAll() {
    const response = await axios.get(`${API_URL}/users`);
    return response;
  }
};

export default userAPI;
