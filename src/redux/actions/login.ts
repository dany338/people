import { IDataResponse, ILoginProps } from "../../entities/Login";
import { loginUser } from "../../services/login";
import { AUTH_USER, LOGOUT_USER } from "../types/login";
import { asyncLocalStorage } from '../../utils/localStorage';

export const authUser = (data: ILoginProps) => {
  return async (dispatch: any) => {
    try {
      const response: IDataResponse | unknown = await loginUser(data);
      dispatch({
        type: AUTH_USER,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUser = (data: ILoginProps) => {
  return async (dispatch: any) => {
    try {
      await asyncLocalStorage.removeItem('authToken');
      dispatch({
        type: LOGOUT_USER,
      });
    } catch (error) {
      console.log(error);
    }
  };
};