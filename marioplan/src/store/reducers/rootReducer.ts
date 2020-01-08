import { AuthAction } from "./authReducer";
import { ProjectAction, projectReducer as project } from "./projectReducer";
import { ProjectStore } from "./store";
import {
  firebaseReducer,
  FirebaseReducer,
  getFirebase
} from "react-redux-firebase";
import "firebase/firestore";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { firestoreReducer, getFirestore } from "redux-firestore";

export interface AppStore {
  project: ProjectStore;
  firebase: FirebaseReducer.Reducer;
  firestore: any;
}

type AppAction = ProjectAction | AuthAction;
export const createRootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export const store = createStore(
  createRootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);
