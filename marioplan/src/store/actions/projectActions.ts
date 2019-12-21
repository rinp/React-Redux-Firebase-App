import { ProjectAction, CreateAction } from "../reducers/projectReducer";
import { AppStore } from "../reducers/rootReducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

type CreateProject = (
  project: CreateAction["project"]
) => ThunkAction<void, AppStore, void, ProjectAction>;
export const createProject: CreateProject = (
  project: CreateAction["project"]
) => {
  return (
    dispatch: ThunkDispatch<AppStore, void, ProjectAction>
    //    getState: () => AppStore
  ): void => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
