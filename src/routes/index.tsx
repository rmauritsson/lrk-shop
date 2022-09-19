import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const RouteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
export default RouteRouter;
