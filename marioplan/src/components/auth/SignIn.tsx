import React, {
  FC,
  // FormEventHandler,
  // ChangeEventHandler,
  // useState,
} from "react";
import { useFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  if (auth.uid) {
    return <Redirect to="/" />;
  }

  // const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
  //   updateState({
  //     ...state,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  // const handleSubmit: FormEventHandler = async e => {
  //   e.preventDefault();
  //   await firebase
  //     .auth()
  //     .signInWithEmailAndPassword(state.email, state.password);
  //   console.log("end submit");
  // };

  return (
    <div className="container">
      <form className="white" onSubmit={formik.handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <span className="helper-text">{formik.errors.email}</span>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span className="helper-text">{formik.errors.password}</span>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
