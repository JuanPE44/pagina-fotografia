import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { Container, Content } from "../../styled";
import fondoHome from '../../assets/fondo-home.jpg'

export default function Home() {
  return (
    <Container>
      <Header img={fondoHome} height={100}>
        <Nav />
      </Header>
      <Content>
        <h1>PHOTOs</h1>
      </Content>
    </Container>
  );
}

