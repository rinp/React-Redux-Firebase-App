import React, { FC } from "react";
import { useHistory, Redirect } from "react-router";
import { useFirestore } from "react-redux-firebase";
import { firestore as fs } from "firebase";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import { Button } from "react-bulma-components";
import { useFormik } from "formik";

const initialValues = {
  title: "",
  content: "",
};

export const CreateProject: FC = () => {
  const auth = useSelector((state: AppStore) => state.firebase.auth);
  const isLoading = useSelector((state: AppStore) => state.load.isLoading);
  const profile = useSelector((state: AppStore) => state.firebase.profile);
  const history = useHistory();
  const firestore = useFirestore();
  const formik = useFormik({
    initialValues,
    onSubmit: async v => {
      await firestore.collection("projects").add({
        ...v,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: auth.uid,
        createdAt: fs.Timestamp.now(),
      });
      history.push("/");
    },
  });
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <div className="container">
      <form className="white" onSubmit={formik.handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input type="text" id="title" onChange={formik.handleChange} />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={formik.handleChange}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <Button color="primary" submit={true} loading={isLoading}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};
