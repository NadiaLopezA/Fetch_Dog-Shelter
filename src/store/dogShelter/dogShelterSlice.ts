import { createSlice } from '@reduxjs/toolkit';

import { SearchDogsResponse, Dog, SearchDogsRequest, Sort } from '../../interfaces';


interface State {
    dogBreedsArray: string[],
    searchData:SearchDogsRequest,
    sortData: Sort,
    dogSearchResult: SearchDogsResponse,
    dogsInformationArray:  Dog[],
    dogMatch: Dog | undefined
}

const initialState: State = {
    dogBreedsArray: [],
    searchData: {},
    sortData: { sortType: "asc", sortFilter: "breed" },
    dogSearchResult: {
        resultIds: [],
        total: 0
    },
    dogsInformationArray: [],
    dogMatch: undefined
}

export const dogShelterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       onGetBreedArray: (state, { payload }: {payload: string[]}) => {
        state.dogBreedsArray = payload;
       },
       onSearchDogs: (state, {payload}: {payload: SearchDogsResponse}) => {
        state.dogSearchResult = payload;
       },
       onGetDogsInformation: (state, {payload}: {payload: Dog[]}) => {
        state.dogsInformationArray = payload;
       },
       onChangeSearchData: (state, {payload}: {payload: SearchDogsRequest}) => {
        state.searchData = payload;
       },
       onChangeSortData: (state, {payload}: {payload: Sort}) => {
        state.sortData = payload;
       },
       onGetDogMatch: (state, {payload}: {payload: Dog | undefined}) => {
        state.dogMatch = payload;
       },
    }
});

export const { onGetBreedArray, onSearchDogs, onGetDogsInformation, onChangeSearchData, onChangeSortData, onGetDogMatch } = dogShelterSlice.actions;