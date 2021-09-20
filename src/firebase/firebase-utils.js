import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDcEscyTH8TrDBOn22BPYlU-czwKGvRnco",
    authDomain: "crown-db-d947b.firebaseapp.com",
    projectId: "crown-db-d947b",
    storageBucket: "crown-db-d947b.appspot.com",
    messagingSenderId: "598371668577",
    appId: "1:598371668577:web:aec3c332d4c7a94eb79020"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;