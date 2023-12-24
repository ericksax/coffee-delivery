import { ButtonCart, Card, WrapperQuantityButton } from "./style";
import tradicional from "../../assets/coffes/tradicional.png";
import { ShoppingCart } from "phosphor-react";

import { useDispatch } from "react-redux";

import { addCoffe } from "../../store/reducers";
import { Coffe } from "../../@types/store";
import { QuantityButton } from "../QuantityButton";
import { useState } from "react";

interface CoffeCardProps {
  coffe: Coffe;
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  function handleIncrementAmount() {
    setQuantity((state) => state + 1);
  }

  function handleDecrementAmount() {
    setQuantity((state) => state - 1);
  }

  function handleAddProduct(coffe: Coffe) {
    const itemTocart = {
      ...coffe,
      quantity,
    };

    dispatch(addCoffe(itemTocart));
  }

  return (
      <Card>
        <img src={coffe.image} alt="" />
        {coffe.tags.map((tag: string) => (
          <span key={`${coffe.id}${tag}`}>{tag}</span>
        ))}
        <strong>{coffe.title}</strong>
        <p>{coffe.description}</p>
        <div>
          <span>R$</span>
          <span>{coffe.price}</span>
          <WrapperQuantityButton>
            <QuantityButton
              quantity={quantity}
              handleIncrementAmount={handleIncrementAmount}
              handleDecrementAmount={handleDecrementAmount}
            />
            <ButtonCart onClick={() => handleAddProduct(coffe)}>
              <ShoppingCart weight="fill" size={20} />
            </ButtonCart>
          </WrapperQuantityButton>
        </div>
      </Card>
  );
}
