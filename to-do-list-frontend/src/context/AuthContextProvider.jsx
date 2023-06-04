import { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import {
  errorMessageLogin,
  errorMessageRegister,
} from "../utilities/getAuthErrorMessage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [errorAuth, setErrorAuth] = useState();
  const [loadingAuth, setLoadingAuth] = useState();
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const registerWithEmail = async (email, password) => {
    try {
      setLoadingAuth(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoadingAuth(false);
      console.log(response);
    } catch (err) {
      const errorMessage = errorMessageRegister(err.code);
      setErrorAuth(errorMessage);
      setLoadingAuth(false);
    }
  };

  const signWithEmail = async (email, password) => {
    try {
      setLoadingAuth(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      setLoadingAuth(false);
      console.log(response);
    } catch (err) {
      const errorMessage = errorMessageLogin(err.code);
      setErrorAuth(errorMessage);
      setLoadingAuth(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registerWithEmail,
        signWithEmail,
        googleSignIn,
        logOut,
        user,
        userDB,
        setUserDB,
        errorAuth,
        setErrorAuth,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
