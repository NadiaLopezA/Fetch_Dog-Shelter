import { AxiosResponse } from 'axios';

import { appApi } from '../../../api';

import { SearchDogsRequest, SearchDogsResponse } from '../../../interfaces';

export const searchdogs = async(payload: SearchDogsRequest): Promise<AxiosResponse<SearchDogsResponse>> => {

    const result =  await appApi.get<SearchDogsRequest, AxiosResponse<SearchDogsResponse>>('/dogs/search', { params: payload });
    return result;

}

