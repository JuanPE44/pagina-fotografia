import { UserAuth } from "../context/AuthContext";
import { Nav } from "../styled";
import { Link } from "react-router-dom";

export default function Header() {
  const { user, logOut } = UserAuth();

  const cerrarSesion = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Nav>
      <div>PHOTO</div>
      <ul>
        <li>inicio</li>
        <li>galeria</li>
        <li>contacto</li>
      </ul>
      {user ? (
        <div>
          <h5>{user.displayName}</h5>
          <img src={user.photoURL} alt="" />
          <button onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
      ) :
      <Link to={'/login'}>Inicia sesion</Link>
      }
    </Nav>
  );
}
