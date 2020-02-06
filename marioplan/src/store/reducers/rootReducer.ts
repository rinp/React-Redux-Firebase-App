import {
  firebaseReducer,
  FirebaseReducer,
  FirestoreReducer,
} from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { loadReducer, LoadState } from "./loadReducer";
import "react-redux";

declare module "react-redux" {
  interface DefaultRootState {
    load: LoadState;
    firebase: FirebaseReducer.Reducer<
      {},
      {
        lastName: string;
        firstName: string;
        initials: string;
      }
    >;
    firestore: FirestoreReducer.Reducer;
  }
}

export const rootReducer = combineReducers({
  load: loadReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
