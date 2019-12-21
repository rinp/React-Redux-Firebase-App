import { AnyAction } from "redux";
import { ProjectStore, Project } from "./store";

export interface CreateAction extends AnyAction {
  type: "CREATE_PROJECT";
  project: Omit<Project, "id">;
}

interface DeleteAction extends AnyAction {
  type: "DELETE_PROJECT";
  project: Pick<Project, "id">;
}

export type ProjectAction = CreateAction | DeleteAction;
const initState: ProjectStore = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};

const projectReducer = (
  state: ProjectStore = initState,
  action: ProjectAction
): ProjectStore => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
  }
  return state;
};

export default projectReducer;
