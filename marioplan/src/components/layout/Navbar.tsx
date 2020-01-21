import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SignedInLinks } from "./SignedInLinks";
import { SignedOutLinks } from "./SignedOutLinks";
import { useSelector } from "react-redux";
// import { useFirebaseConnect } from "react-redux-firebase";
import { AppStore } from "../../store/reducers/rootReducer";
import { Navbar as Nav } from "react-bulma-components";
export const Navbar: FC = () => {
  // useFirebaseConnect();
  const { auth, profile } = useSelector((state: AppStore) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }));
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <Nav>
      <Nav.Brand>
        <Link to="/" className="navbar-item">
          MarioPlanTrase
        </Link>
      </Nav.Brand>
      <Nav.Menu>{links}</Nav.Menu>
    </Nav>
  );
};
