// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAG2iyLCDNk2R3JKlrwkCiIDzHRQoDcfKk",
  authDomain: "fir-connect-c82a5.firebaseapp.com",
  projectId: "fir-connect-c82a5",
  storageBucket: "fir-connect-c82a5.appspot.com",
  messagingSenderId: "941779438651",
  appId: "1:941779438651:web:b75683b832d17047a6601e",
  measurementId: "G-SB2FHYVETV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
