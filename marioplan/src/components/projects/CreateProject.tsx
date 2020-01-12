import React, {
  FC,
  useState,
  ChangeEventHandler,
  FormEventHandler
} from "react";
// import { useDispatch } from "react-redux";
// import { createProject } from "../../store/actions/projectActions";
import { useHistory, Redirect } from "react-router";
import { useFirestore } from "react-redux-firebase";
import { firestore as fs } from "firebase";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";

export const CreateProject: FC = () => {
  // const dispatch = useDispatch();
  const auth = useSelector((state: AppStore) => state.firebase.auth);
  const profile = useSelector((state: AppStore) => state.firebase.profile);
  const history = useHistory();
  const firestore = useFirestore();
  const [state, updateState] = useState({
    title: "",
    content: ""
  });
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    updateState({
      ...state,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();
    await firestore.collection("projects").add({
      ...state,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: auth.uid,
      createdAt: fs.Timestamp.now()
    });
    history.push("/");
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input type="text" id="title" onChange={handleChange} />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};
