// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2rr5_OHJl4_L8t9IqiLtL9Twn8f633Ic",
  authDomain: "yeedee-landing.firebaseapp.com",
  projectId: "yeedee-landing",
  storageBucket: "yeedee-landing.firebasestorage.app",
  messagingSenderId: "1054797851003",
  appId: "1:1054797851003:web:e983b601f40fb592a235de",
  measurementId: "G-MXSJJTP91G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);