// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsu0z1-KYzcT_2TmvlM2dzDqnYBN0kcQ8",
  authDomain: "instagram-clone-b4a3a.firebaseapp.com",
  projectId: "instagram-clone-b4a3a",
  storageBucket: "instagram-clone-b4a3a.appspot.com",
  messagingSenderId: "721615091183",
  appId: "1:721615091183:web:aad0007e98ccdfc076b21a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
