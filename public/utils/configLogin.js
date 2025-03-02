// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"
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
const auth = getAuth(app);

const mensaje = document.getElementById('mensaje');
const login = async (event) => {
    event.preventDefault();
    try {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        //const user = userCredential.user;
        const idToken = await userCredential.user.getIdToken()

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({idToken})
            
        });
        const data = await response.json();
        if(data.success) {
            window.location.href = "/dashboard"
        }else {
            mensaje.textContent = "no se ha podido logear";
        }
        
    } catch (error) {
        console.log(`no se ha podido logear ${error}`)
    }
}

// document.getElementById('loginButton').addEventListener('click', login);
document.getElementById('loginForm').addEventListener('submit', login);