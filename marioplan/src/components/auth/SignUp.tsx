import React, { FC } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import { useFirebase, useFirestore, isEmpty } from "react-redux-firebase";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Container,
  Form,
  Card,
  Columns,
  Section,
  InputProps,
  Button,
} from "react-bulma-components";
import { LoadType } from "../../store/reducers/loadReducer";

interface State {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
const { Label, Field, Input, Help, Control } = Form;

const validationSchema = Yup.object<State>({
  email: Yup.string()
    .required("emailは必須です")
    .email("メール形式で入力してください"),
  password: Yup.string()
    .required("passwordは必須です")
    .min(4, ({ min }) => `${min}文字以上で入力してください。`),
  firstName: Yup.string().required("氏名は必須です"),
  lastName: Yup.string().required("名前は必須です"),
});

export const SignUp: FC = () => {
  const auth = useSelector((state: AppStore) => state.firebase.auth);
  const isLoading = useSelector((state: AppStore) => state.load.isLoading);
  const firestore = useFirestore();
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const formik = useFormik<State>({
    initialValues: { email: "", password: "", firstName: "", lastName: "" },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async state => {
      dispatch({ type: LoadType.START });
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password);
      if (!!res) {
        await firestore
          .collection("users")
          .doc(res.user?.uid)
          .set({
            firstName: state.firstName,
            lastName: state.lastName,
            initials: state.firstName[0] + state.lastName[0],
          });
        // dispatch({ ...new SignupSuccess() });
      }
      dispatch({ type: LoadType.END });
    },
  });
  if (!isEmpty(auth)) {
    return <Redirect to="/" />;
  }

  const InputText: FC<{
    id: keyof typeof formik.initialValues;
    label: string;
    type?: InputProps["type"];
  }> = props => {
    const { id, label, type = "text" } = props;
    console.log(props, id, label);
    return (
      <Field>
        <Label htmlFor={id}>{label}</Label>
        <Input
          type={type}
          id={id}
          onChange={formik.handleChange}
          value={formik.values[id]}
          color={!!formik.errors[id] ? "danger" : undefined}
        />
        <Help color="danger">{formik.errors[id]}</Help>
      </Field>
    );
  };

  return (
    <Section>
      <Container>
        <Columns centered={true}>
          <Columns.Column size={5}>
            <Card>
              <Card.Header>
                <Card.Header.Title>Sign Up</Card.Header.Title>
              </Card.Header>
              <Card.Content>
                <form onSubmit={formik.handleSubmit}>
                  <InputText id="email" label="Email" />
                  <InputText id="firstName" label="First Name" />
                  <InputText id="lastName" label="Last Name" />
                  <InputText id="password" label="Password" type="password" />
                  <Field kind="group">
                    <Control>
                      <Button submit={true} color="primary" loading={isLoading}>
                        Sign Up
                      </Button>
                    </Control>
                  </Field>
                </form>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
