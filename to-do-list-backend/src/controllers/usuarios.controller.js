import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [usuarios] = await pool.query("SELECT * FROM usuarios");
    res.json(usuarios);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const createUsuario = async (req, res) => {
  const { id, nombre, email, imgUrl } = req.body;

  try {
    const [existeUsuario] = await pool.query(
      "SELECT * FROM usuarios WHERE id_usuario = ?",
      [id]
    );

    if (existeUsuario.length > 0)
      return res.json({
        mensaje: "ya existe este usuario",
        usuario: existeUsuario,
      });

    const [newUsuario] = await pool.query(
      "INSERT INTO usuarios (id_usuario, nombre_usuario,email_usuario, img_usuario) VALUES (?,?,?,?)",
      [id, nombre, email, imgUrl]
    );

    const [usuario] = await pool.query(
      "SELECT * FROM usuarios WHERE id_usuario = ?",
      [id]
    );

    // esto es para ver que nos devuelve la base de datos
    res.json({ mensaje: "usuario creado", usuario: usuario });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
