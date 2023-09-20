//Imports
import { useDispatch, useSelector } from 'react-redux';

import { onLogin, onLogout, onChecking, onSetErrorMessage, onClearErrorMessage } from '../store';
import { RootState } from '../store/store';

import { login, logout } from '../services';
import { LoginRequest } from '../interfaces';


export const useAuthStore = () => {

    const { status, errorMessage } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (payload: LoginRequest) => {

        dispatch(onChecking());

        const result = await login(payload);

        if (result.data === 'OK') {
            localStorage.setItem("session", "true")
            dispatch(onLogin());
        } else {
            throw new Error('Error at login, please contact your administrator');
        }


    }

    const startLogout = async (executeLogOutApi = true) => {

        if (executeLogOutApi) await logout();
        localStorage.removeItem("session")
        dispatch(onLogout());

    }

    const checkAuthToken = async () => {
        const session = localStorage.getItem("session");

        if (session === 'true') {
            dispatch(onLogin());
        } else {
            dispatch(onLogout());
        }
    }

    const setErrorMessage = (message: string) => {
        dispatch(onSetErrorMessage(message));
    }

    const clearErrorMessage = () => {
        dispatch(onClearErrorMessage());
    }

    return {
        //Properties        
        status, 
        errorMessage,       
        //Methods
        startLogin,
        startLogout,
        checkAuthToken,
        setErrorMessage,
        clearErrorMessage
    }

}