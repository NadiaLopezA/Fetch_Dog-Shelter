import { createSlice } from '@reduxjs/toolkit';

interface Auth {
    status: string,
    errorMessage: string | undefined
}

const initialState: Auth = {
    status: 'not-authenticated',
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.errorMessage = undefined;
        },
        onLogin: (state) => {
            state.status = 'authenticated';
            state.errorMessage = undefined;
        },
        onLogout: (state) => {
            state.status = 'not-authenticated';
            state.errorMessage = undefined;
        },
        onSetErrorMessage: (state, { payload }: { payload: string | undefined }) => {
            state.errorMessage = payload;
        },
        onClearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});

export const { onChecking, onLogin, onLogout, onSetErrorMessage, onClearErrorMessage } = authSlice.actions;