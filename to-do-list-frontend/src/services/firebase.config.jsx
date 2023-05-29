
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1LaNaHS64S7KK8N4OqbcNxgsn9E-iYJg",
  authDomain: "pagina-fotografia.firebaseapp.com",
  projectId: "pagina-fotografia",
  storageBucket: "pagina-fotografia.appspot.com",
  messagingSenderId: "713764455728",
  appId: "1:713764455728:web:c23536d28af6c9eecbf4f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)