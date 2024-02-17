import { configureStore } from "@reduxjs/toolkit";
import { CoffeeList } from "./reducers";

export const store = configureStore({
  reducer: CoffeeList.reducer,
});

type GetStateType = typeof store.getState;
export type RootState = ReturnType<GetStateType>;
