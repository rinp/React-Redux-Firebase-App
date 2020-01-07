export type AppStore = {
  project: ProjectStore;
  auth: AuthStore;
};

export type ProjectStore = {
  projects?: Projects;
};
export type Projects = Project[];
export type Project = {
  id: string;
  title: string;
  content: string;
  authorFirstName: string;
  authorLastName: string;
};

export type AuthStore = {};
