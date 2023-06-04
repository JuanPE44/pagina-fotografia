import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtectorRutas({ children, ruta }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={ruta} />;
  }
  return children;
}
