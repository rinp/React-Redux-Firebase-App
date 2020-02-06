import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SignedInLinks } from "./SignedInLinks";
import { SignedOutLinks } from "./SignedOutLinks";
import { useSelector } from "react-redux";
// import { useFirebaseConnect } from "react-redux-firebase";
import { Navbar as Nav, Container } from "react-bulma-components";
export const Navbar: FC = () => {
  // useFirebaseConnect();
  const { auth, profile } = useSelector(state => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }));
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <Nav fixed="top">
      <Container>
        <Nav.Brand>
          <Link to="/" className="navbar-item">
            MarioPlanTrase
          </Link>
        </Nav.Brand>
        <Nav.Menu>{links}</Nav.Menu>
      </Container>
    </Nav>
  );
};
