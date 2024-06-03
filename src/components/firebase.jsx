// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgIylIVzqGo9zwGlA_45radxnRrIVdg14",
  authDomain: "feedback-9a622.firebaseapp.com",
  projectId: "feedback-9a622",
  storageBucket: "feedback-9a622.appspot.com",
  messagingSenderId: "1058264827412",
  appId: "1:1058264827412:web:17fd9bb47cc7106d844901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;