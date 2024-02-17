import { MapPin, ShoppingCart } from "phosphor-react";
import { Container } from "./styles";

import logo from "/assets/logo.svg";
import { useCart } from "../../Hooks/useCart";
import { Link } from "react-router-dom";


export function Header() {
  const { quantity } = useCart()

  return (
    <Container>
      <header>
        <img src={logo} alt="logotipo do coffee-delivery" />
        <div>
          <div className="location">
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </div>
          <Link to='/checkout'>
            <div className="cart">
              {quantity > 0 && <span>{quantity}</span>}
              <ShoppingCart weight="fill" size={22} />
            </div></Link>
        </div>
      </header>
    </Container>
  );
}
