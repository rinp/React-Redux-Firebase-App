import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
const firebaseConfig = {
  apiKey: "AIzaSyDe3KmVp2u4_n5wPxSi0oIGR8m4Uogggig",
  authDomain: "ninja-trace.firebaseapp.com",
  databaseURL: "https://ninja-trace.firebaseio.com",
  projectId: "ninja-trace",
  storageBucket: "ninja-trace.appspot.com",
  messagingSenderId: "76353392782",
  appId: "1:76353392782:web:5d3ccdb55ac2c472ac79df",
  measurementId: "G-7RM51065QJ"
};
export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
  // enableClaims: true // Get custom claims along with the profile
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
// firestore.firestore().settings({ timestampsInSnapshots: true });

export const functions = firebase.functions();
export const { FieldValue } = firebase.firestore;

export { firebase };
