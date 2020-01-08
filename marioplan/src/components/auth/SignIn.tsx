import React, {
  FC,
  FormEventHandler,
  ChangeEventHandler,
  useState
} from "react";
import { useFirebase } from "react-redux-firebase";

export const SignIn: FC = () => {
  const auth = useFirebase().auth();

  const [state, updateState] = useState<{ email: string; password: string }>({
    email: "",
    password: ""
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    updateState({
      ...state,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(state.email, state.password);
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};
