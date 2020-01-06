import { AuthAction } from "./authReducer";
import { ProjectAction, projectReducer as project } from "./projectReducer";
import { ProjectStore } from "./store";
import { firebaseReducer } from "react-redux-firebase";
import "firebase/firestore";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

export interface AppStore {
  project: ProjectStore;
}

const firebase = firebaseReducer;
const firestore = firestoreReducer;

type AppAction = ProjectAction | AuthAction;
export const createRootReducer = combineReducers({
  project,
  firebase,
  firestore
});

export const store = createStore(
  createRootReducer,
  compose(applyMiddleware(thunk))
);
