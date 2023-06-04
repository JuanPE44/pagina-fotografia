import "./Header.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useHandleSession } from "../../hooks/useHandleSession";
import perfilImg from "../../assets/imgs/perfil.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

export function Header() {
  const { user } = useAuth();
  const [abierto, setAbierto] = useState(false);
  const { logOutGoogle } = useHandleSession();

  return (
    <header className="header">
      <h1>To-Do-List</h1>
      <div className="perfil-header">
        {user && (
          <>
            <motion.div
              className="imagen-perfil"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAbierto((abierto) => !abierto)}
            >
              <img src={user.photoURL ? user.photoURL : perfilImg} alt="" />
              <FontAwesomeIcon className="icono" icon={faAngleDown} />
            </motion.div>
            <MenuPerfil abierto={abierto}>
              <button onClick={() => logOutGoogle()}>Cerrar sesion</button>
            </MenuPerfil>
          </>
        )}
      </div>
    </header>
  );
}

const MenuPerfil = styled.div`
  background: #0000006d;
  padding: 1rem;
  position: absolute;
  display: ${(props) => (props.abierto ? "flex" : "none")};
  top: 4.5rem;
  right: 2.5rem;
  transition: 0.3s;
  z-index: 50;
`;
