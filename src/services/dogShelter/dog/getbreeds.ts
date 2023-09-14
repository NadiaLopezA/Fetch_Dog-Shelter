import { AxiosResponse } from 'axios';

import { appApi } from '../../../api';


export const getbreeds = async (): Promise<AxiosResponse<string[]>> => {
    const result =  await appApi.get<void, AxiosResponse<string[]>>('/dogs/breeds');
    return result;
}


