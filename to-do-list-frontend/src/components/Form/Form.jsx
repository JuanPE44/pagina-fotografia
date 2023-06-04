import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import logoGoogle from "../../assets/google.png";
import { useHandleSession } from "../../hooks/useHandleSession";
import { Link } from "react-router-dom";
import "./Form.scss";

export function Form({ login }) {
  const { signWithEmail, registerWithEmail, errorAuth, setErrorAuth } =
    useAuth();
  const { signInGoogle } = useHandleSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorAuth(null);
    login ? signWithEmail(email, password) : registerWithEmail(email, password);
    console.log(email, password);
  };

  return (
    <form className="form-container">
      <h2 className="subtitle-form">
        {login ? "Ingresa" : "Registrate"} ahora:
      </h2>
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
      {errorAuth && <p className="error">{errorAuth}</p>}
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
      {login ? (
        <p className="cuenta">
          ¿No tenes una cuenta? <Link to="/register">Registrate</Link>
        </p>
      ) : (
        <p className="cuenta">
          ¿Ya tenes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      )}
    </form>
  );
}
