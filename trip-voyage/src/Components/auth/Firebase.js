// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6dKDhFB27UDIAEaedCnFUyDz0L6e07Ew",
  authDomain: "new-trippy-project.firebaseapp.com",
  projectId: "new-trippy-project",
  storageBucket: "new-trippy-project.appspot.com",
  messagingSenderId: "760816820286",
  appId: "1:760816820286:web:0568c321b25e86038af16f",
  measurementId: "G-M0Q48Y1DXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;