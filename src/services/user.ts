import api from './api';
import { API_USERS } from '../constants/mock';
import User from '../entities/User';
import { asyncLocalStorage } from '../utils/localStorage';

export const getUsers = (): Promise<User[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    let authToken = await asyncLocalStorage.getItem('authToken');
    authToken = JSON.parse(authToken);
    const response = await api.get(API_USERS, { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}` }
    });
    if (response.status === 200) {
      resolve(response.data.users);
    }
  } catch (error) {
    console.log(error);
    reject(error);
  }
});