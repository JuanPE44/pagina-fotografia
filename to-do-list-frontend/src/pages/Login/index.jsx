import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import { Container, Content } from "../../styled";
import Header from "../../components/Header/Header";

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
      <Header />
      <Content>
        <FormLogin />
      </Content>
    </Container>
  );
}
