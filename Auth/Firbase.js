// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmzrEtHNPVdeMBUD7woBHN_c229oHCwpE",
  authDomain: "weatherapp-7d3d9.firebaseapp.com",
  projectId: "weatherapp-7d3d9",
  storageBucket: "weatherapp-7d3d9.appspot.com",
  messagingSenderId: "108833510635",
  appId: "1:108833510635:web:d1ee2169edde7e2a455aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 