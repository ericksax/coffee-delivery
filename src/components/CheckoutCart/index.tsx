import { QuantityButton } from "../QuantityButton";
import { Trash } from "phosphor-react";
import { CheckoutFooter } from "../CheckoutFooter";
import { useCart } from "../../Hooks/useCart";
import { TransformCurrency } from "../../Utils/transformCurrency";
import { Card, CartChecoutContainer, RemoveButton } from "./styles";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeCoffee } from "../../store/reducers";

export function CheckoutCart() {

  const { coffees } = useCart()
  const dispatch = useDispatch()

  return (
    <CartChecoutContainer>

      {coffees.map(coffee => (
        <Card key={coffee.id}>
          <img src={coffee.image} width={64} alt="" />
          <div>
            <span>{coffee.title}</span>
            <div>
              <QuantityButton
                handleDecrementAmount={() => dispatch(decrementQuantity(coffee))}
                handleIncrementAmount={() => dispatch(incrementQuantity(coffee))}
                quantity={coffee.quantity}
              />
              <RemoveButton onClick={() => dispatch(removeCoffee(coffee))}>
                <Trash size={20} />
                Remover
              </RemoveButton>
            </div>
          </div>
          <span>{TransformCurrency((coffee.price / 100) * coffee.quantity)}</span>
        </Card>
      ))}
      <CheckoutFooter />
    </CartChecoutContainer>
  );
}
