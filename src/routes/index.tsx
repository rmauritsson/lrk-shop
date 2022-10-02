import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/404";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import RegisterUser from "../pages/Register";
import Shop from "../pages/Shop";

const RouteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default RouteRouter;
