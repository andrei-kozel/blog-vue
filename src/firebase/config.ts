import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU2rjBS3NclnNQWbVelRqIq_PxdWvHjkg",
  authDomain: "frontend-practice-629b9.firebaseapp.com",
  projectId: "frontend-practice-629b9",
  storageBucket: "frontend-practice-629b9.appspot.com",
  messagingSenderId: "361137638634",
  appId: "1:361137638634:web:0d13a3fdc351c0e0225b93",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
