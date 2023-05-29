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
router.get("/tareas/:id", getTarea);

router.patch("/tareas/:id", updateTareas);

router.post("/tareas", createTarea);

router.delete("/tareas/:id", deleteTarea);

export default router;
