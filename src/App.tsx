import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/AboutUs";
import AuthPage from "./pages/Authentication/AuthPage";
import SignUp from "../src/pages/Authentication/SignUp";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/Contact_Page";
import AgroServices from "./pages/services-page/AgroServices";
import WeekendKills from "./pages/services-page/WeekendKills";
import VeterinaryServices from "./pages/services-page/VetServices";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderCancel from "./pages/OrderCancel";
import OrderTracking from "./pages/OrderTracking";
import Layout from "./shared/Layout";
import SellersHome from "./pages/sellers-dashboard/SellersHome";
import CreateProduct from "./pages/sellers-dashboard/CreateProduct";
import SellersProductPage from "./pages/sellers-dashboard/SellersProductPage";
import SellersAccount from "./pages/sellers-dashboard/SellersAccount";
import SellersPerformance from "./pages/sellers-dashboard/SellersPerformance";
import SellersSetting from "./pages/sellers-dashboard/SellersSetting";
import SellersOrderPage from "./pages/sellers-dashboard/SellersOrderPage";
import MyOrder from "./pages/MyOrder";
import MyOrderDetails from "./pages/Authentication/MyOrderDetails";
import FavouriteProductPage from "./pages/FavouriteProductPage";
import BlogContent from "./pages/BlogContent";
import EmptyCartPage from "./pages/EmptyCartPage";

function App() {
  return (
    <main className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogContent />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-cart" element={<CartPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route
            path="/favourite-products"
            element={<FavouriteProductPage />}
          />
          <Route path="/my__orders/:id" element={<MyOrderDetails />} />
          <Route path="/my__orders" element={<MyOrder />} />
          <Route path="/cart" element={<EmptyCartPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/services/weekend-kills" element={<WeekendKills />} />
          <Route
            path="/services/veterinary-services"
            element={<VeterinaryServices />}
          />
          <Route path="/services/agro-services" element={<AgroServices />} />
          <Route path="/sellers-dashboard" element={<Layout />}>
            <Route index element={<SellersHome />} />
            <Route
              path="/sellers-dashboard/order"
              element={<SellersOrderPage />}
            />
            <Route
              path="/sellers-dashboard/product"
              element={<SellersProductPage />}
            />
            <Route
              path="/sellers-dashboard/create-product"
              element={<CreateProduct />}
            />
            <Route
              path="/sellers-dashboard/account"
              element={<SellersAccount />}
            />
            <Route
              path="/sellers-dashboard/performance"
              element={<SellersPerformance />}
            />
            <Route
              path="/sellers-dashboard/setting"
              element={<SellersSetting />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={route}></RouterProvider> */}
      {/* <RouterProvider router={orderRoute}></RouterProvider>  */}
    </main>
  );
}

export default App;
