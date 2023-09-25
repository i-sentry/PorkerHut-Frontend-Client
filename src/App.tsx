import {
  createBrowserRouter,
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
import ProductPage from "./pages/ProductPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import CartPage from "./pages/CartPage";
import BillingPage from "./pages/BillingPage";
import OrderCancel from "./pages/OrderCancel";
import PaymentFailPage from "./pages/PaymentFailPage";

import SellersHome from "./pages/sellers-dashboard/SellersHome";
import SellersProductPage from "./pages/sellers-dashboard/SellersProductPage";
import SellersPerformance from "./pages/sellers-dashboard/SellersPerformance";
import SellersSetting from "./pages/sellers-dashboard/SellersSetting";
import SellersOrderPage from "./pages/sellers-dashboard/SellersOrderPage";
import MyOrder from "./pages/MyOrder";
import MyOrderDetails from "./pages/Authentication/MyOrderDetails";
import FavouriteProductPage from "./pages/FavouriteProductPage";
import BlogContent from "./pages/BlogContent";
import EmptyCartPage from "./pages/EmptyCartPage";
import StepperComponent from "./components/step/StepperComponent";
import AffiliatePage from "./pages/AffiliatePage";
import CreateSellersAcc from "./pages/Authentication/CreateSellersAcc";
import { AppProvider } from "./context/SellerInfoContext";
import StorePage from "./pages/StorePage";
import AdminLayout from "./layout/AdminLayout";
import Overview from "./pages/admin-dashboard/Overview";
import Order from "./pages/admin-dashboard/Order";
import Customers from "./pages/admin-dashboard/Customers";
import Analytics from "./pages/admin-dashboard/Analytics";
import VetPartner from "./pages/admin-dashboard/VetPartner";
import LogisticService from "./pages/admin-dashboard/LogisticService";
import Calender from "./pages/admin-dashboard/Calender";
import Blog from "./pages/admin-dashboard/Blog";
import Announcement from "./pages/admin-dashboard/Annoucement";
import Payment from "./pages/admin-dashboard/Payment";

import ProductCreated from "./pages/admin-dashboard/ProductCreated";
import ProductDetail from "./pages/admin-dashboard/ProductDetail";
import Messages from "./pages/admin-dashboard/Messages";
import Settings from "./pages/admin-dashboard/Settings";
import SellerLayout from "./layout/SellerLayout";
import PayOption from "./pages/PayOption";
import ProductDetails from "./components/featured-product-component/best-selling-product/ProductDetails";
import CustomerRating from "./components/featured-product-component/best-selling-product/CustomerRating";
import RatingCard from "./components/featured-product-component/best-selling-product/RatingCard";
import ProductCategory from "./pages/product-category/ProductCategory";
import OrderTableDetail from "./pages/admin-dashboard/OrderTableDetail";

import SellersManageProductImage from "./pages/sellers-dashboard/SellersManageProductImage";
import StoreProfile from "./pages/admin-dashboard/StoreProfile";
import NewStore from "./pages/admin-dashboard/NewStore";
import NewVetPartners from "./pages/admin-dashboard/NewVetPartners";
import BlogPost from "./pages/admin-dashboard/BlogPost";
import EditBlog from "./pages/admin-dashboard/EditBlog";
import VetServices from "./pages/services-page/VetServices";
import OrderTracking from "./pages/OrderTracking";
import Search from "./Search";
import MyAccount from "./pages/MyAccount";
import ReturnOrder from "./pages/ReturnOrder";
import ReturnRequest from "./pages/Authentication/ReturnRequest";
import Category from "./pages/admin-dashboard/Category";
import VetPartnerAccount from "./pages/VetPartnerAccount";
import LogisticsPartnerAccount from "./pages/LogisticsPartnerAccount";
import SellersAccount from "./pages/sellers-dashboard/SellersAccount";
import ProductAccordion from "./pages/sellers-dashboard/ProductAccordion";
import VendorLogin from "./components/auth-component/VendorLogin";
import { ProductProvider } from "./context/ProductInfoContext";
import VetPartnerCreationModal from "./components/modal-component/VetPartnerCreationModal";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <AppProvider>
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
      <Route
        path="/products"
        element={
          //@ts-ignore
          <ProductPage />
        }
      />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/product/:id/rating-page" element={<CustomerRating />} />

      <Route
        path="/category"
        element={
          //@ts-ignore
          <ProductCategory />
        }
      />
      <Route
        path="/store-page/:storeTitle"
        element={
          //@ts-ignore
          <StorePage />
        }
      />
      <Route path="/billing" element={<BillingPage />} />
      <Route path="/pay-card" element={<PayOption />} />
      <Route path="/order+cancel" element={<OrderCancel />} />

      <Route path="/rating" element={<RatingCard />} />
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
      <Route path="/my__orders/:id/:orderid" element={<ReturnRequest />} />
      <Route path="/empty_cart" element={<EmptyCartPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/services/vet-services" element={<VetServices />} />
      <Route path="/services/weekend-kills" element={<WeekendKills />} />

      <Route path="/services/agro-services" element={<AgroServices />} />

      <Route path="" element={<SellerLayout />}>
        <Route path="/vendor" element={<SellersHome sliderImages={[]} />} />
        <Route path="/vendor/order" element={<SellersOrderPage />} />
        <Route path="/vendor/products" element={<SellersProductPage />} />

        <Route path="/vendor/create-product" element={<StepperComponent />} />
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
        <Route path="/admin/payment" element={<Payment />} />
        <Route path="/admin/products" element={<ProductCreated />} />
        <Route path="/admin/products__details" element={<ProductDetail />} />
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
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AppProvider>
  );
}

export default App;
