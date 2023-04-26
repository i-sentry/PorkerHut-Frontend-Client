import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "../Home";
import About from "../AboutUs";
import AuthPage from "../Authentication/AuthPage";
import SignUp from "../Authentication/SignUp";
import BlogPage from "../BlogPage";
import ContactPage from "../Contact_Page";
import AgroServices from "../services-page/AgroServices";
import WeekendKills from "../services-page/WeekendKills";
import VeterinaryServices from "../services-page/VetServices";
import ProductPage from "../ProductPage";
import PaymentSuccessPage from "../PaymentSuccessPage";
import CartPage from "../CartPage";
import BillingPage from "../BillingPage";
import OrderCancel from "../OrderCancel";
import PaymentFailPage from "../PaymentFailPage";
import Layout from "../../layout/SellerLayout";
import SellersHome from "../sellers-dashboard/SellersHome";
import CreateProduct from "../sellers-dashboard/CreateProduct";
import SellersProductPage from "../sellers-dashboard/SellersProductPage";
import SellersAccount from "../sellers-dashboard/SellersAccount";
import SellersPerformance from "../sellers-dashboard/SellersPerformance";
import SellersSetting from "../sellers-dashboard/SellersSetting";
import SellersOrderPage from "../sellers-dashboard/SellersOrderPage";
import MyOrder from "../MyOrder";
import MyOrderDetails from "../Authentication/MyOrderDetails";
import FavouriteProductPage from "../FavouriteProductPage";
import BlogContent from "../BlogContent";
import EmptyCartPage from "../EmptyCartPage";
import FeesAccordion from "../sellers-dashboard/SellersProductPage";
import ProductAccordion from "../sellers-dashboard/SellersProductPage";
import StepperComponent from "../../components/step/StepperComponent";
import AffiliatePage from "../AffiliatePage";
import CreateSellersAcc from "../Authentication/CreateSellersAcc";
import { AppProvider } from "../../context/SellerInfoContext";
import StorePage from "../StorePage";
import AdminLayout from "../../layout/AdminLayout";
import AdminDashboard from "./AdminDashboard";
import Overview from "./Overview";
import Order from "./Order";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Stores from "./Stores";
import VetPartner from "./VetPartner";
import LogisticService from "./LogisticService";
import Calender from "./Calender";
import Blog from "./Blog";
import Announcement from "./Annoucement";
import Payment from "./Payment";
import ProductCreated from "./ProductCreated";
import Messages from "./Messages";
import Settings from "./Settings";
import Dashboard from "../sellers-dashboard/Dashboard";
import SellerLayout from "../../layout/SellerLayout";
import Product from "../sellers-dashboard/SellersManageProductImage";
import PayOption from "../PayOption";
import ProductDetails from "../../components/featured-product-component/best-selling-product/ProductDetails";
import CustomerRating from "../../components/featured-product-component/best-selling-product/CustomerRating";
import RatingCard from "../../components/featured-product-component/best-selling-product/RatingCard";
import ProductCategory from "../product-category/ProductCategory";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";
import Tabs from "../tabs/MobileTabs";
import MobileTabs from "../tabs/MobileTabs";
import AccountInfo from "../tabs/AccountInfo";
import OrderTableDetail from "./OrderTableDetail";
import SellerStepperComponent from "../../components/manage-seller-product-stepper-form-components/SellerStepperComponent";
import SellersManageProductImage from "../sellers-dashboard/SellersManageProductImage";
import StoreProfile from "./StoreProfile";
import NewStore from "./NewStore";
import NewVetPartners from "./NewVetPartners";
import BlogPost from "./BlogPost";
import EditBlog from "./EditBlog";
import Logistics from "./Logistics";
import PaymentInvoice from "./PaymentInvoice";
import PaymentTracker from "./PaymentTracker";
import WeekendKill from "./WeekendKill";
import VetServices from "../services-page/VetServices";
import AgroService from "./AgroService";
import ProductDetail from "./ProductDetail";

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
      <Route path="/services/weekend-kills" element={<WeekendKills />} />

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

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Overview />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/order/:id" element={<OrderTableDetail />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/payment/tracker" element={<PaymentTracker />} />
        <Route path="/admin/payment/invoice" element={<PaymentInvoice />} />

        <Route path="/admin/stores/new" element={<NewStore />} />
        <Route path="/admin/stores" element={<StoreProfile />} />
        <Route path="/admin/vet" element={<VetPartner />} />
        <Route path="/admin/logistic" element={<Logistics />} />
        <Route path="/admin/vet/new" element={<NewVetPartners />} />
        <Route path="/admin/logistic-services" element={<LogisticService />} />
        <Route path="/admin/calender" element={<Calender />} />
        <Route path="/admin/blog/create" element={<Blog />} />
        <Route path="/admin/edit__blog/:id" element={<EditBlog />} />
        <Route path="/admin/blog" element={<BlogPost />} />
        <Route path="/admin/announcement" element={<Announcement />} />
        <Route path="/admin/payment" element={<Payment />} />
        <Route path="/admin/service/agro_service" element={<AgroService />} />
        <Route path="/admin/service/vet" element={<VetServices />} />
        <Route path="/admin/service/weekend_kill" element={<WeekendKill />} />
        <Route path="/admin/product" element={<ProductCreated />} />
        <Route path="/admin/product/:id" element={<ProductDetail />} />
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
