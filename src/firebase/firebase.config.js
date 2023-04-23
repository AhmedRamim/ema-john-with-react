// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHdBmtOkA7OQx_oDzNUterOO7e9Q85cms",
  authDomain: "ema-john-firebase-auth-24b1e.firebaseapp.com",
  projectId: "ema-john-firebase-auth-24b1e",
  storageBucket: "ema-john-firebase-auth-24b1e.appspot.com",
  messagingSenderId: "182055793815",
  appId: "1:182055793815:web:30314f5a9fdf49ff79a5d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;