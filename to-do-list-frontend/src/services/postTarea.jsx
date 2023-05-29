export async function postTarea(user, tarea) {
  const data = {
    idUsuario: user.reloadUserInfo.localId,
    descripcion: tarea,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Especificamos que enviaremos datos en formato JSON
    },
    body: JSON.stringify(data), // Convertimos el objeto de datos a formato JSON
  };

  try {
    const enviarTarea = fetch("http://localhost:8000/api/tareas", options);
    const json = await enviarTarea;
    console.log(json);
  } catch (err) {
    console.log(err);
  }
}
