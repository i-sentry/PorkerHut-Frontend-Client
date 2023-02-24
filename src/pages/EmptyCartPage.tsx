import React from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import { BsCart3 } from "react-icons/bs";


import Footer from "../components/footer-component/Footer";

const EmptyCartPage = () => {
  return (
    <>
      <div className="  bg-[#F5F5F5]">
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
                    link: "/blog",
                  },
                ]}
              />
            </div>
          </div>

          <div className=" max-w-[1568px] md:max-w-[1568px] bg-white border h-[500px] md:h-[739px] mx-8 mb-20 rounded-lg">
            <h1 className=" p-8 text-2xl font-semibold text-[#333333]">Cart</h1>
            <div className=" flex flex-col items-center text-center mt-24 md:mt-56 relative">
              <h1 className=" text-[32px] leading-9 text-[#333333] font-medium mb-8">Your Cart is Empty</h1>
              <div className=" opacity-[0.1] absolute  top-[-38px] ">
              <BsCart3 size={100} />   
              </div>
              <button className=" border border-[#479559] md:text-[14px] text-[8px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
                Start Shopping
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EmptyCartPage;
