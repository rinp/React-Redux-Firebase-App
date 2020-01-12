import React, {
  FC,
  useState,
  ChangeEventHandler,
  FormEventHandler
} from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../../store/reducers/rootReducer";
import {
  useFirebase,
  useFirestoreConnect,
  useFirestore
} from "react-redux-firebase";
import { SignupError, SignupSuccess } from "../../store/reducers/authReducer";

interface State {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const SignUp: FC = () => {
  useFirestoreConnect("users");
  const firestore = useFirestore();
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const [state, updateState] = useState<State>({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const { auth } = useSelector((state: AppStore) => ({
    auth: state.firebase.auth,
    authError: state.auth.authError
  }));

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    updateState({
      ...state,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .catch(err => {
        dispatch({ ...new SignupError(err) });
      });
    if (!!res) {
      await firestore
        .collection("users")
        .doc(res.user?.uid)
        .set({
          firstName: state.firstName,
          lastName: state.lastName,
          initials: state.firstName[0] + state.lastName[0]
        });
      dispatch({ ...new SignupSuccess() });
    }
  };
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
