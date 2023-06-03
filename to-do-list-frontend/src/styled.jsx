import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    background: #222;
    min-height: 100vh;
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
  justify-content: center;
  align-items: flex-start;
  z-index: 100;
`;
