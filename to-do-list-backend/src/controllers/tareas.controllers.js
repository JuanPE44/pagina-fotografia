import { pool } from "../db.js";

export const getTareas = async (req, res) => {
  try {
    const [tareas] = await pool.query("SELECT * FROM tareas");
    res.json(tareas);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getTarea = async (req, res) => {
  const { idUsuario } = req.params;

  try {
    const [tarea] = await pool.query(
      `SELECT * FROM tareas WHERE id_usuario = ?`,
      [idUsuario]
    );
    //if (tarea.length <= 0)
    //  return res.status(404).json({
    //    mensaje: "tarea no encotrada",
    //  });
    res.json(tarea);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const createTarea = async (req, res) => {
  const { idUsuario, descripcion } = req.body;

  try {
    const [newTarea] = await pool.query(
      "INSERT INTO tareas (id_usuario, descripcion_tarea) VALUES (?,?)",
      [idUsuario, descripcion]
    );

    const [tarea] = await pool.query(
      "SELECT * FROM tareas WHERE id_tarea = ?",
      [newTarea.insertId]
    );

    // esto es para ver que nos devuelve la base de datos
    res.json(tarea);
  } catch (err) {
    return res.status(500).json({ mensaje: "algo anduvo mal" });
  }
};

export const updateTareas = async (req, res) => {
  const { id } = req.params;
  const { descripcion, estado } = req.body;

  try {
    const [results] = await pool.query(
      "UPDATE tareas SET descripcion_tarea = IFNULL(?, descripcion), estado_tarea = IFNULL(?, estado) WHERE id_tarea = ?",
      [descripcion, estado, id]
    );
    if (results.affectedRows === 0)
      return res.status(404).json({
        mensaje: "tarea no encotrada",
      });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ mensaje: "algo anduvo mal" });
  }
};

export const deleteTarea = async (req, res) => {
  const { id } = req.params;

  try {
    const [results] = await pool.query(
      `DELETE FROM tareas WHERE id_tarea = (?)`,
      [id]
    );

    if (results.affectedRows <= 0)
      return res.status(404).json({
        mensaje: "tarea no encotrada",
      });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ mensaje: "algo anduvo mal" });
  }
};
