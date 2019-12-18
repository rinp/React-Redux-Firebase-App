import authReducer, { AuthStore } from "./authReducer";
import projectReducer, { ProjectStore } from "./projectReducer";
import { combineReducers } from "redux";

export type AppStore = {
  auth: AuthStore;
  project: ProjectStore;
};

const rootReducer = combineReducers<AppStore>({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;

// the key name will be the data property on the state object
