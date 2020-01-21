import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Navbar as Nav } from "react-bulma-components";

export const SignedOutLinks: FC = () => {
  return (
    <Nav.Container position="end">
      <div className="buttons">
        <NavLink className="button is-primary" to="/signup">
          Sign up
        </NavLink>
        <NavLink className="button" to="/signin">
          Sign in
        </NavLink>
      </div>
    </Nav.Container>
  );
};
