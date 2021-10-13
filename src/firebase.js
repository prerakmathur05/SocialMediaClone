// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLUVM3Oz7z1g3XgBVmDGWpr6DeEdTXV6o",
  authDomain: "tinderclone-6282e.firebaseapp.com",
  projectId: "tinderclone-6282e",
  storageBucket: "tinderclone-6282e.appspot.com",
  messagingSenderId: "1051858156955",
  appId: "1:1051858156955:web:408ea34db9e8499c96753e",
  measurementId: "G-5FBNRD9B3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
