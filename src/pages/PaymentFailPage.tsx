import React from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import { MdCancel } from "react-icons/md";
import Footer from "../components/footer-component/Footer";

const PaymentFailPage = () => {
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
              <div className=" opacity-[0.5] ">
                <MdCancel
                  size={100}
                  className="icon"
                  style={{
                    
                    color:"red"
                  }}
                  
                />
              </div>
              <h1 className=" pt-4 text-[18px] md:text-base leading-7 text-[#333333] font-medium mb-8">
                Payment Failed
              </h1>
              <p className=" text-xs md:text-sm text-[#333333]">
                Something went terribly wrong
              </p>
              <p className=" text-xs md:text-xs px-4 mb-4 text-[#333333]">
                Kindly enter your details and try again
              </p>


              <button className=" border border-[#479559] md:text-[14px] text-[8px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#F91919] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
                Try Again
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>

    </>
  )
}

export default PaymentFailPage