import { useTasksContext } from "../../../../hooks/useTasksContext";
import "./ListOfTasks.scss";

export function ListOfTasks() {
  const { tasks } = useTasksContext();

  return (
    <ul className="tareas">
      {tasks &&
        tasks.map((task) => {
          return (
            <li className="tarea" key={task.id_tarea}>
              <div>{task.id_tarea}</div>
              <div>{task.descripcion_tarea}</div>
            </li>
          );
        })}
    </ul>
  );
}
