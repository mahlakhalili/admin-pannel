import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://localhost:1000/',
});

export default apiClient;
