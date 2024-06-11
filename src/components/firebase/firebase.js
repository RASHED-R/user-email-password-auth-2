// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp9Ibzc2f3dfq3D4hbJ2uSvn8N0kCduVg",
    authDomain: "user-email-passport-auth-2.firebaseapp.com",
    projectId: "user-email-passport-auth-2",
    storageBucket: "user-email-passport-auth-2.appspot.com",
    messagingSenderId: "1043370629822",
    appId: "1:1043370629822:web:ae4a5b2a8d6a01097adcef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;