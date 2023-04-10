import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./constants/colors";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }

  a:link, a:visited, a:active {
    text-decoration:none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Content = styled.main`
  position: relative;
  display: flex;
  min-height: 200vh;
  z-index: 100;
`;

export const HeaderStyles = styled.header`
  position: relative;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0000006d;
    box-shadow: 0 100px 110px -10px ${colors.black} inset;
    z-index: 10;
  }

  .img-header {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    object-position: bottom;
    z-index: 0;
  }
`;

// NAV -------------------------------------------------------------------------------------------<<>>>>>>>

export const NavStyles = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  background: transparent;
  z-index: 100;

  ul {
    flex-grow: 1;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      font-size: 1.7rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
      cursor: pointer;

      &:hover {
        color: #aaa;
      }
    }
  }
`;

export const Logo = styled.div`
  display: grid;
  place-items: center;
  font-size: 3rem;
  color: ${colors.primary};
  margin-left: 3rem;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    cursor: pointer;
  }
`;

// PERFIL NAV .............................................>>>

export const PerfilNav = styled.div`
  position: relative;
  flex-grow: 0;
  display: flex;
  align-items: center;
  z-index: 100;
`;

export const ImagenPerfil = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 100;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid ${colors.primary};
  }

  .icono {
    font-size: 1.3rem;
    margin: 0 3rem 0 0;
    color: ${colors.primary};
  }
`;

export const MenuPerfil = styled.div`
  background: #0000006d;
  padding: 1rem;
  position: absolute;
  display: ${(props) => (props.abierto ? "flex" : "none")};
  top: 4.5rem;
  right: 2.5rem;
  transition: 0.3s;
  z-index: 50;
`;

export const BotonLogIn = styled(Link)`
  flex-grow: 0;
  padding: 1rem 1.5rem;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.5rem;
  background: transparent;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  transition: 0.3s;
`;

export const BotonRegister = styled(Link)`
  flex-grow: 0;
  padding: 1rem 1.5rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.5rem;
  background: ${colors.secondary};
  color: ${colors.white};
  transition: 0.3s;
`;

// ---- FORM ------------------------------->

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 300px;

  h3 {
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 300;
  }

  input {
    outline: none;
    border: none;
    padding: 1.5rem 2rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.white};
    transition: 0.1s;
    border-radius: 5px;
    background: #0000006a;

    &:focus {
    }

    &::placeholder {
      color: ${colors.white};
      opacity: 0.6;
    }
  }

  .boton-submit {
    border: 1px solid ${colors.primary};
    border-radius: 0.5rem;
    font-size: 1.8rem;
    padding: 1rem;
    font-weight: 500;
    color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    background: transparent;
    cursor: pointer;
    transition: 1s;
  }
`;

export const ButtonGoogle = styled.button`
  cursor: pointer;
  border: none;
  background: ${colors.white};
  width: 100%;
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  background: #f0f0f0;
  border: 2px solid ${colors.primary};

  img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }
`;
