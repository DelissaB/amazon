import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmWE6SQIFxotOSQ6RejJP7exviMcxByuE",
  authDomain: "clone-app-10d64.firebaseapp.com",
  databaseURL: "https://clone-app-10d64.firebaseio.com",
  projectId: "clone-app-10d64",
  storageBucket: "clone-app-10d64.appspot.com",
  messagingSenderId: "386030086709",
  appId: "1:386030086709:web:4d142f1ff692633dbedf7c",
  measurementId: "G-X4ESDNCD5K",
});

const auth = firebase.auth();

export { auth };
