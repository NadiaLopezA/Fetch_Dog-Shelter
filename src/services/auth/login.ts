import { AxiosResponse } from 'axios';

import { appApi } from '../../api';

import { LoginRequest } from '../../interfaces';

export const login = async (payload: LoginRequest): Promise<AxiosResponse<string>> => {
    const result = await appApi.post<LoginRequest, AxiosResponse<string>>('/auth/login', payload);
    return result;
}