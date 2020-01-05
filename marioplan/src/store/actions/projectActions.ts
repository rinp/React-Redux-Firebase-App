import { ProjectAction, CreateAction } from "../reducers/projectReducer";
import { AppStore } from "../reducers/rootReducer";
import { ThunkAction } from "redux-thunk";
import { ExtendedFirestoreInstance } from "react-redux-firebase";
// import { firestore as fs } from "../../config/fbConfig";
import { firestore as fs } from "firebase";

type CreateProject = (
  project: CreateAction["project"]
) => ThunkAction<
  void,
  AppStore,
  { getFirestore: () => ExtendedFirestoreInstance },
  ProjectAction
>;

export const createProject: CreateProject = (
  project: CreateAction["project"]
) => {
  return (dispatch, _, middle): void => {
    console.log(middle);
    console.log(middle.getFirestore);
    // getFirestore
    const firestore = middle.getFirestore();
    console.log(firestore);
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 12345,
        createdAt: fs.Timestamp.now()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch((error: Error) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};
