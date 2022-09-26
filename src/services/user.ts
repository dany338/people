import api from './api';
import { API_USERS } from '../constants/mock';
import User from '../entities/User';
import { asyncLocalStorage } from '../utils/localStorage';

export const getUsers = (): Promise<User[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const authToken = await JSON.parse(asyncLocalStorage.getItem('authToken') || '' as string);
    const response = await api.get(API_USERS, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}` }
    });
    if (response.status === 200) {
      resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    reject(error);
  }
});