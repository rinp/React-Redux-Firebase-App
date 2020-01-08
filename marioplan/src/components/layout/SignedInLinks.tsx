import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { SignoutSuccess } from "../../store/reducers/authReducer";

export const SignedInLinks: FC = () => {
  const firebase = useFirebase();
  const dispatch = useDispatch();

  const signOut = async (): Promise<void> => {
    await firebase.auth().signOut();
    dispatch(new SignoutSuccess());
  };

  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a onClick={signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
