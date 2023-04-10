
import { AuthContextProvider } from "./context/AuthContextProvider";
import { MyRoutes } from "./routes/routes";
import { GlobalStyle } from "./styled";

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <div className="app">
        <MyRoutes />
      </div>
    </AuthContextProvider>
  );
}

export default App;
