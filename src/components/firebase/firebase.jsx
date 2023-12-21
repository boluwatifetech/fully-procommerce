// Import the functions you need from the SDKs you need

import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmwP0xogNhqVVy8yyecL88WH_nZmmmkO0",
    authDomain: "fir-7d5e4.firebaseapp.com",
    projectId: "fir-7d5e4",
    storageBucket: "fir-7d5e4.appspot.com",
    messagingSenderId: "900574698538",
    appId: "1:900574698538:web:474286a4664dd55a997753"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app)


