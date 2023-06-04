import { useTasksContext } from "../../../../hooks/useTasksContext";
import "./Task.scss";

export function Task({ id, description, state }) {
  const { deleteTask } = useTasksContext();
  const handleClickDelete = (idTarea) => {
    deleteTask(idTarea);
  };
  return (
    <li className="tarea">
      <div className="estado">{state}</div>
      <div className="descripcion">{description}</div>
      <button className="delete" onClick={() => handleClickDelete(id)}>
        delete
      </button>
    </li>
  );
}
