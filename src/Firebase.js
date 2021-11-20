import firebase from 'firebase'
import 'firebase/auth'
// import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsTx8eMPDAjuU6XPwQ9_pzlUrInVyFSEo",
  authDomain: "v1megamart.firebaseapp.com",
  projectId: "v1megamart",
  storageBucket: "v1megamart.appspot.com",
  messagingSenderId: "257984987643",
  appId: "1:257984987643:web:e2ca827a8b7454696dcb5e",
  measurementId: "G-HD59P0DTFY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export default firebaseApp;
export { db, auth };
