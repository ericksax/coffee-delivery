import { Container } from "./styles";
import Imagem from "/assets/Imagem.svg";
import CartIcon from '/assets/cart-icon.svg';
import WatchIcon from '/assets/watch-icon.svg';
import PackageIcon from '/assets/package-icon.svg';
import CoffeeIcon from "/assets/coffee-icon.svg";
import backgroundImg from '/assets/Background.png'


export function Main() {
  return (
    <Container style={{
      backgroundImage: `url(${backgroundImg})`,
      height: "100%",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover'
    }}>
      <main>
        <section>
          <div>
            <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora
            </p>
          </div>

          <div className="icon-blocks">
            <div>
              <img src={CartIcon} alt="" />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <img src={PackageIcon} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <img src={WatchIcon} alt="" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <img src={CoffeeIcon} alt="" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </section>
        <img className="landImage" src={Imagem} alt="" />
      </main>
    </Container>
  );
}
