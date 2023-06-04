import React, { createContext, useState, useEffect } from "react";
import { getTareas } from "../services/getTareas";
import { postTarea } from "../services/postTarea";
import { deleteTarea } from "../services/deleteTarea";
import { useAuth } from "../hooks/useAuth";

export const TasksContext = createContext();

export function TasksContextProvider({ children }) {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  const createTask = async ({ user, tarea }) => {
    const newTask = await postTarea(user, tarea);
    setTasks((prevTask) => [...prevTask, newTask]);
  };

  const deleteTask = async (idtarea) => {
    const newTasks = await deleteTarea(idtarea, user);
    setTasks(newTasks);
  };

  useEffect(() => {
    if (user) {
      getTareas(user.reloadUserInfo.localId).then((res) => setTasks(res));
    }
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;
