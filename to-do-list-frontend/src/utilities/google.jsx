import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../services/firebase.config";

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

export const logOut = () => {
  signOut(auth);
};

export const registerWithEmail = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);
};

export const signWithEmail = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log(response);
};
