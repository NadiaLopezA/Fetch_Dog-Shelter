import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated'
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';            
        },
        onLogin: ( state ) => {
            state.status = 'authenticated';            
        },
        onLogout: ( state ) => {
            state.status = 'not-authenticated';            
        }
    }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;