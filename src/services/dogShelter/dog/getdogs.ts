import { AxiosResponse } from 'axios';

import { appApi } from '../../../api';

import {Dog} from '../../../interfaces';

export const getdogs = async(payload: string[]): Promise<AxiosResponse<Dog[]>> => {

    const result =  await appApi.post<string[], AxiosResponse<Dog[]>>('/dogs', payload);
    return result;

}

