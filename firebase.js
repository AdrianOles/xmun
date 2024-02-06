// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6YYwl3oVEPzbW4j8pg0y1hehN7sh4tB8",
  authDomain: "xmun-c0dc9.firebaseapp.com",
  projectId: "xmun-c0dc9",
  storageBucket: "xmun-c0dc9.appspot.com",
  messagingSenderId: "628606349341",
  appId: "1:628606349341:web:6786c53637d38dcb9dd6f4"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db }