import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Redirect } from "../../components/Redirect/Redirect";
import { useAuth } from "../../hooks/useAuth";
import "./Landing.scss";

export function Landing() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);
  return (
    <div className="landing-container">
      <Header />
      <div className="info-landing">
        <Redirect to="login">Inicia sesion</Redirect>O
        <Redirect to="register">Registrate</Redirect>
      </div>
    </div>
  );
}
