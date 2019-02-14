import * as firebase from 'firebase/app';
import 'firebase/firebase-database';

var config = {
  apiKey: "AIzaSyD_sI0Le2qEXByl5im7F33kM615d_fjkZQ",
  authDomain: "chubby-kitchen.firebaseapp.com",
  databaseURL: "https://chubby-kitchen.firebaseio.com",
  projectId: "chubby-kitchen",
  storageBucket: "chubby-kitchen.appspot.com",
  messagingSenderId: "1093221764874"
};
firebase.initializeApp(config);

const eventData = firebase.database().ref("EventList/").orderByChild("lastdate_enroll").startAt((new Date()).toISOString());
const archiveData = firebase.database().ref("ArchiveEvent/");

export { eventData , archiveData };