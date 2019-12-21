import React, { FC } from "react";
import { ProjectSummary } from "./ProjectSummary";
import { Projects } from "../../store/reducers/store";

interface Props {
  projects: Projects;
}
export const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};
