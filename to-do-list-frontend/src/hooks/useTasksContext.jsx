import { useContext } from "react";
import { TasksContext } from "../context/TasksContextProvider";
export const useTasksContext = () => {
  return useContext(TasksContext);
};
