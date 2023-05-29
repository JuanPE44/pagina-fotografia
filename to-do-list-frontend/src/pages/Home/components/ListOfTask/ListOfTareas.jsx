import { useTareas } from "../../../../hooks/useTareas";
import "./ListOfTask.scss";

export function ListOfTask() {
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
