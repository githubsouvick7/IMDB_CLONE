import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ5R71aokSERtUWTnLGZ9KA5Fa29OEpN8",
  authDomain: "imdb-clone-e5b28.firebaseapp.com",
  projectId: "imdb-clone-e5b28",
  storageBucket: "imdb-clone-e5b28.appspot.com",
  messagingSenderId: "711603753847",
  appId: "1:711603753847:web:2b4448cf666161e01a8772",
  measurementId: "G-QKWBHJ5J1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
