import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBavRXxMOqkMkzPoyaw11iHUzbx1WifyMA",
  authDomain: "linkedin-clone-a551b.firebaseapp.com",
  projectId: "linkedin-clone-a551b",
  storageBucket: "linkedin-clone-a551b.appspot.com",
  messagingSenderId: "1084273646439",
  appId: "1:1084273646439:web:255c463b5048f2fa68adc2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db;