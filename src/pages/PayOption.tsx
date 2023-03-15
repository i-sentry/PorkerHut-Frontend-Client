import React from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import { RxDot } from "react-icons/rx";
import VisatImg from "../assets/images/VisatImg.png";
import FlutterwaveImg from "../assets/images/FlutterwaveImg.png";
import MasterLogoImg from "../assets/images/MasterLogoImg.png";
import PaystackImg from "../assets/images/PaystackImg.png";
import Footer from "../components/footer-component/Footer";
import OrderCart from "../components/order-component/OrderCart";

export {};

const PayOption = () => {
  return (
    <>
      <div className="  bg-[#F5F5F5] min-h-screen">
        <nav className="mb-20">
          <NavBar />
        </nav>

        <div className=" bg-[#F5F5F5]">
          <div className="">
            <div className="px-8">
              <ProductsBreadCrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "Cart",
                    link: "/cart",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className=" p-8 flex flex-col lg:flex-row gap-10 ">
          <div className="card-option flex flex-col gap-6 lg:gap-0 flex-1">
            <div className=" bg-white rounded-md lg:rounded-b-none p-4 flex-1">
              <h1 className=" p-2 text-[20px] text-[#333333] font-semibold">
                Payment Methods
              </h1>
              <div className="card-container flex justify-between mt-6">
                <div className="card-logo-container flex items-center">
                  <RxDot size={50} style={{ color: "#BDBDBD" }} />
                  <h1 className="text-[16px] text-[#333333]">
                    Debit/Credit Card
                  </h1>
                </div>
                <div className="card-img flex float-right gap-4">
                  <figure>
                    <img
                      className="rounded-md"
                      style={{ width: 40, height: 50 }}
                      src={VisatImg}
                      alt=""
                    />
                  </figure>
                  <figure>
                    <img
                      style={{ width: 40, height: 50 }}
                      src={MasterLogoImg}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="card-container flex justify-between mt-6">
                <div className="card-logo-container flex items-center">
                  <RxDot size={50} style={{ color: "#BDBDBD" }} />
                  <h1 className="text-[16px] text-[#333333]">Paystack</h1>
                </div>
                <div className="card-img flex float-right gap-4">
                  <figure>
                    <img
                      style={{ width: 35, height: 30 }}
                      src={PaystackImg}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="card-container flex justify-between mt-6">
                <div className="card-logo-container flex items-center">
                  <RxDot size={50} style={{ color: "#BDBDBD" }} />
                  <h1 className="text-[16px] text-[#333333]">Flutterwave</h1>
                </div>
                <div className="card-img flex float-right gap-4">
                  <figure>
                    <img
                      style={{ width: 100, height: 50 }}
                      src={FlutterwaveImg}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className=" text-center rounded-md lg:rounded-t-none p-4 flex flex-col gap-3 lg:justify-end lg:flex-row flex-1 pb-4">
              <div className="">
                <button className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#197B30] bg-[#fff] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
                  Continue to Shopping
                </button>
              </div>
              <div>
                <button className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
                  Proceed to Payments
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col">
            <OrderCart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PayOption;
