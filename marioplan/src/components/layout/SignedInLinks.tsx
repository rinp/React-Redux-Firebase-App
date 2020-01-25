import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { Navbar as Nav } from "react-bulma-components";

export const SignedInLinks: FC<{ profile: { initials: string } }> = ({
  profile,
}) => {
  const firebase = useFirebase();

  const signOut = async (): Promise<void> => {
    await firebase.auth().signOut();
  };

  return (
    <Nav.Container position="end">
      <div className="buttons">
        <NavLink className="button is-primary" to="/create">
          New Project
        </NavLink>
        <button className="button" onClick={signOut}>
          Sign Out
        </button>
        <NavLink to="/" className="button">
          {profile.initials}
        </NavLink>
      </div>
    </Nav.Container>
  );
};
