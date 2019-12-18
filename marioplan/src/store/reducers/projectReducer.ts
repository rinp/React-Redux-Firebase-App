const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};
export type Project = {
  id: string;
  title: string;
  content: string;
};
export type Projects = Project[];
export type ProjectStore = {
  projects: Projects;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const projectReducer = (state = initState, action: any): any => {
  return state;
};

export default projectReducer;
