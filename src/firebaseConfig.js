// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlaMYA9eilunYx1o1QrteBYLLjmK7twLo",
  authDomain: "labourhub-6ed44.firebaseapp.com",
  projectId: "labourhub-6ed44",
  storageBucket: "labourhub-6ed44.appspot.com",
  messagingSenderId: "179318190930",
  appId: "1:179318190930:web:ce268cf2211a55c7a8008b",
  measurementId: "G-M1X2NKE4KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);