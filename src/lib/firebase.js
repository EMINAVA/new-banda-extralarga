// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLZK3OQTozMHCZBSMCtZP9VbNJ5d6Sl44",
  authDomain: "banda-extralarga.firebaseapp.com",
  projectId: "banda-extralarga",
  storageBucket: "banda-extralarga.appspot.com",
  messagingSenderId: "688181493673",
  appId: "1:688181493673:web:b0f2a8145a901b005d4eb8",
  measurementId: "G-1FZ34LRWVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.useDeviceLanguage();

export { app, auth };
