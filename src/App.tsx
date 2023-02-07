import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/AboutUs";
import AuthPage from "./pages/Authentication/AuthPage";
import SignUp from "../src/pages/Authentication/SignUp";
import BlogPage from "./pages/BlogPage";
import AgroServices from "./pages/AgroServices";

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
      path: "/agro",
      element: <AgroServices></AgroServices>,
    },
  ]);

  return (
    <main className="">
      <RouterProvider router={route}></RouterProvider>
    </main>
  );
}

export default App;
