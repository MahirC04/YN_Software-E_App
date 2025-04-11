

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuOl3GWuwNTxYROoyw3NzbgdyqBXqsjfs",
  authDomain: "expense-tracker-41dbc.firebaseapp.com",
  projectId: "expense-tracker-41dbc",
  storageBucket: "expense-tracker-41dbc.appspot.com",

  messagingSenderId: "751679720873",
  appId: "1:751679720873:web:a5e93f29576d2bd2cec8b8",
  measurementId: "G-3J5G06VZ1V"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
