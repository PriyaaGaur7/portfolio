
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDutuVoYvVfiJcec1HvpXtOzgmkku5xX-M",
  authDomain: "priya-portfolio-1c1c8.firebaseapp.com",
  projectId: "priya-portfolio-1c1c8",
  storageBucket: "priya-portfolio-1c1c8.appspot.com",
  messagingSenderId: "988333541531",
  appId: "1:988333541531:web:f71604b77a483a653c5e3e",
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()