import React, { FC } from "react";
import { ProjectList } from "../projects/ProjectList";
import { Notifications } from "./Notifications";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";

export const Dashboard: FC = () => {
  const state = useSelector((state: AppStore) => state);
  console.log(state);
  const projects = useSelector((state: AppStore) => state.project.projects);
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};
