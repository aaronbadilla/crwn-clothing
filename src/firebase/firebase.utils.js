import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'


const config = {
    apiKey: "AIzaSyCLDw9ll1Ji3ej-STRPPNC8aZBkSvXu01w",
    authDomain: "crwn-db-3fab9.firebaseapp.com",
    projectId: "crwn-db-3fab9",
    storageBucket: "crwn-db-3fab9.appspot.com",
    messagingSenderId: "749571312559",
    appId: "1:749571312559:web:31485a3532a4c1dd4f3d5a",
    measurementId: "G-4N5N3VR6S3"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;