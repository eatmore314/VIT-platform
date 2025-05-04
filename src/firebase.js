// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBR18z8Yqj6h_vFjMFkpJP8g7soLiguAQ",
  authDomain: "vanguardtech-21947.firebaseapp.com",
  projectId: "vanguardtech-21947",
  storageBucket: "vanguardtech-21947.appspot.com",
  messagingSenderId: "650644145548",
  appId: "1:650644145548:web:721da5f84fe8812f982a9",
  databaseURL: "https://vanguardtech-21947-default-rtdb.firebaseio.com", // ✅ Important for Realtime Database
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database }; // ✅ Exported as "database"

