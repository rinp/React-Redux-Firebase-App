import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Project, Projects } from "../../store/reducers/store";
import { AppStore } from "../../store/reducers/rootReducer";
interface Props {
  id: string;
}
export const ProjectDetails: FC<RouteComponentProps<Props>> = props => {
  useFirestoreConnect("projects");
  const id = props.match.params.id;
  // use router???
  const projects: Projects = useSelector<AppStore, Projects>(
    (state: AppStore) => state.firestore.ordered.projects
  );
  const project: Project | null | undefined = projects?.find(
    pj => pj.id === id
  );
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd September, 2am</div>
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
