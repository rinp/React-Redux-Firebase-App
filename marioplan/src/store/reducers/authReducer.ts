import { AnyAction } from "redux";

const initState: AuthStore = {
  authError: null,
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

export class SignupSuccess implements AnyAction {
  type = "SIGNUP_SUCCESS" as const;
}

export class SignupError implements AnyAction {
  constructor(error: Error) {
    this.err = error;
  }
  type = "SIGNUP_ERROR" as const;
  err = {
    message: "",
  };
}

export type AuthAction =
  | LoginError
  | LoginSuccess
  | SignoutSuccess
  | SignupSuccess
  | SignupError;

const authReducer = (
  state: AuthStore = initState,
  action: AuthAction,
): AuthStore => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      const _: never = action;
  }
  return state;
};
export type AuthStore = {
  authError: string | null;
};

export { authReducer };
