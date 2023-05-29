import {
  NavStyles,
  PerfilNav,
  Logo,
  BotonLogIn,
  BotonRegister,
  MenuPerfil,
  ImagenPerfil,
} from "../styled";
import imgLogo from "../assets/logo-blanco.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useHandleSession } from "../hooks/useHandleSession";

export default function Nav() {
  const { user } = useAuth();
  const [abierto, setAbierto] = useState(false);
  const { logOutGoogle } = useHandleSession();

  return (
    <NavStyles>
      <Logo>
        <img src={imgLogo} alt="" />
      </Logo>
      <h1>To-Do-List</h1>
      <PerfilNav>
        {user ? (
          <>
            <ImagenPerfil
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAbierto((abierto) => !abierto)}
            >
              <img src={user.photoURL} alt="" />
              <FontAwesomeIcon className="icono" icon={faAngleDown} />
            </ImagenPerfil>
            <MenuPerfil abierto={abierto}>
              <button onClick={() => logOutGoogle()}>Cerrar sesion</button>
            </MenuPerfil>
          </>
        ) : (
          <>
            <BotonLogIn to={"/login"}>Inicia sesion</BotonLogIn>
            <BotonRegister>Registrate</BotonRegister>
          </>
        )}
      </PerfilNav>
    </NavStyles>
  );
}
