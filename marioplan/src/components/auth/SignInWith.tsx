import React, { FC } from "react";
import { Form, Button } from "react-bulma-components";
import { useFirebase } from "react-redux-firebase";

export const SignInWith: FC = () => {
  const firebase = useFirebase();
  const googleLogin = (): void => {
    firebase.login({ provider: "google", type: "popup" });
  };
  return (
    <>
      <Form.Field kind="group">
        <Form.Control>
          <Button color="success" onClick={googleLogin}>
            Google
          </Button>
        </Form.Control>
      </Form.Field>
    </>
  );
};
