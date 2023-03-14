// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCjWghtZdUR1AYEgh3QamEBN8BlCNeKqsM",
  authDomain: "netflix-clone-df83b.firebaseapp.com",
  projectId: "netflix-clone-df83b",
  storageBucket: "netflix-clone-df83b.appspot.com",
  messagingSenderId: "682764884427",
  appId: "1:682764884427:web:e79441e9087a7b268b3e4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
