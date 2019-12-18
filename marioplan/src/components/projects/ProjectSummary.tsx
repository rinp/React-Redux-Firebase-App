import React, { FC } from "react";
import { Project } from "../../store/reducers/projectReducer";

interface Props {
  project: Project;
}
export const ProjectSummary: FC<Props> = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by The Net Ninja</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};
