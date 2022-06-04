import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgULNp1fWcF07JY3kC1BDBlFQe3kCR6b4",
  authDomain: "whatsapp-768a4.firebaseapp.com",
  projectId: "whatsapp-768a4",
  storageBucket: "whatsapp-768a4.appspot.com",
  messagingSenderId: "553191245948",
  appId: "1:553191245948:web:883d6f7f9ba2b3e876a1f9",
  measurementId: "G-9PDCHWSQ00",
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
