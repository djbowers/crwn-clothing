import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCVpN-3bMHek9AVgbWdJkGpo5zg6iMG9n8',
  authDomain: 'crwn-clothing-2fcbb.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-2fcbb.firebaseio.com',
  projectId: 'crwn-clothing-2fcbb',
  storageBucket: 'crwn-clothing-2fcbb.appspot.com',
  messagingSenderId: '838876250121',
  appId: '1:838876250121:web:612f9f1ba338c2038278d8'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
