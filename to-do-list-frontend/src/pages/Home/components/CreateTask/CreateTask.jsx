import { useState } from "react";
import { useTasksContext } from "../../../../hooks/useTasksContext";
import { useAuth } from "../../../../hooks/useAuth";
import "./CreateTask.scss";

export function CreateTask() {
  const { createTask } = useTasksContext();
  const [tarea, setTarea] = useState("");
  const { user } = useAuth();
  const handleAddTask = async () => {
    console.log("entro crear tarea: " + tarea);
    await createTask({ user, tarea });
  };

  return (
    <div>
      <div className="contenedor-create">
        <input type="text" onChange={(e) => setTarea(e.target.value)} />
        <button type="button" onClick={handleAddTask}>
          crear tarea
        </button>
      </div>
    </div>
  );
}
