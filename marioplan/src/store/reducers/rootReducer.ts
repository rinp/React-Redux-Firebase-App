import { AuthAction } from "./authReducer";
import { ProjectAction, projectReducer as project } from "./projectReducer";
import { ProjectStore } from "./store";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import "firebase/firestore";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

export interface AppStore {
  project: ProjectStore;
}

const firebase = firebaseReducer;

type AppAction = ProjectAction | AuthAction;
export const createRootReducer = combineReducers({
  project,
  firebase
});

export const store = createStore(
  createRootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);
