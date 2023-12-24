import { Minus, Plus } from "phosphor-react";
import { ButtonQtd } from "./style";

interface quantityButton {
  handleDecrementAmount: () => void;
  handleIncrementAmount: () => void;
  quantity: number
}

export function QuantityButton({handleDecrementAmount, handleIncrementAmount, quantity}: quantityButton) {

  return (
    <ButtonQtd>
      <button disabled={quantity <= 1 } onClick={() => handleDecrementAmount()}>
        <Minus weight="bold"  />
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleIncrementAmount()}>
        <Plus weight="bold" />
      </button>
    </ButtonQtd>
  );
}
