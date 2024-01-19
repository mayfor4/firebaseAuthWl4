import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyAxNRlFhIyeV4iUhwnRmLopFPnQ0qeazTY",
            authDomain: "web40-f63e1.firebaseapp.com",
            projectId: "web40-f63e1",
            storageBucket: "web40-f63e1.appspot.com",
            messagingSenderId: "159233840067",
            appId: "1:159233840067:web:de23c04986bd47e82c2376",
            measurementId: "G-TGF9Z59X77"
          };
 // Initialize Firebase
      //firebaseConfig.initializedApp(firebaseConfig);
      export const app = initializeApp(firebaseConfig);
      export const auth = getAuth(app);
      //const analytics = getAnalytics(app);