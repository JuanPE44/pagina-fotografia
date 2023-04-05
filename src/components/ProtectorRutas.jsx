import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function ProtectorRutas({ children, ruta }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={ruta} />;
  }
  return children;
}
