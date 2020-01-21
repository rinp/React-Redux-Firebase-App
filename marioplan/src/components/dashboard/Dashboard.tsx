import React, { FC } from "react";
import { ProjectList } from "../projects/ProjectList";
import { Notifications } from "./Notifications";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import { useFirestoreConnect, isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { Container, Columns } from "react-bulma-components";

export const Dashboard: FC = () => {
  useFirestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]);
  const { projects, auth, notifications } = useSelector((state: AppStore) => ({
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  }));
  if (isEmpty(auth)) return <Redirect to="/signin" />;
  return (
    <Container>
      <Columns>
        <Columns.Column mobile={{ size: 12 }} size={6}>
          <ProjectList projects={projects} />
        </Columns.Column>
        <Columns.Column mobile={{ size: 12 }} size={5} offset={1}>
          <Notifications notifications={notifications} />
        </Columns.Column>
      </Columns>
    </Container>
  );
};
