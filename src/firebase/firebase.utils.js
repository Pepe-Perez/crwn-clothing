import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfyQNAbcd7SOdGn1WnuoVQVUFdqY-5d0c",
    authDomain: "crwn-db-944d9.firebaseapp.com",
    projectId: "crwn-db-944d9",
    storageBucket: "crwn-db-944d9.appspot.com",
    messagingSenderId: "794596800687",
    appId: "1:794596800687:web:c24f66a58a40925e13bc5a"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exist){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try{

            await userRef.set({
                    displayName, 
                    email,
                    createdAt,
                    ...additionalData
            })
          }catch(error){
            console.log('An error ocurred creating user', error.message);
          }
      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;