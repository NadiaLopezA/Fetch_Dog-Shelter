import { AxiosResponse } from 'axios';

import { appApi } from '../../../api';

import { LocationSearchRequest, LocationSearchResponse } from '../../../interfaces';

export const searchlocation = async(payload: LocationSearchRequest): Promise<AxiosResponse<LocationSearchResponse>> => {

    const result =  await appApi.post<LocationSearchRequest, AxiosResponse<LocationSearchResponse>>('/locations/search', payload);
    return result;

}

