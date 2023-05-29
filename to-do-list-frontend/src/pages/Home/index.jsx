import "./home.scss";
import Nav from "../../components/Nav";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { CreateTarea } from "./components/CreateTarea";
import { ListOfTareas } from "./components/ListOfTareas";
import { createUserDB } from "../../services/createUserDB";

export default function Home() {
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      const data = {
        id: user.reloadUserInfo.localId,
        nombre: user.reloadUserInfo.displayName,
        email: user.reloadUserInfo.email,
        imgUrl: user.reloadUserInfo.photoUrl,
      };
      createUserDB(data);
    }
  }, [user]);
  return (
    <div className="home">
      <header>
        <Nav />
      </header>
      {user && (
        <div>
          <CreateTarea />
          <ListOfTareas />
        </div>
      )}
    </div>
  );
}
