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
import BillingPage from "./pages/BillingPage";
import OrderCancel from "./pages/OrderCancel";
import PaymentFailPage from "./pages/PaymentFailPage";
import Layout from "./layout/SellerLayout";
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
import { AppProvider } from "./context/SellerInfoContext";
import StorePage from "./pages/StorePage";
import AdminLayout from "./layout/AdminLayout";
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
import Announcement from "./pages/admin-dashboard/Annoucement";
import Payment from "./pages/admin-dashboard/Payment";
import Services from "./pages/admin-dashboard/Services";
import ProductCreated from "./pages/admin-dashboard/ProductCreated";
import Messages from "./pages/admin-dashboard/Messages";
import Settings from "./pages/admin-dashboard/Settings";
import Dashboard from "./pages/sellers-dashboard/Dashboard";
import SellerLayout from "./layout/SellerLayout";
import Product from "./pages/sellers-dashboard/SellersManageProductImage";
import PayOption from "./pages/PayOption";
import ProductDetails from "./components/featured-product-component/best-selling-product/ProductDetails";
import CustomerRating from "./components/featured-product-component/best-selling-product/CustomerRating";
import RatingCard from "./components/featured-product-component/best-selling-product/RatingCard";
import ProductCategory from "./pages/product-category/ProductCategory";
import ToggleSwitch from "./components/toggle-switch/ToggleSwitch";
import Tabs from "./pages/tabs/MobileTabs";
import MobileTabs from "./pages/tabs/MobileTabs";
import AccountInfo from "./pages/tabs/AccountInfo";
import OrderTableDetail from "./pages/admin-dashboard/OrderTableDetail";
import SellerStepperComponent from "./components/manage-seller-product-stepper-form-components/SellerStepperComponent";
import SellersManageProductImage from "./pages/sellers-dashboard/SellersManageProductImage";
import StoreProfile from "./pages/admin-dashboard/StoreProfile";
import NewStore from "./pages/admin-dashboard/NewStore";
import NewVetPartners from "./pages/admin-dashboard/NewVetPartners";
import BlogPost from "./pages/admin-dashboard/BlogPost";
import EditBlog from "./pages/admin-dashboard/EditBlog";
import VetServices from "./pages/services-page/VetServices";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <AppProvider>
    <Route>
      <Route path="/" element={<Home />} />
      <Route index path="/about-us" element={<About />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogContent />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/my-cart" element={<CartPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/product/:id/rating-page" element={<CustomerRating />} />

      <Route path="/category/:title" element={<ProductCategory />} />
      <Route path="/store-page" element={<StorePage />} />
      <Route path="/billing" element={<BillingPage />} />
      <Route path="/pay-card" element={<PayOption />} />
      <Route path="/order-cancel" element={<OrderCancel />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/rating" element={<RatingCard />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/pay-fail" element={<PaymentFailPage />} />
      <Route path="/affiliate" element={<AffiliatePage />} />
      <Route path="/create-account" element={<CreateSellersAcc />} />
      <Route path="/favorite-products" element={<FavouriteProductPage />} />
      <Route path="/my__orders/:id" element={<MyOrderDetails />} />
      <Route path="/my__orders" element={<MyOrder />} />
      <Route path="/empty_cart" element={<EmptyCartPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/services/vet-services" element={<VetServices/>} />
      <Route path="/services/weekend-kills" element={<WeekendKills/>} />


      <Route path="/services/agro-services" element={<AgroServices />} />
      <Route path="/switch" element={<ToggleSwitch />} />

      <Route path="/vendor" element={<SellerLayout />}>
        <Route path="/vendor/home" element={<SellersHome />} />
        <Route path="/vendor/order" element={<SellersOrderPage />} />
        <Route path="/vendor/product" element={<SellersProductPage />} />
        <Route
          path="/vendor/product/seller-stepper/:id"
          element={<SellerStepperComponent />}
        />
        <Route
          path="/vendor/create-product/stepper"
          element={<StepperComponent />}
        />
        <Route path="/vendor/create-product" element={<CreateProduct />} />
        <Route
          path="/vendor/product/manage-product-images"
          element={<SellersManageProductImage />}
        />
        <Route path="/vendor/setting" element={<SellersSetting />} />
        <Route path="/vendor/performance" element={<SellersPerformance />} />
      </Route>

      <Route path="" element={<AdminLayout />}>
        <Route index path="/admin/overview" element={<Overview />} />
        <Route path="/admin/admin-order" element={<Order />} />
        <Route path="/admin/admin-order/:id" element={<OrderTableDetail />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/stores" element={<NewStore />} />
        <Route path="/admin/stores/new-store" element={<NewStore />} />
        <Route path="/admin/stores/store-profile" element={<StoreProfile />} />
        <Route path="/admin/vet" element={<VetPartner />} />
        <Route path="/admin/new__vet" element={<NewVetPartners />} />
        <Route path="/admin/logistic-services" element={<LogisticService />} />
        <Route path="/admin/calender" element={<Calender />} />
        <Route path="/admin/create__blog" element={<Blog />} />
        <Route path="/admin/edit__blog/:id" element={<EditBlog />} />
        <Route path="/admin/blog" element={<BlogPost />} />
        <Route path="/admin/announcement" element={<Announcement />} />
        <Route path="/admin/payment" element={<Payment />} />
        <Route path="/admin/service" element={<Services />} />
        <Route path="/admin/product-created" element={<ProductCreated />} />
        <Route path="/admin/messages" element={<Messages />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>
    </Route>
    // </AppProvider>
  )
);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
