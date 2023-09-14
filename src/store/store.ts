import { configureStore } from '@reduxjs/toolkit';
import { authSlice, dogShelterSlice } from './';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        dogShelter: dogShelterSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
