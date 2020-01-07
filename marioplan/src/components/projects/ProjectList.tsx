import React, { FC } from "react";
import { ProjectSummary } from "./ProjectSummary";
import { Projects } from "../../store/reducers/store";
import { Link } from "react-router-dom";

interface Props {
  projects: Projects;
}
export const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};
