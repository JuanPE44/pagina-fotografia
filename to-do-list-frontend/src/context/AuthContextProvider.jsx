import { useEffect, useState, createContext } from "react";
import {
  registerWithEmail,
  signWithEmail,
  googleSignIn,
  logOut,
} from "../utilities/google";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase.config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
