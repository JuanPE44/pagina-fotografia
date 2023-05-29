import { useAuth } from "./useAuth";

export function useHandleSession() {
  const { googleSignIn, logOut, registerWithEmail, signWithEmail  } = useAuth();

  const registerEmail = async () => {
    try {
      await registerWithEmail();
    } catch (err) {
      console.log(err);
    }
  }

  const signInEmail = async () => {
    try {
      await signWithEmail();
    } catch (err) {
      console.log(err);
    }
  }

  const signInGoogle = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const logOutGoogle = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return { signInGoogle, logOutGoogle, registerEmail, signInEmail };
}
