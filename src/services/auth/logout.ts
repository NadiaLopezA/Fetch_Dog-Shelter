import { AxiosResponse } from 'axios';

import { appApi } from '../../api';

export const logout = async () => {
    const result = await appApi.post<void, AxiosResponse<string>>('/auth/logout', null);
    return result
}