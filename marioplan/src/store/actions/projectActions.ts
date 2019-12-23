import { ProjectAction, CreateAction } from "../reducers/projectReducer";
import { AppStore } from "../reducers/rootReducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ExtendedFirestoreInstance } from "react-redux-firebase";

type CreateProject = (
  project: CreateAction["project"]
) => ThunkAction<
  void,
  AppStore,
  { getFireStore: () => ExtendedFirestoreInstance },
  ProjectAction
>;

export const createProject: CreateProject = (
  project: CreateAction["project"],
  getState: () => AppStore,
  { getFirestore }: { getFirestore: () => ExtendedFirestoreInstance }
) => {
  return (
    dispatch: ThunkDispatch<AppStore, void, ProjectAction>
    //    getState: () => AppStore
  ): void => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
