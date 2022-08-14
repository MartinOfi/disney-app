// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARXZsrFUpexbTbUBOV8A1ThnpgylU02eU",
  authDomain: "wikitincho-e70aa.firebaseapp.com",
  projectId: "wikitincho-e70aa",
  storageBucket: "wikitincho-e70aa.appspot.com",
  messagingSenderId: "463284801650",
  appId: "1:463284801650:web:754074e3e87ec1e1d672eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
