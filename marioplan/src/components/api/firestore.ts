export type Projects = Project[];
export type Project = {
  id: string;
  title: string;
  content: string;
  authorFirstName: string;
  authorLastName: string;
  createdAt: firebase.firestore.Timestamp;
};
