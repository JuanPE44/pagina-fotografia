import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div``;

export const ContainerHome = styled.div`
  min-height:100vh;
`
 
export const Nav = styled.nav`
  display: flex;
  padding: 20px;
  background: #fe5151cb;
`;
