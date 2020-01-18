import React, { FC } from "react";
import { ProjectList } from "../projects/ProjectList";
import { Notifications } from "./Notifications";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import { useFirestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

export const Dashboard: FC = () => {
  useFirestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]);
  const { projects, auth, notifications } = useSelector((state: AppStore) => ({
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  }));
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};
