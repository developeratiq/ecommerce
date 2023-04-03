// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyPU58Kzv2KqsfhkvIHFVCYFfAH7fYap8",
  authDomain: "gymnastic-74d5b.firebaseapp.com",
  projectId: "gymnastic-74d5b",
  storageBucket: "gymnastic-74d5b.appspot.com",
  messagingSenderId: "30212493745",
  appId: "1:30212493745:web:a9a81354c124deab05ad90",
  measurementId: "G-MTLXT9Z0DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase
