import { useState, useEffect } from "react";
import { getTareas } from "../services/getTareas";
import { useAuth } from "./useAuth";

export function useTareas() {
  const { user } = useAuth();
  const [tareas, setTareas] = useState();

  useEffect(() => {
    getTareas(user.reloadUserInfo.localId).then((res) => setTareas(res));
  }, []);

  return { tareas };
}
