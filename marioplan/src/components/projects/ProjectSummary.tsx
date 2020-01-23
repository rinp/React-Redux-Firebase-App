import React, { FC } from "react";
import { Project } from "../../store/reducers/store";
import moment from "moment";
import { Content } from "react-bulma-components";

interface Props {
  project: Project;
}
export const ProjectSummary: FC<Props> = ({ project }) => {
  return (
    <Content>
      <h5>{project.title}</h5>
      <div>
        Posted by {project.authorFirstName} {project.authorLastName}
      </div>
      <div className="has-text-grey">
        {moment(project.createdAt.toDate()).calendar()}
      </div>
    </Content>
  );
};
