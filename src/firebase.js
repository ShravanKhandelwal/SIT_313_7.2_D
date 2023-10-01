// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAtlDd0clOU85gMGyTHuGKmr75-W4QXlQg",
  authDomain: "distinction-ca269.firebaseapp.com",
  projectId: "distinction-ca269",
  storageBucket: "distinction-ca269.appspot.com",
  messagingSenderId: "388098747000",
  appId: "1:388098747000:web:3f578120f04ad880e45b8d",
  measurementId: "G-YT9LEQFP0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);