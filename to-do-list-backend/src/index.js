import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js";
import tareasRoutes from "./routes/notas.routes.js";
import indexRoute from "./routes/index.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173", // Especifica tu dominio permitido aquí
  })
);
app.use(express.json());

app.use("/api", indexRoute);
app.use("/api", usuariosRoutes);
app.use("/api", tareasRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    mensaje: "endpoint no encontrado",
  });
});

app.listen("8000", () => {
  console.log("server iniciado");
});
