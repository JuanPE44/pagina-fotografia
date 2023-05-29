import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Form, ButtonGoogle } from "../styled";
import logoGoogle from "../assets/google.png";
import { useHandleSession } from "../hooks/useHandleSession";

export default function FormLogin() {
  const { loginWithEmail } = useAuth();
  const { signInGoogle } = useHandleSession()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
    console.log(email, password);
  };

  return (
    <Form>
      <label htmlFor="email">Ingresar ahora:</label>
      <input
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Ingrese el email.."
      />
      <input
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Ingrese la contraseña.."
      />
      <button className="boton-submit" onClick={(e) => handleSubmit(e)}>
        Iniciar sesion
      </button>
      <ButtonGoogle type="button" onClick={() => signInGoogle()}>
        <img src={logoGoogle} alt="" />
      </ButtonGoogle>
    </Form>
  );
}
