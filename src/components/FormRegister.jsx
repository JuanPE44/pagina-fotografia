import { useState } from "react";
import { useAuth } from '../hooks/useAuth'

export default function FormRegister() {

  const { registerWithEmail } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerWithEmail(email, password)
    console.log(email, password);
  };

  return (
    <form>
      <h3>Register</h3>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="ingrese email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="ingrese contraseña"
      />
      <button onClick={(e) => handleSubmit(e)}>Registrarse</button>
    </form>
  );
}
