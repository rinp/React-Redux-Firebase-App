import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Project, Projects } from "../../store/reducers/store";
import { AppStore } from "../../store/reducers/rootReducer";
import { Redirect } from "react-router-dom";
import moment from "moment";

export const ProjectDetails: FC = () => {
  useFirestoreConnect("projects");
  const { id } = useParams<{ id: string }>();
  const projects: Projects = useSelector<AppStore, Projects>(
    (state: AppStore) => state.firestore.ordered.projects,
  );
  const auth = useSelector((state: AppStore) => state.firebase.auth);
  const project: Project | null | undefined = projects?.find(
    pj => pj.id === id,
  );
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>s
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};
