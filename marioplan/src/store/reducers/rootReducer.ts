import { ProjectStore } from "./store";
import { firebaseReducer, FirebaseReducer } from "react-redux-firebase";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

export interface AppStore {
  project: ProjectStore;
  firebase: FirebaseReducer.Reducer;
  firestore: any;
}

export const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
