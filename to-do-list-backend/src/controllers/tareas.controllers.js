import { pool } from "../db.js";

export const getTareas = async (req, res) => {
  try {
    const [tareas] = await pool.query("SELECT * FROM tareas");
    res.json(tareas);
  } catch (err) {
    return res.status(500).json({ mensaje: "algo anduvo mal" });
  }
};

export const getTarea = async (req, res) => {
  const { id } = req.params;

  try {
    const [tarea] = await pool.query(`SELECT * FROM WHERE tareas id = (?)`, [
      id,
    ]);
    if (tarea.length <= 0)
      return res.status(404).json({
        mensaje: "tarea no encotrada",
      });
    res.json(tarea[0]);
  } catch (err) {
    return res.status(500).json({ mensaje: "algo anduvo mal" });
  }
};

export const createTarea = async (req, res) => {
  const { descripcion } = req.body;

  try {
    const [filas] = await pool.query(
      "INSERT INTO tareas (descripcion) VALUES (?)",
      [descripcion]
    );

    console.log(filas);

    const [filas2] = await pool.query("SELECT * FROM tareas WHERE id = ?", [
      filas.insertId,
    ]);

    // esto es para ver que nos devuelve la base de datos
    res.json({
      id: filas.insertId,
      descripcion: descripcion,
      fechaCreacion: filas2[0].fecha_creacion,
    });
  } catch (err) {
    return res.status(500).json({ mensaje: "algo anduvo mal" });
  }
};

export const updateTareas = async (req, res) => {
  const { id } = req.params;
  const { descripcion, estado } = req.body;

  try {
    const [results] = await pool.query(
      "UPDATE tareas SET descripcion = IFNULL(?, descripcion), estado = IFNULL(?, estado) WHERE id = ?",
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
    const [results] = await pool.query(`DELETE FROM tareas WHERE id = (?)`, [
      id,
    ]);

    if (results.affectedRows <= 0)
      return res.status(404).json({
        mensaje: "tarea no encotrada",
      });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ mensaje: "algo anduvo mal" });
  }
};
