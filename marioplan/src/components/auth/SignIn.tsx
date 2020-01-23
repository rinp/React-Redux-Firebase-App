import React, { FC } from "react";
import {
  Button,
  Container,
  Form,
  Card,
  Columns,
  Section,
} from "react-bulma-components";
import { useFirebase, isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import { useFormik } from "formik";
import * as Yup from "yup";

const { Label, Field, Input, Help } = Form;

const validationSchema = Yup.object({
  email: Yup.string()
    .required("emailは必須です")
    .email("メール形式で入力してください"),
  password: Yup.string()
    .required("passwordは必須です")
    .min(4, ({ min }) => `${min}文字以上で入力してください。`),
});

export const SignIn: FC = () => {
  const auth = useSelector((state: AppStore) => state.firebase.auth);
  const firebase = useFirebase();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      console.log("formik submit");
      firebase.auth().signInWithEmailAndPassword(values.email, values.password);
    },
  });

  if (!isEmpty(auth)) {
    return <Redirect to="/" />;
  }

  // const xx = (va: { [key: string]: string }): string => JSON.stringify(va);
  // const z = xx({ email: "test" });

  return (
    <Section>
      <Container>
        <Columns centered={true}>
          <Columns.Column size={5}>
            <Card>
              <Card.Header>
                <Card.Header.Title>Sign In</Card.Header.Title>
              </Card.Header>
              <Card.Content>
                <form onSubmit={formik.handleSubmit}>
                  <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      color={!!formik.errors.email ? "danger" : undefined}
                    />
                    <Help color="danger">{formik.errors.email}</Help>
                  </Field>
                  <Field>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      color={!!formik.errors.password ? "danger" : undefined}
                    />
                    <Help color="danger">{formik.errors.password}</Help>
                  </Field>
                  <Form.Field kind="group">
                    <Form.Control>
                      <Button submit={true} color="primary">
                        Login
                      </Button>
                    </Form.Control>
                  </Form.Field>
                </form>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
