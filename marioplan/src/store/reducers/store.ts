export type AppStore = {
  project: ProjectStore;
  auth: AuthStore;
};

export type ProjectStore = {
  projects: Projects;
};
export type Projects = Project[];
export type Project = {
  id: string;
  title: string;
  content: string;
};

export type AuthStore = {};
