import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Form, ButtonGoogle } from "../styled";
import logoGoogle from "../assets/google.png";

export default function FormLogin() {
  const { loginWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
    console.log(email, password);
  };

  return (
    <Form>
      <h3>Inicia sesion</h3>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Ingrese el email.."
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Ingrese la contraseña.."
      />
      <button className="boton-submit" onClick={(e) => handleSubmit(e)}>
        Iniciar sesion
      </button>
      <ButtonGoogle onClick={() => signInGoogle()}>
        <img src={logoGoogle} alt="" />
      </ButtonGoogle>
    </Form>
  );
}
