import { configureStore } from "@reduxjs/toolkit";
import { CoffeList } from "./reducers";

export const store = configureStore({
  reducer: CoffeList.reducer,
});

type GetStateType = typeof store.getState;
export type RootState = ReturnType<GetStateType>;
