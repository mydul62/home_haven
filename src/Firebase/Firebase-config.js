// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP4B3UCXqnWUGz9JoSPJb5E5E0yLqSH0w",
  authDomain: "homehaven-auth.firebaseapp.com",
  projectId: "homehaven-auth",
  storageBucket: "homehaven-auth.appspot.com",
  messagingSenderId: "414616189676",
  appId: "1:414616189676:web:cdeb7eb1b475082c81c3c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
