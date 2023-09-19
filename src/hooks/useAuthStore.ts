//Imports
import { useDispatch, useSelector } from 'react-redux';

import { onLogin, onLogout, onChecking } from '../store';
import { RootState } from '../store/store';

import { login, logout } from '../services';
import { LoginRequest } from '../interfaces';


export const useAuthStore = () => {

    const { status } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (payload: LoginRequest) => {

        dispatch(onChecking());

        try {            
            const result = await login(payload);
            if (result.data === 'OK') {
                localStorage.setItem("session", "true")
                dispatch(onLogin());
            } else {
                throw new Error('Error at login, please contact your administrator');
            }

        } catch (error) {
            console.log(error);
        }
    }

    const startLogout = async (executeLogOutApi = true) => {
        try {
            if (executeLogOutApi) await logout();
            localStorage.removeItem("session")
            dispatch(onLogout());
        } catch (error) {
            console.log(error);
        }
    }

    const checkAuthToken = async () => {
        const session = localStorage.getItem("session");

        if (session === 'true') {
            dispatch(onLogin());
        } else {
            dispatch(onLogout());
        }
    }

    return {
        //Properties        
        status,
        //Methods
        startLogin,
        startLogout,
        checkAuthToken
    }

}