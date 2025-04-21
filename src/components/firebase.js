// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtlESKzUAwboRYXtI4yhFGjZ0P5QA4EwY",
  authDomain: "personal-site-55402.firebaseapp.com",
  projectId: "personal-site-55402",
  storageBucket: "personal-site-55402.firebasestorage.app",
  messagingSenderId: "367733102768",
  appId: "1:367733102768:web:b1a3829eadf06521f80375",
  measurementId: "G-P4XSKQW21S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, db };
