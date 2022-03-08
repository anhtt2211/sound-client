import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.API_SERVER_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosClient.interceptors.request.use();
axiosClient.interceptors.response.use();

export default axiosClient;
