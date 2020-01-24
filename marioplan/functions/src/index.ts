import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Project, User, Notifications } from "./types";
admin.initializeApp(functions.config().firebase);

const createNotification = async (
  notification: Notifications,
): Promise<void> => {
  const doc = await admin
    .firestore()
    .collection("notifications")
    .add(notification);
  console.log("notification added", doc);
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data() as Project;
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.Timestamp.now(),
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data() as User;
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.Timestamp.now(),
      };

      return createNotification(notification);
    });
});
