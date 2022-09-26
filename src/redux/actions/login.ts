import { IDataResponse, ILoginProps } from "../../entities/Login";
import { loginUser } from "../../services/login";
import { AUTH_USER } from "../types/login";

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