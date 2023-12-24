import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../@types/store";

const initialState: CartItem = {
  coffes: [],
};

export const CoffeList = createSlice({
  name: "coffeList",
  initialState,
  reducers: {
    addCoffe: (state, action) => {
      const isAlreadyAddedOnCart = state.coffes.findIndex(
        (coffe) => action.payload.id === coffe.id
      );
      if (isAlreadyAddedOnCart === -1) {
        state.coffes.push(action.payload);
      } else {
        state.coffes[isAlreadyAddedOnCart].quantity += action.payload.quantity;
      }
    },

    removeCoffe: (state, action) => {
      const index = state.coffes.findIndex(
        (coffe) => coffe.id === action.payload.id
      );
      state.coffes.splice(index, 1);
    },

    decrementQuantity: (state, action) => {
      const index = state.coffes.findIndex(
        (coffe) => coffe.id === action.payload.id
      );
      if (state.coffes[index].quantity >= 2) {
        state.coffes[index].quantity -= 1;
      }
    },

    incrementQuantity: (state, action) => {
      const index = state.coffes.findIndex(
        (coffe) => coffe.id === action.payload.id
      );

      state.coffes[index].quantity += 1;
    },

    destroyListCoffe: (state) => {
      state.coffes = []
    }
  },
});

export const { addCoffe, removeCoffe, decrementQuantity, incrementQuantity, destroyListCoffe } =
  CoffeList.actions;
