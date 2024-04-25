import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "../src/pages/Authentication/SignUp";
import Home from "../src/pages/Home";
import About from "./pages/AboutUs";
import AuthPage from "./pages/Authentication/AuthPage";
import BillingPage from "./pages/BillingPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/Contact_Page";
import OrderCancel from "./pages/OrderCancel";
import PaymentFailPage from "./pages/PaymentFailPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import ProductPage from "./pages/ProductPage";
import AgroServices from "./pages/services-page/AgroServices";
import WeekendKills from "./pages/services-page/WeekendKills";

import MyOrder from "./pages/MyOrder";
import SellersHome from "./pages/sellers-dashboard/SellersHome";
import SellersOrderPage from "./pages/sellers-dashboard/SellersOrderPage";
import SellersPerformance from "./pages/sellers-dashboard/SellersPerformance";
import SellersProductPage from "./pages/sellers-dashboard/SellersProductPage";
import SellersSetting from "./pages/sellers-dashboard/SellersSetting";

import BlogContent from "./pages/BlogContent";
import FavouriteProductPage from "./pages/FavouriteProductPage";
// import EmptyCartPage from "./pages/EmptyCartPage";
import StepperComponent from "./components/step/StepperComponent";
import { AppProvider } from "./context/SellerInfoContext";
import AdminLayout from "./layout/AdminLayout";
import AffiliatePage from "./pages/AffiliatePage";
import CreateSellersAcc from "./pages/Authentication/CreateSellersAcc";
import StorePage from "./pages/StorePage";
import Analytics from "./pages/admin-dashboard/Analytics";
import Announcement from "./pages/admin-dashboard/Annoucement";
import Blog from "./pages/admin-dashboard/Blog";
import Calender from "./pages/admin-dashboard/Calender";
import Customers from "./pages/admin-dashboard/Customers";
import LogisticService from "./pages/admin-dashboard/LogisticService";
import Order from "./pages/admin-dashboard/Order";
import Overview from "./pages/admin-dashboard/Overview";
import VetPartner from "./pages/admin-dashboard/VetPartner";

import Messages from "./pages/admin-dashboard/Messages";
import ProductCreated from "./pages/admin-dashboard/ProductCreated";
import ProductDetail from "./pages/admin-dashboard/ProductDetail";

import CustomerRating from "./components/featured-product-component/best-selling-product/CustomerRating";
import ProductDetails from "./components/featured-product-component/best-selling-product/ProductDetails";
import SellerLayout from "./layout/SellerLayout";
import PayOption from "./pages/PayOption";

import OrderTableDetail from "./pages/admin-dashboard/OrderTableDetail";

import Search from "./Search";
import NotFound from "./components/NotFound";
import CreateAdminAcct from "./components/admin-dashboard-components/CreateAdminAcct";
import VendorLogin from "./components/auth-component/VendorLogin";
import VetPartnerCreationModal from "./components/modal-component/VetPartnerCreationModal";
import SellerStepperComponent from "./components/vendors-component/SellerManageProductStepper";
import { ProductProvider } from "./context/ProductInfoContext";
import AdminLogin from "./pages/Authentication/AdminLogin";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import MyOrderDetails from "./pages/Authentication/MyOrderDetails";
import ResetPassword from "./pages/Authentication/ResetPassword";
import ReturnRequest from "./pages/ReturnRequest";
import LogisticsPartnerAccount from "./pages/LogisticsPartnerAccount";
import MyAccount from "./pages/MyAccount";
import OrderTracking from "./pages/OrderTracking";
import RateReview from "./pages/RateReview";
import ReturnOrder from "./pages/ReturnOrder";
import VetPartnerAccount from "./pages/VetPartnerAccount";
import AgroService from "./pages/admin-dashboard/AgroService";
import BlogPost from "./pages/admin-dashboard/BlogPost";
import Category from "./pages/admin-dashboard/Category";
import CustomerCompletedOrders from "./pages/admin-dashboard/CustomerCompletedOrders";
import EditBlog from "./pages/admin-dashboard/EditBlog";
import NewStore from "./pages/admin-dashboard/NewStore";
import NewVetPartners from "./pages/admin-dashboard/NewVetPartners";
import PaymentInvoice from "./pages/admin-dashboard/PaymentInvoice";
import PaymentTracker from "./pages/admin-dashboard/PaymentTracker";
import Settings from "./pages/admin-dashboard/Settings";
import StoreProfile from "./pages/admin-dashboard/StoreProfile";
import VetService from "./pages/admin-dashboard/VetSerivce";
import WeekendKill from "./pages/admin-dashboard/WeekendKill";
import ProductCategory from "./pages/product-category/ProductCategory";
import ProductAccordion from "./pages/sellers-dashboard/ProductAccordion";
import SellersAccount from "./pages/sellers-dashboard/SellersAccount";
import SellersManageProductImage from "./pages/sellers-dashboard/SellersManageProductImage";
import VendorForgetPassword from "./pages/sellers-dashboard/VendorForgetPassword";
import VendorResetPassword from "./pages/sellers-dashboard/VendorResetPassword";
import VetServices from "./pages/services-page/VetServices";
import ManageCategories from "./pages/admin-dashboard/ManageCategories";
import CancelRequest from "./pages/CancelRequest";
import RequestSuccess from "./pages/RequestSuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route index path="/about-us" element={<About />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<MyAccount />} />
      <Route path="/blog/:id" element={<BlogContent />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/my-cart" element={<CartPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/sign-in" element={<VendorLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/forgot_password" element={<ForgetPassword />} />
      <Route path="/rate_review/:id" element={<RateReview />} />
      <Route path="/admin/registration" element={<CreateAdminAcct />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/vendors/forgot_password"
        element={<VendorForgetPassword />}
      />
      <Route
        path="/vendors/reset-password/:token"
        element={<VendorResetPassword />}
      />
      <Route
        path="/products"
        element={
          //@ts-ignore
          <ProductPage />
        }
      />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/product/rating/:id" element={<CustomerRating />} />
      <Route
        path="/category/:id"
        element={
          //@ts-ignore
          <ProductCategory />
        }
      />
      <Route
        path="/store-page/:id"
        element={
          //@ts-ignore
          <StorePage />
        }
      />
      <Route path="/billing" element={<BillingPage isMyBilling={false} />} />
      <Route path="/billing/me" element={<BillingPage isMyBilling={true} />} />
      <Route path="/pay-card" element={<PayOption />} />
      <Route path="/order+cancel" element={<OrderCancel />} />
      {/* <Route path="/rating" element={<RatingCard />} /> */}
      <Route path="/tracking+order" element={<OrderTracking />} />
      <Route path="/return+order" element={<ReturnOrder />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/vet-success" element={<VetPartnerCreationModal />} />
      <Route path="/pay-fail" element={<PaymentFailPage />} />
      <Route path="/affiliate" element={<AffiliatePage />} />
      <Route path="/create-account" element={<CreateSellersAcc />} />
      <Route
        path="/affiliate/vet-partner-account"
        element={<VetPartnerAccount />}
      />
      <Route
        path="/affiliate/logistics-partner-account"
        element={<LogisticsPartnerAccount />}
      />
      <Route path="/favorite+products" element={<FavouriteProductPage />} />
      <Route path="/my__orders/:id" element={<MyOrderDetails />} />
      <Route path="/my__orders" element={<MyOrder />} />
      <Route
        path="/my__orders/:id/:productId/return-request"
        element={<ReturnRequest />}
      />
      <Route
        path="/my__orders/:id/:productId/cancel-request"
        element={<CancelRequest />}
      />
      <Route path="/my__orders/request-success" element={<RequestSuccess />} />
      {/* <Route path="/empty_cart" element={<EmptyCartPage />} /> */}
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/services/vet-services" element={<VetServices />} />
      <Route path="/services/weekend-kills" element={<WeekendKills />} />
      <Route path="/services/agro-services" element={<AgroServices />} />
      <Route path="" element={<SellerLayout />}>
        <Route path="/vendor" element={<SellersHome sliderImages={[]} />} />
        <Route path="/vendor/order" element={<SellersOrderPage />} />
        <Route path="/vendor/products" element={<SellersProductPage />} />

        <Route path="/vendor/create-product" element={<StepperComponent />} />
        <Route
          path="/vendor/product/create-product"
          element={<SellerStepperComponent />}
        />
        <Route path="/vendor/create" element={<ProductAccordion />} />
        <Route path="/vendor/account+statement" element={<SellersAccount />} />
        <Route
          path="/vendor/product/manage"
          element={<SellersManageProductImage />}
        />
        <Route path="/vendor/settings" element={<SellersSetting />} />
        <Route path="/vendor/performance" element={<SellersPerformance />} />
      </Route>
      <Route path="" element={<AdminLayout />}>
        <Route index path="/admin" element={<Overview />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/order/:id" element={<OrderTableDetail />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route
          path="/admin/customers/completed-orders"
          element={<CustomerCompletedOrders />}
        />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/stores" element={<StoreProfile />} />
        <Route path="/admin/stores/new" element={<NewStore />} />
        <Route path="/admin/stores/profile" element={<StoreProfile />} />
        <Route path="/admin/vet" element={<VetPartner />} />
        <Route path="/admin/vet/new" element={<NewVetPartners />} />
        <Route path="/admin/logistic" element={<LogisticService />} />
        <Route path="/admin/calender" element={<Calender />} />
        <Route path="/admin/blog/create" element={<Blog />} />
        <Route path="/admin/blog/:id" element={<EditBlog />} />
        <Route path="/admin/blog" element={<BlogPost />} />
        <Route path="/admin/announcement" element={<Announcement />} />
        <Route path="/admin/manage+category" element={<Category />} />
        <Route
          path="/admin/manage+category/:id"
          element={<ManageCategories />}
        />
        <Route path="/admin/payment/invoice" element={<PaymentInvoice />} />
        <Route path="/admin/payment/tracker" element={<PaymentTracker />} />
        <Route path="/admin/products" element={<ProductCreated />} />
        <Route path="/admin/products__details" element={<ProductDetail />} />
        <Route path="/admin/messages" element={<Messages />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/service/agro_service" element={<AgroService />} />
        <Route path="/admin/service/weekend_kill" element={<WeekendKill />} />
        <Route path="/admin/service/vet_service" element={<VetService />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <AppProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AppProvider>
  );
}

export default App;
