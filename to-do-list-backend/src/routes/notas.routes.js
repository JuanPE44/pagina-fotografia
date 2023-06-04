import { Router } from "express";
import {
  getTareas,
  getTarea,
  createTarea,
  updateTareas,
  deleteTarea,
} from "../controllers/tareas.controllers.js";

const router = Router();

router.get("/tareas", getTareas);
router.get("/tareas/:idUsuario", getTarea);

router.patch("/tareas/:id", updateTareas);

router.post("/tareas", createTarea);

router.delete("/tareas/:idTarea", deleteTarea);

export default router;
