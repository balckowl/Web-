import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBInbwCvPq9CcrhL4mZYP0-fqwC2dIiYzc",
  authDomain: "reactyping.firebaseapp.com",
  projectId: "reactyping",
  storageBucket: "reactyping.appspot.com",
  messagingSenderId: "194875053849",
  appId: "1:194875053849:web:ea36dbfa8dfccb9cd0d788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }