import React from "react";
import Img from "../assets/404-page.svg";
import NavBar from "./nav-component/NavBar";
import Footer from "./footer-component/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="px-4 pt-[80px] pb-10 lg:container md:grid md:grid-cols-2 md:items-center lg:mx-auto xl:h-screen xl:w-[1140px] xl:py-16">
        <div className="col-[2/3] mx-auto max-w-[400px] xl:max-w-full xl:scale-75">
          <img src={Img} alt="Illustration" />
        </div>
        <div className="mt-8 space-y-6 text-center md:col-[1/2] md:row-[1/2] md:mt-0 md:space-y-9 md:text-left xl:space-y-16 xl:pl-10">
          <div className="">
            <h1 className="mb-1 text-[32px] font-semibold md:text-[42px] lg:mb-1.5 lg:text-5xl xl:text-6xl">
              Page not found
            </h1>
            <p>The page you are looking for cannot be found</p>
          </div>
          <p className="text-[#B4B4B4]">
            Go back to the{" "}
            <Link to={"/"} className="text-green-700">
              Homepage
            </Link>{" "}
            or visit our{" "}
            <Link to={"/contact-us"} className="text-green-700">
              Help Center
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
