import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAnVXcTSfT22f79ivQajNEz-G9zb2mky1M",
  authDomain: "companeats.firebaseapp.com",
  databaseURL: "https://companeats.firebaseio.com",
  projectId: "companeats",
  storageBucket: "companeats.appspot.com",
  messagingSenderId: "6691805542"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  firebase,
  db
};