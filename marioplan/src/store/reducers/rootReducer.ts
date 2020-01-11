import { ProjectStore } from "./store";
import { firebaseReducer, FirebaseReducer } from "react-redux-firebase";
import { authReducer, AuthStore } from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

export interface AppStore {
  auth: AuthStore;
  project: ProjectStore;
  firebase: FirebaseReducer.Reducer;
  firestore: any;
}

export const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
