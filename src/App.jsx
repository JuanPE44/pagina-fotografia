import { Container } from "./styled";
import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routes/routes";
import { GlobalStyle } from "./styled";

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Container>
        <MyRoutes />
      </Container>
    </AuthContextProvider>
  );
}

export default App;
