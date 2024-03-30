// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTwYDbaJKcqzlxcctW_-Vw9VDMagAnIUM",
  authDomain: "simple-login-29c12.firebaseapp.com",
  projectId: "simple-login-29c12",
  storageBucket: "simple-login-29c12.appspot.com",
  messagingSenderId: "404770953949",
  appId: "1:404770953949:web:0cb4a77efa972fdd43d934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app