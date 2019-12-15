import React, { FC } from "react";
import { ProjectList } from "../projects/ProjectList";
import { Notifications } from "./Notifications";

export const Dashboard: FC = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};
