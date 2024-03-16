// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMMBkZR4bLDWH1t-se3Z7D9vuRW_gYpUE",
  authDomain: "uk-project-text2.firebaseapp.com",
  projectId: "uk-project-text2",
  storageBucket: "uk-project-text2.appspot.com",
  messagingSenderId: "187110030622",
  appId: "1:187110030622:web:90c1d75534c2dd94771d0f",
  measurementId: "G-3D9P0DQZ91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleProvider = new GoogleAuthProvider();


