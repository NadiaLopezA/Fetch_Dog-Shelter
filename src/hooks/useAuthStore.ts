//Imports
import { useDispatch, useSelector } from 'react-redux';

import { onLogin, onLogout, onChecking, clearErrorMessage } from '../store';
import { RootState } from '../store/store';

import { LoginRequest } from '../interfaces';

import {login, logout} from '../services';



export const useAuthStore = () => {

    const { status , user, errorMessage } = useSelector( (state: RootState) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async(payload: LoginRequest) => {

        dispatch(onChecking());

        try{
            const result = await login(payload);
            
            if (result.data === 'OK') {
                dispatch(onLogin());                
            }else{
                throw new Error('Error at login, please contact your administrator');                
            }

        }catch( error ){
            console.log(error);
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        }
    }

    const startLogout = async() => {

        try{

            const result = await logout();

            if(result.data === 'OK'){
                dispatch(onLogout(''));
            }else{
                throw new Error('Error at logout, please contact your administrator');                
            }

        }catch(error){

            console.log(error);

        }
    }

    const checkAuthToken = async () => {
        if( status !== 'authenticated' ) {
            dispatch(onLogout(''));
        }
    }

    return{
        //Properties
        errorMessage,
        user,
        status,
        //Methods
        startLogin,
        startLogout,
        checkAuthToken
    }

}