// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1kCDy6kZE1UQYE69bwBBE1odA69WxOuE",
  authDomain: "react-chat-app-a239c.firebaseapp.com",
  projectId: "react-chat-app-a239c",
  storageBucket: "react-chat-app-a239c.appspot.com",
  messagingSenderId: "713666216900",
  appId: "1:713666216900:web:9694c0142c416575f55a91",
  measurementId: "G-N9QWRRW5HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();