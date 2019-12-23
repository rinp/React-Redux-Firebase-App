import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Dashboard } from "./components/dashboard/Dashboard";
import { ProjectDetails } from "./components/projects/ProjectDetails";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { CreateProject } from "./components/projects/CreateProject";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export const App: FC = () => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
};
