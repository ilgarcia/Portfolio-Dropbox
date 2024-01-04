import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmZCGK896_bQFZLx8craBw6PuXwvJHvg0",
  authDomain: "portfolio-dropbox.firebaseapp.com",
  projectId: "portfolio-dropbox",
  storageBucket: "portfolio-dropbox.appspot.com",
  messagingSenderId: "17370321341",
  appId: "1:17370321341:web:86401283ae4210a9a182d4"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db, storage } 