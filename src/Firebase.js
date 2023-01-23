import { initializeApp } from "firebase/app";   
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwavZ5i7MbBVDrcxIga9w7pCjhGZAvkEw",
  authDomain: "fir-auth-82fbe.firebaseapp.com",
  projectId: "fir-auth-82fbe",
  storageBucket: "fir-auth-82fbe.appspot.com",
  messagingSenderId: "1036617677208",
  appId: "1:1036617677208:web:b77cdf1cbca45b58c053ed",
  measurementId: "G-6TY52CEJZQ"
};


const app = initializeApp(firebaseConfig);
const authentication = getAuth();

export {app, authentication };