import { useTasksContext } from "../../../../hooks/useTasksContext";
import { Task } from "../Task/Task";
import "./ListOfTasks.scss";

export function ListOfTasks() {
  const { tasks } = useTasksContext();

  return (
    <ul className="tareas">
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id_tarea}
            id={task.id_tarea}
            description={task.descripcion_tarea}
            state={task.estado_tarea}
          />
        ))}
    </ul>
  );
}
