import { AnyAction } from "redux";

const initState: AuthStore = {};

export type AuthAction = AnyAction;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authReducer = (
  state: AuthStore = initState,
  action: AuthAction
): AuthStore => {
  if (action.type === "abc") {
    //
  }
  return state;
};
export type AuthStore = {};

export default authReducer;
