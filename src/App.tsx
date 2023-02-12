import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/AboutUs";
import AuthPage from "./pages/Authentication/AuthPage";
import SignUp from "../src/pages/Authentication/SignUp";
import BlogPage from "./pages/BlogPage";
import Contact_Page from "./pages/Contact_Page";
import AgroServices from "./pages/AgroServices";
import WeekendKills from "./pages/WeekendKills";
import VetServices from "./pages/VetServices";


interface ServicePageProps {
  service: string;
}


function App() {

const ServicePage: React.FC<ServicePageProps> = () => {
    const [service, setService] = useState("");

    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const serviceParam = searchParams.get("service");
      setService(serviceParam ? serviceParam : "");
    }, []);

    switch (service) {
      case "agro-service":
        return <AgroServices />;
      // case "veterinary-service":
      //   return <VeterinaryServices />;
      // case "weekend-kills":
      //   return <WeekendKills />;
      default:
        // return <ServicesOverview />;
        return <Home />;
    }
  };
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
      path: "/services?service=weekend-kills",
      element: <ServicePage service={""} />,
    },
    {
      path: "/contact-us",
      element: <Contact_Page></Contact_Page>,
    },
    {
      path: "/weekend",
      element: <WeekendKills></WeekendKills>,
    },
    {
      path: "/vet",
      element: <VetServices></VetServices>,
    },
  ]);

  return (
    <main className="">
      <RouterProvider router={route}></RouterProvider>
    </main>
  );
}



export default App;



