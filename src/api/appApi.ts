import { ReactNode, useEffect } from 'react';

import axios, { AxiosResponse } from 'axios';

import Swal from 'sweetalert2';

import { useAuthStore } from "../hooks";
import { getEnvVariables } from '../helpers';

const dogShelterApi = axios.create({
  baseURL: getEnvVariables().VITE_API_URL,
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
            Swal.fire('Session Expired', 'Log in again to continue searching.', 'info');
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

