import { Wrapper } from "../../components/Coffes/styles";
import img1 from "../../assets/image1.svg";
import img2 from "../../assets/image2.svg";
import img3 from "../../assets/image3.svg";
import Illustration from "../../assets/illustration.png";
import { BorderGradient, BoxImg, Container, Content, Infobox } from "./style";



export function Confirmation() {
  return (
    <Wrapper>
      <Container>
      <div>
        <div>
          <h1>Uhu! Pedido Confirmado</h1>
          <p>Agora é só aguardar que o café chegará até você.</p>
        </div>
        <Content>
          <Infobox>
            <img src={img1} alt="" />
            <div>
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </Infobox>
          <Infobox>
            <img src={img2} alt="" />
            <div>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min</strong> </span>
            </div>
          </Infobox>
          <Infobox>
            <img src={img3} alt="" />
            <div>
              <span>Pagamento na entrega</span>
              <span><strong>Cartão de Crédito</strong></span>
            </div>
          </Infobox>
          <BorderGradient />
        </Content>
      </div>
      
      <BoxImg>
        <img src={Illustration} alt="" />
      </BoxImg>
      </Container>
    </Wrapper>
  );
}
