import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBWx-3U-Dbz99gyMEYaKnZL4c08AGaubqM",
  authDomain: "proyectoreact-5626c.firebaseapp.com",
  projectId: "proyectoreact-5626c",
  storageBucket: "proyectoreact-5626c.appspot.com",
  messagingSenderId: "65001772409",
  appId: "1:65001772409:web:432f1df2a694b797e24ba8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);