import { AuthAction } from "./authReducer";
import project, { ProjectAction } from "./projectReducer";
import { combineReducers } from "redux";
import { ProjectStore } from "./store";

export interface AppStore {
  project: ProjectStore;
}

type AppAction = ProjectAction | AuthAction;

const rootReducer = combineReducers({
  project
});

export default rootReducer;
