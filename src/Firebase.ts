import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID
}

firebase.initializeApp(firebaseConfig);

const db: firebase.firestore.Firestore  = firebase.firestore();

export { firebase, db };

interface FirebaseContext {
  userId: string | null;
  userName: string;
}

export const FirebaseContext = React.createContext<FirebaseContext>({
  userId: null,
  userName: ""
});