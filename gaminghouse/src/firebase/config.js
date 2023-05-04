// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCmnHWijJk2lkmeQJ7GIqstiCMANyjB60",
    authDomain: "ecommerce-reactjs-2e894.firebaseapp.com",
    projectId: "ecommerce-reactjs-2e894",
    storageBucket: "ecommerce-reactjs-2e894.appspot.com",
    messagingSenderId: "602445260468",
    appId: "1:602445260468:web:22cbe02821e713be89d9e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app