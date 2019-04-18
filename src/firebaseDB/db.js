import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-database';
import 'firebase/auth'

var fbconfig = {
  apiKey: "FIREBASE_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project.firebaseio.com",
  projectId: "project_ID",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "sender_ID"
};
firebase.initializeApp(fbconfig);

export { firebase };