import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyDAV2FRysXeGeyX98oweUPDSTks2n7hMfM",
  authDomain: "shrutidemo-2e752.firebaseapp.com",
  projectId: "shrutidemo-2e752",
  storageBucket: "shrutidemo-2e752.appspot.com",
  messagingSenderId: "354089387287",
  appId: "1:354089387287:web:579fca4e654d62d005a352",
  measurementId: "G-6M6148RZ70"
};

// Initialize Firebase app and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // For authentication
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { auth, storage , googleProvider};
export default db;