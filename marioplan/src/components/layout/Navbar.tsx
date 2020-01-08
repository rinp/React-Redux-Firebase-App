import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SignedInLinks } from "./SignedInLinks";
import { SignedOutLinks } from "./SignedOutLinks";
import { connect, useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import { AppStore } from "../../store/reducers/rootReducer";

export const Navbar: FC = () => {
  useFirebaseConnect();
  const _auth = useSelector((state: AppStore) => state.firebase.auth);
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};
