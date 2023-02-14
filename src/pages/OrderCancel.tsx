import React from "react";
import Footer from "../components/footer-component/Footer";
import NavBar from "../components/nav-component/NavBar";
import OrderImg from "../assets/images/OrderImg.png";

const OrderCancel = () => {
  return (
    <>
      <NavBar />

      <div className=" text-center mt-5">
        <h1 className=" mt-20 text-[20px] md:text-[40px] font-medium">
          How to cancel your orders
          <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto"></div>
        </h1>
      </div>
      <div className=" mt-8 mb-14 md:mx-10">
        <figure>
          <img className=" w-full" src={OrderImg} alt="" />
        </figure>
      </div>

      <Footer />
    </>
  );
};

export default OrderCancel;
