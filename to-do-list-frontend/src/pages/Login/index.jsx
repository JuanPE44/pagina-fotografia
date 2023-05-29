import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import { Container, Content } from "../../styled";
import fondoLogin from "../../assets/fondo-login.jpg";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

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
      <Header img={fondoLogin} height={30}>
        <Nav />
        <h1 className="title">Iniciar sesion</h1>
      </Header>
      <Content>
        <FormLogin />
      </Content>
    </Container>
  );
}
