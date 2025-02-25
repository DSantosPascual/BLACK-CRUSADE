// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
//import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKzbteidDfNawmXXYQGiaqhyJNmOUojdU",
    authDomain: "blackcrusade-da60e.firebaseapp.com",
    projectId: "blackcrusade-da60e",
    storageBucket: "blackcrusade-da60e.firebasestorage.app",
    messagingSenderId: "46353536118",
    appId: "1:46353536118:web:0e4f77c4e104b2a410bb57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);