import { AnyAction } from "redux";

const initState: AuthStore = {
  authError: null
};
class LoginError implements AnyAction {
  type = "LOGIN_ERROR" as const;
}
class LoginSuccess implements AnyAction {
  type = "LOGIN_SUCCESS" as const;
}
export class SignoutSuccess implements AnyAction {
  type = "SIGNOUT_SUCCESS" as const;
}

export type AuthAction = LoginError | LoginSuccess | SignoutSuccess;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authReducer = (
  state: AuthStore = initState,
  action: AuthAction
): AuthStore => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    default:
      const _: never = action;
  }
  return state;
};
export type AuthStore = {
  authError: string | null;
};

export default authReducer;
