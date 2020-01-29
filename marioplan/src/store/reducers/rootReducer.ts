import {
  firebaseReducer,
  FirebaseReducer,
  FirestoreReducer,
} from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { loadReducer, LoadState } from "./loadReducer";

export interface AppStore {
  load: LoadState;
  firebase: FirebaseReducer.Reducer<
    {},
    {
      lastName: string;
      firstName: string;
      initials: string;
    }
  >;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  firestore: FirestoreReducer.Reducer;
}

export const rootReducer = combineReducers({
  load: loadReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
