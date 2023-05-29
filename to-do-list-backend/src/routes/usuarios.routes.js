import { Router } from "express";
import {
  getUsuarios,
  createUsuario,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios", createUsuario);

export default router;
