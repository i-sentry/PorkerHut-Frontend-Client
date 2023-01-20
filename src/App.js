import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import AuthPage from "../src/pages/AuthPage";
import Footer from "./components/footer-component/Footer";

const Layout = () => {
  return (
    <div className="app">
    
      <Outlet />
    
    </div>
  );
};

function App(props) {
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
      path: "/login",
      element: <AuthPage></AuthPage>,
    },
    
    // {
    //   path: "/",
    //   element: <Layout />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/products/:id",
    //       element: <About />,
    //     },
    //     {
    //       path: "/product/:id",
    //       element: <AuthPage />,
    //     },
    //   ],
    // },
  ]);

  return (
    <main className="App">
      <RouterProvider
      router={route}
      >

      </RouterProvider>
    </main>
  );
}

export default App;
