import api from './api';
import { API_AUTH } from '../constants/mock';
import { IDataResponse, ILoginProps } from '../entities/Login';
import { asyncLocalStorage } from '../utils/localStorage';

export const loginUser = (data: ILoginProps): Promise<IDataResponse | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(API_AUTH, data);
    if (response.status === 200) {
      await asyncLocalStorage.setItem('authToken', JSON.stringify(response.data.access_token));
      resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    reject(error);
  }
});