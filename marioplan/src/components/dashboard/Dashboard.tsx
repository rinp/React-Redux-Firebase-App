import React, { Component, FC } from "react";
import { ProjectList } from "../projects/ProjectList";
import { Notifications } from "./Notifications";
import { connect } from "react-redux";
import { Projects } from "../../store/reducers/projectReducer";
import { AppStore } from "../../store/reducers/rootReducer";

type Props = {
  projects: Projects;
};

const dashboard: FC<Props> = ({ projects }) => {
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

const mapStateToProps = (state: AppStore): Props => {
  return {
    projects: state.project.projects
  };
};

export const Dashboard = connect(mapStateToProps)(dashboard);
