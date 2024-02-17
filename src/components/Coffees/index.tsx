import { CoffeeCard } from "../Card";
import { Container, Wrapper } from "./styles";
import db from '../../../bd.json'

export function Coffees() {
  const { coffees } = db

  return (
    <Container>
      <div className="title">
        <h1>Nossos cafés</h1>
      </div>
      <Wrapper>
        {coffees.map(coffee => <CoffeeCard key={`${coffee.id}`} coffee={coffee} />)}
      </Wrapper>
    </Container>
  );
}
