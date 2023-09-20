import { createSlice } from '@reduxjs/toolkit';

import { SearchDogsResponse, Dog, SearchDogsRequest, Sort } from '../../interfaces';


interface State {
    dogBreedsArray: string[],
    searchData: SearchDogsRequest,
    sortData: Sort,
    dogSearchResult: SearchDogsResponse | undefined,
    dogsInformationArray: Dog[],
    dogMatch: Dog | undefined,
    dogErrorMessage: string | undefined
}

const initialState: State = {
    dogBreedsArray: [],
    searchData: {},
    sortData: { sortType: "asc", sortFilter: "breed" },
    dogSearchResult: undefined,
    dogsInformationArray: [],
    dogMatch: undefined,
    dogErrorMessage: undefined
}

export const dogShelterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onGetBreedArray: (state, { payload }: { payload: string[] }) => {
            state.dogBreedsArray = payload;
        },
        onSearchDogs: (state, { payload }: { payload: SearchDogsResponse }) => {
            state.dogSearchResult = payload;
        },
        onGetDogsInformation: (state, { payload }: { payload: Dog[] }) => {
            state.dogsInformationArray = payload;
        },
        onChangeSearchData: (state, { payload }: { payload: SearchDogsRequest }) => {
            state.searchData = payload;
        },
        onChangeSortData: (state, { payload }: { payload: Sort }) => {
            state.sortData = payload;
        },
        onGetDogMatch: (state, { payload }: { payload: Dog | undefined }) => {
            state.dogMatch = payload;
        },
        onSetDogErrorMessage: (state, { payload }: { payload: string | undefined }) => {
            state.dogErrorMessage = payload;
        },
        onClearDogErrorMessage: (state) => {
            state.dogErrorMessage = undefined;
        },
        onDogShelterLogOut: (state) => {
            state.dogBreedsArray = [];
            state.searchData = {};
            state.sortData = { sortType: "asc", sortFilter: "breed" };
            state.dogSearchResult = undefined;
            state.dogsInformationArray = [];
            state.dogMatch= undefined;
            state.dogErrorMessage= undefined;
        }
    }
});

export const {
    onGetBreedArray,
    onSearchDogs,
    onGetDogsInformation,
    onChangeSearchData,
    onChangeSortData,
    onGetDogMatch,
    onClearDogErrorMessage,
    onSetDogErrorMessage,
    onDogShelterLogOut
} = dogShelterSlice.actions;