// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6YYwl3oVEPzbW4j8pg0y1hehN7sh4tB8",
  authDomain: "xmun-c0dc9.firebaseapp.com",
  projectId: "xmun-c0dc9",
  storageBucket: "xmun-c0dc9.appspot.com",
  messagingSenderId: "628606349341",
  appId: "1:628606349341:web:24b78344c83afc9c9dd6f4"
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);