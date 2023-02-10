import axios from "axios";

const axiosInstance = axios.create({
 baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN using instance';

export default axiosInstance;