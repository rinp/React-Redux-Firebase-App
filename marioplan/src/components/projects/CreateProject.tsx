import React, {
  FC,
  useState,
  ChangeEventHandler,
  FormEventHandler
} from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { useHistory } from "react-router";

export const CreateProject: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, updateState] = useState({
    title: "",
    content: ""
  });
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    updateState({
      ...state,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    dispatch(createProject(state));
    history.push("/");
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input type="text" id="title" onChange={handleChange} />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};
