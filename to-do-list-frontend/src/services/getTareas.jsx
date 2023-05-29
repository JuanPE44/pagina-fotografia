export async function getTareas(idUsuario) {
  try {
    const data = await fetch(`http://localhost:8000/api/tareas/${idUsuario}`);
    const json = await data.json();

    return json;
  } catch (err) {
    console.log(err.message);
  }
}
