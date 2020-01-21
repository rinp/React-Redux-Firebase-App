import React, {
  FC,
  // ventHandler,
  // ChangeEventHandler,
  // useState,
} from "react";
// import { Button,Field,Control } from "react-bulma-components";
import { Button, Container, Form, Card, Columns } from "react-bulma-components";
import { useFirebase, isEmpty, isLoaded } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import { useFormik } from "formik";
import * as Yup from "yup";

const { Label, Control, Field, Input, Help } = Form;

const validationSchema = Yup.object({
  email: Yup.string().required("emailは必須です"),
  password: Yup.string().required("passwordは必須です"),
});

export const SignIn: FC = () => {
  const auth = useSelector((state: AppStore) => state.firebase.auth);
  const firebase = useFirebase();
  // const [state, updateState] = useState<{ email: string; password: string }>({
  //   email: "",
  //   password: "",
  // });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: values => {
      console.log("formik submit");
      firebase.auth().signInWithEmailAndPassword(values.email, values.password);
    },
  });

  console.log(auth);
  if (!isLoaded(auth) && !isEmpty(auth)) {
    console.log(auth);
    return <Redirect to="/" />;
  }

  // const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
  //   updateState({
  //     ...state,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  // const handleSubmit: ventHandler = async e => {
  //   e.preventDefault();
  //   await firebase
  //     .auth()
  //     .signInWithEmailAndPassword(state.email, state.password);
  //   console.log("end submit");
  // };

  return (
    <Container>
      <Columns>
        <Columns.Column offset={4} size={4}>
          <Card>
            <Card.Header>
              <Card.Header.Title>Sign In</Card.Header.Title>
            </Card.Header>
            <Card.Content>
              <form onSubmit={formik.handleSubmit}>
                <Field>
                  <Label htmlFor="email">Email</Label>
                  <Control>
                    <Input
                      id="email"
                      placeholder="Text input"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      color={!!formik.errors.password ? "danger" : undefined}
                    />
                  </Control>
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
  );
};
