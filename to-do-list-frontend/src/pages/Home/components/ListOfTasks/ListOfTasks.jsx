import { useTasksContext } from "../../../../hooks/useTasksContext";
import "./ListOfTasks.scss";

export function ListOfTasks() {
  const { tasks, deleteTask } = useTasksContext();

  const handleClickDelete = (idTarea) => {
    deleteTask(idTarea);
  };

  return (
    <ul className="tareas">
      {tasks &&
        tasks.map((task) => {
          return (
            <li className="tarea" key={task.id_tarea}>
              <div>{task.id_tarea}</div>
              <div>{task.descripcion_tarea}</div>
              <button onClick={() => handleClickDelete(task.id_tarea)}>
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}
