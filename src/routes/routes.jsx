import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import ProtectorRutas from "../components/ProtectorRutas";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/perfil"
          element={
            <ProtectorRutas ruta={"/login"}>
              <Perfil />
            </ProtectorRutas>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
