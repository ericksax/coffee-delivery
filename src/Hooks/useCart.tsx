import { useSelector } from "react-redux";
import { CartItemsCoffe } from "../@types/store";
import { RootState } from "../store";


export function useCart() {
  const coffes = useSelector<RootState, CartItemsCoffe[]>(state=> state.coffes)
  
  const totalPerCoffes = coffes.map(coffe=> coffe.price * coffe.quantity)
  
  const totalPrice = totalPerCoffes.reduce((act, acc)=> act + acc, 0) 

  return {
    coffes,
    quantity: coffes.length,
    totalPrice,
    totalPerCoffes,
  }
}