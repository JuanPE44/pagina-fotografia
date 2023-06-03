import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import "./Register.scss";

export default function Register() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="register-container">
      <Header />
      <Form login={false} />
    </div>
  );
}
