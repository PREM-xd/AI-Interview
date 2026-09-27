
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "demointerview-1133f.firebaseapp.com",
  projectId: "demointerview-1133f",
  storageBucket: "demointerview-1133f.firebasestorage.app",
  messagingSenderId: "401360404134",
  appId: "1:401360404134:web:eebda5589d2745e9a8be67"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}