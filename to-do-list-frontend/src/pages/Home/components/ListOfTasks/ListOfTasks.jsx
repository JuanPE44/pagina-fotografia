import { useTareas } from "../../../../hooks/useTasks";
import "./ListOfTasks.scss";

export function ListOfTasks() {
  const { tareas } = useTareas();
  return (
    <ul className="tareas">
      {tareas &&
        tareas.map((tarea) => {
          return (
            <li className="tarea" key={tarea.id_tarea}>
              <div>{tarea.id_tarea}</div>
              <div>{tarea.descripcion_tarea}</div>
            </li>
          );
        })}
    </ul>
  );
}
