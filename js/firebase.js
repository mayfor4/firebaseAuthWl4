import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAxNRlFhIyeV4iUhwnRmLopFPnQ0qeazTY",
    authDomain: "web40-f63e1.firebaseapp.com",
    projectId: "web40-f63e1",
    storageBucket: "web40-f63e1.appspot.com",
    messagingSenderId: "159233840067",
    appId: "1:159233840067:web:de23c04986bd47e82c2376",
    measurementId: "G-TGF9Z59X77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);