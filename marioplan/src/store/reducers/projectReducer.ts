import { AnyAction } from "redux";
import { ProjectStore } from "./store";

// export interface CreateAction extends AnyAction {
//   type: "CREATE_PROJECT";
//   project: Omit<Project, "id">;
// }
export interface CreateProjectSuccess extends AnyAction {
  type: "CREATE_PROJECT_SUCCESS";
}

export interface CreateProjectError extends AnyAction {
  type: "CREATE_PROJECT_ERROR";
  error: Error;
}

// interface DeleteAction extends AnyAction {
//   type: "DELETE_PROJECT";
//   project: Pick<Project, "id">;
// }

export type ProjectAction =
  // | CreateAction
  // | DeleteAction
  CreateProjectSuccess | CreateProjectError;
const initState: ProjectStore = {};

export const projectReducer = (
  state: ProjectStore = initState,
  action: ProjectAction,
): ProjectStore => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("create project success");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error");
      return state;
    default:
      const _: never = action;
  }
  return state;
};
