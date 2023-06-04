import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Perfil from "../pages/Perfil";
import { Landing } from "../pages/Landing";
import { ProtectorRutas } from "../components/ProtectorRutas";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectorRutas ruta="/">
              <Home />
            </ProtectorRutas>
          }
        />
        <Route
          path="/perfil"
          element={
            <ProtectorRutas ruta="/">
              <Perfil />
            </ProtectorRutas>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
