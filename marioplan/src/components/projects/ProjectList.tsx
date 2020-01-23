import React, { FC } from "react";
import { ProjectSummary } from "./ProjectSummary";
import { Projects } from "../../store/reducers/store";
import { Link } from "react-router-dom";
import { Panel } from "react-bulma-components";

interface Props {
  projects: Projects;
}
export const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <>
      {projects && (
        <Panel backgroundColor="light">
          {projects.map(project => (
            <Link
              to={"/project/" + project.id}
              key={project.id}
              className="panel-block"
            >
              <ProjectSummary project={project} />
            </Link>
          ))}
        </Panel>
      )}
      )}
    </>
  );
};
