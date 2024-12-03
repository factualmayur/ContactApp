// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALsXm5G5Iwwa-IEKkh-rOdI8soY-7M0UE",
  authDomain: "vite-contact-abc73.firebaseapp.com",
  projectId: "vite-contact-abc73",
  storageBucket: "vite-contact-abc73.firebasestorage.app",
  messagingSenderId: "354848850913",
  appId: "1:354848850913:web:58e201d63c2455500cc8a0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);