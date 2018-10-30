import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
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

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  firebase,
  db
};