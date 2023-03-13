import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
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
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import CartPage from "./pages/CartPage";
import OrderCancel from "./pages/OrderCancel";
import PaymentFailPage from "./pages/PaymentFailPage";
import Layout from "./shared/SellerLayout";
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
import FeesAccordion from "./pages/sellers-dashboard/SellersProductPage";
import ProductAccordion from "./pages/sellers-dashboard/SellersProductPage";
import StepperComponent from "./components/step/StepperComponent";
import AffiliatePage from "./pages/AffiliatePage";
import CreateSellersAcc from "./pages/Authentication/CreateSellersAcc";
import StorePage from "./pages/StorePage";
import AdminLayout from "./shared/AdminLayout";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import Overview from "./pages/admin-dashboard/Overview";
import Order from "./pages/admin-dashboard/Order";
import Customers from "./pages/admin-dashboard/Customers";
import Analytics from "./pages/admin-dashboard/Analytics";
import Stores from "./pages/admin-dashboard/Stores";
import VetPartner from "./pages/admin-dashboard/VetPartner";
import LogisticService from "./pages/admin-dashboard/LogisticService";
import Calender from "./pages/admin-dashboard/Calender";
import Blog from "./pages/admin-dashboard/Blog";
import Annoucement from "./pages/admin-dashboard/Annoucement";
import Payment from "./pages/admin-dashboard/Payment";
import Services from "./pages/admin-dashboard/Services";
import ProductCreated from "./pages/admin-dashboard/ProductCreated";
import Messages from "./pages/admin-dashboard/Messages";
import Settings from "./pages/admin-dashboard/Settings";
import Dashboard from "./pages/sellers-dashboard/Dashboard";
import SellerLayout from "./shared/SellerLayout";
import Product from "./pages/sellers-dashboard/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route index path="/about-us" element={<About />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogContent />} />
      <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-cart" element={<CartPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/store-page" element={<StorePage />} />
      <Route path="/order-cancel" element={<OrderCancel />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/pay-fail" element={<PaymentFailPage />} />
      <Route path="/affiliate" element={<AffiliatePage />} />
      <Route path="/create-account" element={<CreateSellersAcc />} />
      <Route path="/favorite-products" element={<FavouriteProductPage />} />
      <Route path="/my__orders/:id" element={<MyOrderDetails />} />
      <Route path="/my__orders" element={<MyOrder />} />
      <Route path="/cart" element={<EmptyCartPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/services/weekend-kills" element={<WeekendKills />} />

      <Route path="/services/agro-services" element={<AgroServices />} />

      <Route path="/sellers-dashboard" element={<SellerLayout />}>
        <Route path="/sellers-dashboard/home" element={<SellersHome />} />
        <Route path="/sellers-dashboard/order" element={<SellersOrderPage />} />
        <Route path="/sellers-dashboard/product" element={<SellersProductPage />} />
        <Route path="/sellers-dashboard/create-product" element={<CreateProduct />} />
        
     </Route>

      <Route path="/admin-dashboard" element={<AdminLayout />}>
        <Route path="/admin-dashboard/dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/overview" element={<Overview />} />
        <Route path="/admin-dashboard/admin-order" element={<Order />} />
        <Route path="/admin-dashboard/customers" element={<Customers />} />
        <Route path="/admin-dashboard/analytics" element={<Analytics />} />
        <Route path="/admin-dashboard/stores" element={<Stores />} />
        <Route path="/admin-dashboard/vet-partner" element={<VetPartner />} />
        <Route
          path="/admin-dashboard/logistic-services"
          element={<LogisticService />}
        />
        <Route path="/admin-dashboard/calender" element={<Calender />} />
        <Route path="/admin-dashboard/blog-service" element={<Blog />} />
        <Route path="/admin-dashboard/announcement" element={<Annoucement />} />
        <Route path="/admin-dashboard/payment" element={<Payment />} />
        <Route path="/admin-dashboard/service" element={<Services />} />
        <Route
          path="/admin-dashboard/product-created"
          element={<ProductCreated />}
        />
        <Route path="/admin-dashboard/messages" element={<Messages />} />
        <Route path="/admin-dashboard/settings" element={<Settings />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
