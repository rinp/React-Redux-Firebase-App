// tslint:disable-next-line: no-import-side-effect
import "firebase";

export type Project = {
  id: string;
  title: string;
  content: string;
  authorFirstName: string;
  authorLastName: string;
  createdAt: firebase.firestore.Timestamp;
};

export type User = {
  firstName: string;
  lastName: string;
};
