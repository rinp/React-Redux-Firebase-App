import { AuthAction } from "./authReducer";
import project, { ProjectAction } from "./projectReducer";
import { combineReducers, AnyAction } from "redux";
import { ProjectStore } from "./store";
import { firebaseReducer } from "react-redux-firebase";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { Reducer } from "react";
export interface AppStore {
  project: ProjectStore;
  router: RouterState;
}

type AppAction = ProjectAction | AuthAction;
export const createRootReducer = (
  history: History
): Reducer<AppStore, AnyAction> =>
  combineReducers({
    project,
    router: connectRouter(history),
    firebaseReducer
  });
