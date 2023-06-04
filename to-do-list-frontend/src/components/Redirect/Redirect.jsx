import { Link } from "react-router-dom";
import "./Redirect.scss";

export function Redirect({ to, children }) {
  return (
    <Link className={`button-${to}`} to={to}>
      {children}
    </Link>
  );
}
