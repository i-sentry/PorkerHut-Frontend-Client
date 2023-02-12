import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/AboutUs";
import AuthPage from "./pages/Authentication/AuthPage";
import SignUp from "../src/pages/Authentication/SignUp";
import BlogPage from "./pages/BlogPage";
import Contact_Page from "./pages/Contact_Page";
import AgroServices from "./pages/AgroServices";
import ProductPage from "./pages/ProductPage";
import WeekendKills from "./pages/WeekendKills";
import VeterinaryServices from "./pages/VetServices";



function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/about-us",
      element: <About></About>,
    },
    {
      path: "/sign-up",
      element: <SignUp></SignUp>,
    },
    {
      path: "/login",
      element: <AuthPage></AuthPage>,
    },
    {
      path: "/blog",
      element: <BlogPage></BlogPage>,
    },
    {
      path: "/blog",
      element: <BlogPage></BlogPage>,
    },
    {
      path: "/services/agro-services",
      element: <AgroServices />,
    },
    {
      path: "/services/weekend-kills",
      element: <WeekendKills />,
    },
    {
      path: "/services/veterinary-services",
      element: <VeterinaryServices />,
    },
    {
      path: "/products",
      element: <ProductPage></ProductPage>,
    },
    {
      path: "/contact-us",
      element: <Contact_Page></Contact_Page>,
    },
  ]);

  return (
    <main className="">
      <RouterProvider router={route}></RouterProvider>
    </main>
  );
}

export default App;
