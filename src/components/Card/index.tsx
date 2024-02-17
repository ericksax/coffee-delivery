import { ButtonCart, Card, WrapperQuantityButton } from "./style";
import { ShoppingCart } from "phosphor-react";

import { useDispatch } from "react-redux";

import { addCoffee } from "../../store/reducers";
import { Coffee } from "../../@types/store";
import { QuantityButton } from "../QuantityButton";
import { useState } from "react";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  function handleIncrementAmount() {
    setQuantity((state) => state + 1);
  }

  function handleDecrementAmount() {
    setQuantity((state) => state - 1);
  }

  function handleAddProduct(coffee: Coffee) {
    const itemToCart = {
      ...coffee,
      quantity,
    };

    dispatch(addCoffee(itemToCart));
  }

  return (
    <Card>
      <img src={coffee.image} alt="" />
      {coffee.tags.map((tag: string) => (
        <span key={`${coffee.id}${tag}`}>{tag}</span>
      ))}
      <strong>{coffee.title}</strong>
      <p>{coffee.description}</p>
      <div>
        <span>R$</span>
        <span>{coffee.price}</span>
        <WrapperQuantityButton>
          <QuantityButton
            quantity={quantity}
            handleIncrementAmount={handleIncrementAmount}
            handleDecrementAmount={handleDecrementAmount}
          />
          <ButtonCart onClick={() => handleAddProduct(coffee)}>
            <ShoppingCart weight="fill" size={20} />
          </ButtonCart>
        </WrapperQuantityButton>
      </div>
    </Card>
  );
}
