// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChIOhdOpZ6s0pBqVH6koWur6X5gvTY4O4",
  authDomain: "pet-alley.firebaseapp.com",
  projectId: "pet-alley",
  storageBucket: "pet-alley.appspot.com",
  messagingSenderId: "230361683243",
  appId: "1:230361683243:web:fe4065556efdcc210f616e",
  measurementId: "G-L1CH73W6NX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;