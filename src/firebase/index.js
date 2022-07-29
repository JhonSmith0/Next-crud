// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  NEXT_FIREBASE_APIKEY: process.env.NEXT_FIREBASE_APIKEY,
  NEXT_FIREBASE_AUTHDOMAIN: process.env.NEXT_FIREBASE_AUTHDOMAIN,
  NEXT_FIREBASE_PROJECTID: process.env.NEXT_FIREBASE_PROJECTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
