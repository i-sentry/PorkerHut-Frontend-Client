import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import AuthPage from "./pages/Authentication/AuthPage";
import SignUp from "../src/pages/Authentication/SignUp";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/about",
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
  ]);

  return (
    <main className="">
      <RouterProvider router={route}></RouterProvider>
    </main>
  );
}

export default App;
