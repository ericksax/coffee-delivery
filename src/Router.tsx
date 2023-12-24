import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { CheckOut } from "./pages/Checkout";
import { Confirmation } from "./pages/Confirmation";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Route>
    </Routes>
  );
}
