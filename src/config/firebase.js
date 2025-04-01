// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRZnPRxDh4ddqA_gYgSXtnq3BOAxU2fwU",
  authDomain: "buybusy-edb39.firebaseapp.com",
  projectId: "buybusy-edb39",
  storageBucket: "buybusy-edb39.firebasestorage.app",
  messagingSenderId: "875018236009",
  appId: "1:875018236009:web:d4164152e3f2403a8872f8",
  measurementId: "G-69XHWXZL6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };