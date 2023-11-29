import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChKtIntcsoMz5pF2TzanvCwg3cb4fXruo",
  authDomain: "linkedin-clone-eee23.firebaseapp.com",
  projectId: "linkedin-clone-eee23",
  storageBucket: "linkedin-clone-eee23.appspot.com",
  messagingSenderId: "1027389589616",
  appId: "1:1027389589616:web:df813f8b336a851f904cb5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
