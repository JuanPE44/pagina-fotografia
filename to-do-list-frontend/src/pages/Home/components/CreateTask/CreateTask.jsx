import { useState } from "react";
import { postTarea } from "../../../../services/postTarea";
import { useAuth } from "../../../../hooks/useAuth";
import "./CreateTask.scss";

export function CreateTask() {
  const [tarea, setTarea] = useState("");
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    postTarea(user, tarea);
  };
  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setTarea(e.target.value)} />
        <button type="submit">crear tarea</button>
      </form>
    </div>
  );
}
