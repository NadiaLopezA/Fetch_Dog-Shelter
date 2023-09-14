import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const dogShelterApi = axios.create({
    baseURL: VITE_API_URL,
    withCredentials: true
});

//Interceptor for unauthorized requests
const UNAUTHORIZED = 401;

axios.interceptors.response.use(
  response => response,
  error => {
    const {status} = error.response;
    if (status === UNAUTHORIZED) {
    //   dispatch(userSignOut());
    }
    return Promise.reject(error);
 }
);

export default dogShelterApi;
