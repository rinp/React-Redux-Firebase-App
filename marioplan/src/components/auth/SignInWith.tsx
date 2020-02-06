import React, { FC } from "react";
import { Button, Columns, Card } from "react-bulma-components";
import { useFirebase } from "react-redux-firebase";

export const SignInWith: FC = () => {
  const firebase = useFirebase();
  const googleLogin = (): void => {
    firebase.login({ provider: "google", type: "popup" });
  };
  return (
    <Columns centered={true}>
      <Columns.Column size={5}>
        <Card>
          <Card.Header>
            <Card.Header.Title>Sign in with</Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <Button color="success" onClick={googleLogin}>
              Google
            </Button>
          </Card.Content>
        </Card>
      </Columns.Column>
    </Columns>
  );
};
