export function createUserDB(user) {
  // Configuración de la petición
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Especificamos que enviaremos datos en formato JSON
    },
    body: JSON.stringify(user), // Convertimos el objeto de datos a formato JSON
  };

  // Realizar la petición POST

  fetch("http://localhost:8000/api/usuarios", options)
    .then((response) => response.json())
    .then((data) => {
      // Manejar la respuesta de la petición
      console.log(data);
    })
    .catch((error) => {
      // Manejar cualquier error de la petición
      console.error(error);
    });
}
