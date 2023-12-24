import { QuantityButton } from "../QuantityButton";
import { Trash } from "phosphor-react";
import { CheckoutFooter } from "../CheckoutFooter";
import { useCart } from "../../Hooks/useCart";
import { TransformCurrency } from "../../Utils/transformCurrency";
import { Card, CartChecoutContainer, RemoveButton } from "./styles";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeCoffe } from "../../store/reducers";

export function CheckoutCart() {

 const { coffes } = useCart()
 const dispatch = useDispatch()
  
  return (
    <CartChecoutContainer>

      {coffes.map(coffe => (
        <Card key={coffe.id}>
        <img src={coffe.image} width={64} alt="" />
        <div>
          <span>{coffe.title}</span>
          <div>
            <QuantityButton
              handleDecrementAmount={() => dispatch(decrementQuantity(coffe))}
              handleIncrementAmount={() => dispatch(incrementQuantity(coffe))}
              quantity={coffe.quantity}
            />
            <RemoveButton onClick={() => dispatch(removeCoffe(coffe))}>
              <Trash size={20} />
              Remover
            </RemoveButton>
          </div>
        </div>
        <span>{TransformCurrency((coffe.price/100) * coffe.quantity)}</span>
      </Card>
      ))}
      <CheckoutFooter/>
    </CartChecoutContainer>
  );
}
