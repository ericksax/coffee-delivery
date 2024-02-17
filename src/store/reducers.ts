import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../@types/store";

const initialState: CartItem = {
  coffees: [],
};

export const CoffeeList = createSlice({
  name: "coffeeList",
  initialState,
  reducers: {
    addCoffee: (state, action) => {
      const isAlreadyAddedOnCart = state.coffees.findIndex(
        (coffee) => action.payload.id === coffee.id
      );
      if (isAlreadyAddedOnCart === -1) {
        state.coffees.push(action.payload);
      } else {
        state.coffees[isAlreadyAddedOnCart].quantity += action.payload.quantity;
      }
    },

    removeCoffee: (state, action) => {
      const index = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.id
      );
      state.coffees.splice(index, 1);
    },

    decrementQuantity: (state, action) => {
      const index = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.id
      );
      if (state.coffees[index].quantity >= 2) {
        state.coffees[index].quantity -= 1;
      }
    },

    incrementQuantity: (state, action) => {
      const index = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.id
      );

      state.coffees[index].quantity += 1;
    },

    destroyListCoffee: (state) => {
      state.coffees = [];
    },
  },
});

export const {
  addCoffee,
  removeCoffee,
  decrementQuantity,
  incrementQuantity,
  destroyListCoffee,
} = CoffeeList.actions;
