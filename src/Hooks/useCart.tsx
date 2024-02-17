import { useSelector } from "react-redux";
import { CartItemsCoffee } from "../@types/store";
import { RootState } from "../store";


export function useCart() {
  const coffees = useSelector<RootState, CartItemsCoffee[]>(state => state.coffees)

  const totalPerCoffees = coffees.map(coffee => coffee.price * coffee.quantity)

  const totalPrice = totalPerCoffees.reduce((act, acc) => act + acc, 0)

  return {
    coffees,
    quantity: coffees.length,
    totalPrice,
    totalPerCoffees,
  }
}