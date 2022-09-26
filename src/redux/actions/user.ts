import User from "../../entities/User";
import { getUsers } from "../../services/user";
import { GET_USERS } from "../types/user";

export const obtainUsers = () => {
  return async (dispatch: any) => {
    try {
      const users: User[] | unknown = await getUsers();
      dispatch({
        type: GET_USERS,
        payload: users,
      });
    } catch (error) {
      console.log(error);
    }
  };
};