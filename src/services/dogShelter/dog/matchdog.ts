import { AxiosResponse } from 'axios';

import { appApi } from '../../../api';

import { DogMatchResponse } from '../../../interfaces';

export const matchDog = async(payload: string[]): Promise<AxiosResponse<DogMatchResponse>> => {

    const result =  await appApi.post<string[], AxiosResponse<DogMatchResponse>>('/dogs/match', payload);
    return result;

}

