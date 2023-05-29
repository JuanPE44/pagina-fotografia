import { createTarea } from "../../../../services/postTarea";
import { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";

export function CreateTask() {
  const [tarea, setTarea] = useState("");
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    createTarea(user, tarea);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setTarea(e.target.value)} />
        <button type="submit">crear tarea</button>
      </form>
    </div>
  );
}
