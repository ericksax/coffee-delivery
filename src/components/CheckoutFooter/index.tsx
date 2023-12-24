import { useCart } from "../../Hooks/useCart";
import { CheckoutFooterContainer, ContainerPrices } from "./styles";
import {TransformCurrency} from '../../Utils/transformCurrency'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { destroyListCoffe } from "../../store/reducers";


export function CheckoutFooter() {
const {totalPrice } = useCart()
const dispatch = useDispatch()

  return (
    <CheckoutFooterContainer>
    <ContainerPrices>
      <div>
        <span>Total de itens</span>
        <span>Entrega</span>
        <strong>Total</strong>
      </div>
      <div>
        <span>{TransformCurrency(totalPrice/100)}</span>
        <span>RS 3,50</span>
        <strong>{TransformCurrency(totalPrice/100 + 3.50) }</strong> 
      </div>
    </ContainerPrices>
    <Link to='/confirmation'> 
      <button onClick={()=> dispatch(destroyListCoffe())}>CONFIRMAR PEDIDO</button>
    </Link>
   
  </CheckoutFooterContainer>
  )
}