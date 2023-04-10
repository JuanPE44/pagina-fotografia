import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import { Container, Content } from "../../styled";
import fondoLogin from "../../assets/fondo-login.jpg";
import Header from "../../components/Header";

export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Container>
      <img className="img-container" src={fondoLogin} alt="" />
      <Header />
      <Content>
        <FormLogin />
      </Content>
    </Container>
  );
}
