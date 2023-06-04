import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const { user, loadingAuth } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="login-container">
      <Header />
      {loadingAuth ? (
        <h1 style={{ color: "#fff" }}>cargando...</h1>
      ) : (
        <Form login={true} />
      )}
    </div>
  );
}
