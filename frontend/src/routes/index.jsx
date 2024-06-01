import LandingPage from "../pages/landingPage";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cartPage/index.jsx";
import ProductDetails from "../pages/productDetail";
import Products from "../pages/Products";
import Shipping from "../pages/shipping";
import ConfirmOrder from "../pages/confirmOrderPage";
import Orders from "../pages/ordersPage";
import OrderSuccess from "../pages/orderSuccessPage";
import OrderDetails from "../pages/orderDetailsPage";
export default function AllRoutes({ stripeApiKey }) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/myCart" element={<Cart />} />
      <Route path="/confirmOrder" element={<ConfirmOrder />} />
      <Route path="/me/shipping" element={<Shipping />} />
      <Route path="/me/orders" element={<Orders />} />
      <Route path="/orderSuccess" element={<OrderSuccess />} />
      <Route path="/order/details/:id" element={<OrderDetails />} />

      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
