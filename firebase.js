// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK0URpvC8tmhCw_fUPHNibXrJWOzQSvq0",
  authDomain: "sectracket.firebaseapp.com",
  projectId: "sectracket",
  storageBucket: "sectracket.appspot.com",
  messagingSenderId: "562189074383",
  appId: "1:562189074383:web:b289004c8e31c13990dcba",
  measurementId: "G-G20P1FL2W6",
};

// Initialize Firebase
export default app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

