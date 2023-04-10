
import imgHome from "../assets/fondo-home.jpg";
import Nav from "./Nav";
import { HeaderStyles } from "../styled";

export default function Header() {
 
  return (
    <HeaderStyles>
      <Nav/>
      <img className="img-header" src={imgHome} alt="" />
    </HeaderStyles>
  );
}
