import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SignedInLinks } from "./SignedInLinks";
import { SignedOutLinks } from "./SignedOutLinks";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import { AppStore } from "../../store/reducers/rootReducer";

export const Navbar: FC = () => {
  useFirebaseConnect();
  const auth = useSelector((state: AppStore) => state.firebase.auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};
