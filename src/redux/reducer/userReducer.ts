import User from "../../entities/User";
import { GET_USERS } from "../types/user";

interface IActionProps {
  type: string;
  payload: any | unknown;
}

interface IInitialStateProps {
  users: User[] | [];
}

const intialState: IInitialStateProps = {
  users: [],
}

export const userReducer = (state = intialState, action: IActionProps) => {
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.payload,
      }
    default:
    return state
  }
}