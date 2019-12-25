import { AuthAction } from "./authReducer";
import { ProjectAction } from "./projectReducer";
import { combineReducers } from "redux";
import { ProjectStore } from "./store";
import { firebaseReducer } from "react-redux-firebase";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { firestoreReducer } from "redux-firestore";
import "firebase/firestore"; //
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { getFirestore } from "redux-firestore";
import { createStore, applyMiddleware, compose } from "redux";
import { getFirebase } from "react-redux-firebase";
import { createBrowserHistory } from "history";

export interface AppStore {
  project: ProjectStore;
  router: RouterState;
}

export const history = createBrowserHistory();

const firebase = firebaseReducer;
const firestore = firestoreReducer;
const router = (history: History) => connectRouter(history);

type AppAction = ProjectAction | AuthAction;
export const createRootReducer = (history: History) =>
  combineReducers({
    firebase,
    firestore,
    router: router(history)
  });
export const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk.withExtraArgument({ getFirebase, getFirestore })
    )
  )
);
