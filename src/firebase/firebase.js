import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { apiKey } from '../apiKey';

const config = {
  apiKey,
  authDomain: "companeats.firebaseapp.com",
  databaseURL: "https://companeats.firebaseio.com",
  projectId: "companeats",
  storageBucket: "companeats.appspot.com",
  messagingSenderId: "6691805542"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const auth = firebase.auth();

export {
  auth,
  firebase,
  db
};