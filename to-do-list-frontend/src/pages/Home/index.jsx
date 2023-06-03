import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { CreateTask } from "./components/CreateTask/CreateTask";
import { ListOfTasks } from "./components/ListOfTasks/ListOfTasks";
import { createUserDB } from "../../services/createUserDB";
import { Header } from "../../components/Header/Header";
import { TasksContextProvider } from "../../context/TasksContextProvider";
import "./Home.scss";

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
    <div className="home-container">
      <TasksContextProvider>
        <Header />
        {user && (
          <div>
            <CreateTask />
            <ListOfTasks />
          </div>
        )}
      </TasksContextProvider>
    </div>
  );
}
