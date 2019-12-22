import { AuthAction } from "./authReducer";
import project, { ProjectAction } from "./projectReducer";
import { combineReducers } from "redux";
import { ProjectStore } from "./store";
import { firebaseReducer } from "react-redux-firebase";

export interface AppStore {
  project: ProjectStore;
}

type AppAction = ProjectAction | AuthAction;

const rootReducer = combineReducers({
  project,
  firebaseReducer
});

export default rootReducer;
