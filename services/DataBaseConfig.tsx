import { initializeApp,FirebaseApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {  GoogleAuthProvider, getAuth,FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAp_6dQfM8L7eRuYwFOdaD9GBTpRdlvSVE",
  authDomain: "drone-86eaa.firebaseapp.com",
  projectId: "drone-86eaa",
  storageBucket: "drone-86eaa.appspot.com",
  messagingSenderId: "730797271311",
  appId: "1:730797271311:web:e5d22439a342953dae367a",
  measurementId: "G-1TRJPGC1GX"
};

const app: FirebaseApp=initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const facebookAuthProvider = new  FacebookAuthProvider();