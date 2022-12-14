import { IDataResponse } from "../../entities/Login";
import { AUTH_USER, LOGOUT_USER } from "../types/login";

interface IActionProps {
  type: string;
  payload: any | unknown;
}

interface IInitialStateProps {
  logged: boolean;
  user: IDataResponse | null;
}

const intialState: IInitialStateProps = {
  logged: false,
  user: null,
}

export const loginReducer = (state = intialState, action: IActionProps) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        logged: true,
        user: action.payload,
      }
    case LOGOUT_USER:
      return {
        logged: false,
        user: null,
      }
    default:
    return state
  }
}