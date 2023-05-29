
import imgHome from "../assets/fondo-home.jpg";
import Nav from "./Nav";
import { HeaderStyles } from "../styled";

export default function Header({children,img, height, title}) {
 
  return (
    <HeaderStyles height={height}>
      <img className="img-header" src={img} alt="" />
      {children}
    </HeaderStyles>
  );
}
