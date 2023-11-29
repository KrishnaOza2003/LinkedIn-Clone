import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {auth} from '../config/firebase.config'
const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider).then((userCred) => {
    window.location.reload();
  });
};

export const signOutAction = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  })
}