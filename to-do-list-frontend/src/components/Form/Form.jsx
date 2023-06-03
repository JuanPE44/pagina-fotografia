import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import logoGoogle from "../../assets/google.png";
import { useHandleSession } from "../../hooks/useHandleSession";
import "./Form.scss";

export function Form({ login }) {
  const { signWithEmail, registerWithEmail } = useAuth();
  const { signInGoogle } = useHandleSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login ? signWithEmail(email, password) : registerWithEmail(email, password);
    console.log(email, password);
  };

  return (
    <form className="form-container">
      <label htmlFor="email">
        {login ? "Ingresa" : "Registrate ahora"} ahora:
      </label>
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
        {login ? "Iniciar sesion" : "Registrate"}
      </button>
      <button
        type="button"
        className="boton-google"
        onClick={() => signInGoogle()}
      >
        <img src={logoGoogle} alt="" />
      </button>
    </form>
  );
}
