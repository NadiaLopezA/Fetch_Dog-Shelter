import { useDispatch, useSelector } from 'react-redux';

import { 
    onGetBreedArray, 
    onSearchDogs, 
    onGetDogsInformation, 
    onChangeSearchData, 
    onChangeSortData, 
    onGetDogMatch,
    onSetDogErrorMessage,
    onClearDogErrorMessage 
} from '../store';

import { RootState } from '../store/store';

import {getbreeds, searchdogs, matchdog, searchlocation, getdogs, getlocations} from '../services';

import { Dog, Sort, LocationSearchRequest, SearchDogsRequest } from '../interfaces';

import { DOG_SEARCH_PAGE_SIZE, LOCATION_SEARCH_PAGE_SIZE } from '../helpers';
 

export const useDogShelter = () => {
    
    const {   dogBreedsArray, searchData, sortData, dogSearchResult, dogsInformationArray, dogMatch, dogErrorMessage } = useSelector( (state: RootState) => state.dogShelter);
    const dispatch = useDispatch();

    const getDogBreeds = async() => {        
        const result = await getbreeds();
        if (result.data) {
            dispatch(onGetBreedArray(result.data));  
        }
    }

    const updateSearchData = async(payload: SearchDogsRequest) => {
        dispatch(onChangeSearchData(payload));
    }

    const updateSortData = async(payload: Sort) => {
        dispatch(onChangeSortData(payload));
    }

    const getMatch = async(dogs: Dog[]) => {
        const result = await matchdog(dogs.map(dog => dog.id))
        const dog = dogs.find(dog => dog.id === result.data.match)
        dispatch(onGetDogMatch(dog));
    }
    
    const searchdogsWithLocationFilters = async(filters: SearchDogsRequest, locationFilters: LocationSearchRequest) => {
        const result = await searchlocation({
            ...locationFilters,
            size: LOCATION_SEARCH_PAGE_SIZE
        });
        const zipCodes = result.data.results.map(location => location.zip_code)
        const newFilters: SearchDogsRequest = {
            ...filters,
            zipCodes
        }
        if (newFilters?.ageMin === 0) delete newFilters.ageMin
        if (newFilters?.ageMax === 20) delete newFilters.ageMax
        
        updateSearchData(newFilters)
        
        if (zipCodes.length > 0) {
            searchDogResults(newFilters);
        } else {
            dispatch(onSearchDogs({
                resultIds: [],
                total: 0
            }));
            dispatch(onGetDogsInformation([]));
        }
        dispatch(onGetDogMatch());
    }

    const searchDogResults = async(extraFilters?: SearchDogsRequest) => {
        try{
            const sort = `${sortData.sortFilter}:${sortData.sortType}`

            const filters: SearchDogsRequest = {size: DOG_SEARCH_PAGE_SIZE, sort, ...searchData, ...extraFilters}
            if (filters.ageMin === 0) delete filters.ageMin
            if (filters.ageMax === 20) delete filters.ageMax

            const result = await searchdogs(filters);
            const resultIds = result.data.resultIds
            
            dispatch(onSearchDogs(result.data));


            const dogsInfo = await getdogs(resultIds);
            const dogsLocation = await getlocations(dogsInfo.data.map(dog => dog.zip_code));

            for (const dog of dogsInfo.data) {
                dog.location = dogsLocation.data.find(location => location?.zip_code === dog.zip_code)
            }

            dispatch(onGetDogsInformation(dogsInfo.data));
            dispatch(onGetDogMatch());

        }catch(error){
            console.log(error)
            throw new Error('Error at searching dogs, please contact your administrator');                
        }
    }

    const setDogErrorMessage = (message: string) =>{
        dispatch(onSetDogErrorMessage(message));
    }

    const clearDogErrorMessage = () => {
        dispatch(onClearDogErrorMessage());
    }

    return{
        // //Properties
        dogBreedsArray, 
        searchData, 
        dogSearchResult,
        dogsInformationArray,
        dogMatch,
        dogErrorMessage,
        // //Methods
        getDogBreeds,
        searchDogResults,
        searchdogsWithLocationFilters,
        updateSearchData,
        updateSortData,
        getMatch,
        setDogErrorMessage,
        clearDogErrorMessage
    }

}