import { AxiosResponse } from 'axios';

import { appApi } from '../../../api';

import { Location } from '../../../interfaces';

export const getlocations = async(payload: string[]): Promise<AxiosResponse<Location[]>> => {

    const result =  await appApi.post<string[], AxiosResponse<Location[]>>('/locations', payload);
    return result;

}