import { ReactNode, useEffect } from 'react';

import axios, { AxiosResponse } from 'axios';

import { getEnvVariables } from '../helpers';
import { useAuthStore } from "../hooks";


const { VITE_API_URL } = getEnvVariables();

const dogShelterApi = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true
});

const AxiosInterceptor = ({ children }: { children: ReactNode }) => {

  const { startLogout } = useAuthStore();
  const UNAUTHORIZED = 401;

  useEffect(() => {

      const resInterceptor = (response: AxiosResponse) => {
          return response;
      }

      const errInterceptor = (error: { response: { status: number; }; }) => {

          if (error?.response?.status === UNAUTHORIZED) {
            startLogout(false)
          }

          return Promise.reject(error);
      }


      const interceptor = dogShelterApi.interceptors.response.use(resInterceptor, errInterceptor);

      return () => dogShelterApi.interceptors.response.eject(interceptor);

  }, [])

  return children;
}

export default dogShelterApi;
export { AxiosInterceptor }

