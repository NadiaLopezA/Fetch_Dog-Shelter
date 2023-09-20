import { AxiosResponse } from 'axios';

import { appApi } from '../../../api';

import { Location } from '../../../interfaces';

export const getlocations = async(payload: string[]): Promise<AxiosResponse<(Location | null)[]>> => {

    const result =  await appApi.post<string[], AxiosResponse<(Location | null)[]>>('/locations', payload);
    return result;

}