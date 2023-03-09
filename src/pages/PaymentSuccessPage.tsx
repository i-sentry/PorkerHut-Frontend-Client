import React from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import CancelImg from "../assets/images/CancelImg.png"
import Footer from "../components/footer-component/Footer";

const PaymentSuccessPage = () => {
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

          <div className=" max-w-[1568px] md:max-w-[1568px] bg-white border h-[500px] md:h-[561px] mx-8 mb-20 rounded-lg">
            <div className=" flex flex-col items-center text-center mt-24 md:mt-32">
              <div className=" ">
              <img src={CancelImg} alt="" className="w-24 h-24"  />
              </div>
              <h1 className=" pt-4 text-[18px] md:text-base leading-7 text-[#333333] font-medium mb-8">
                Payment Successful
              </h1>
              <p className=" text-xs md:text-sm text-[#333333]">
                Your Order ID #101101 has been placed
              </p>
              <p className=" text-xs md:text-xs px-4 mb-4 text-[#333333]">
                We sent an email to williamsnado@gmail.com with your order
                confirmation and bill.
              </p>

              <button className=" border border-[#479559] md:text-[14px] text-[8px] md:py-3 md:px-10 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PaymentSuccessPage;
