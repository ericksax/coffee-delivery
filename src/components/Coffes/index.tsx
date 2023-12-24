import { CoffeCard } from "../Card";
import { Container, Wrapper } from "./styles";
import db from '../../../bd.json'

export function Coffes() {
  const { coffes } = db

  return (
    <Container>
      <div>
        <h1>Nossos cafés</h1>
      </div>
      <Wrapper>
       {coffes.map(coffe =>  <CoffeCard key={`${coffe.id}`} coffe={coffe}/>)}
      </Wrapper>
    </Container>
  );
}
