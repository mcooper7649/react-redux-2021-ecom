import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBEX1nmQvUFYl2J3zxmGd5ZEpocQREgnmg',
  authDomain: 'crowndb-24909.firebaseapp.com',
  projectId: 'crowndb-24909',
  storageBucket: 'crowndb-24909.appspot.com',
  messagingSenderId: '111802295139',
  appId: '1:111802295139:web:a1f4b27a0ad5625b932956',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithGoogle();

export default firebase;
