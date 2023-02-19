import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/AboutUs";
import AuthPage from "./pages/Authentication/AuthPage";
import SignUp from "../src/pages/Authentication/SignUp";
import BlogPage from "./pages/BlogPage";
import Contact_Page from "./pages/Contact_Page";
import AgroServices from "./pages/AgroServices";
import WeekendKills from "./pages/WeekendKills";
import VeterinaryServices from "./pages/VetServices";
import ProductPage from "./pages/ProductPage";
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

function App() {
  // const route = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home></Home>,
  //   },
  //   {
  //     path: "/about-us",
  //     element: <About></About>,
  //   },
  //   {
  //     path: "/sign-up",
  //     element: <SignUp></SignUp>,
  //   },
  //   {
  //     path: "/login",
  //     element: <AuthPage></AuthPage>,
  //   },
  //   {
  //     path: "/blog",
  //     element: <BlogPage></BlogPage>,
  //   },
  //   {
  //     path: "/blog",
  //     element: <BlogPage></BlogPage>,
  //   },
  //   {
  //     path: "/services/agro-services",
  //     element: <AgroServices />,
  //   },
  //   {
  //     path: "/services/weekend-kills",
  //     element: <WeekendKills />,
  //   },
  //   {
  //     path: "/services/veterinary-services",
  //     element: <VeterinaryServices />,
  //   },
  //   {
  //     path: "/products",
  //     element: <ProductPage></ProductPage>,
  //   },
  //   {
  //     path: "/order-cancel",
  //     element: <OrderCancel></OrderCancel>,
  //   },
  //   {
  //     path: "/order-tracking",
  //     element: <OrderTracking></OrderTracking>,
  //   },
  //   {
  //     path: "/contact-us",
  //     element: <Contact_Page></Contact_Page>,
  //   },

  //   {
  //     path: "/order",
  //     element: <OrderPage></OrderPage>,
  //   },
  // ]);

  return (
    <main className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/sellers-dashboard" element={<Layout />}>
            <Route index element={<SellersHome />} />
            <Route path="/sellers-dashboard/order" element={<SellersOrderPage />} />
            <Route path="/sellers-dashboard/product" element={<SellersProductPage />} />
            <Route path="/sellers-dashboard/create-product" element={<CreateProduct />} />
            <Route path="/sellers-dashboard/account" element={<SellersAccount />} />
            <Route path="/sellers-dashboard/performance" element={<SellersPerformance />} />
            <Route path="/sellers-dashboard/setting" element={<SellersSetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={route}></RouterProvider> */}
      {/* <RouterProvider router={orderRoute}></RouterProvider>  */}
    </main>
  );
}

export default App;
