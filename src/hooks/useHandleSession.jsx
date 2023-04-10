import { useAuth } from "./useAuth";

export function useHandleSession() {
  const { googleSignIn, logOut } = useAuth();

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

  return { signInGoogle, logOutGoogle };
}
