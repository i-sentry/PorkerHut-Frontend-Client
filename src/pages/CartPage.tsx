import React from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";

import Footer from "../components/footer-component/Footer";

const CartPage = () => {
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
                    link: "/cart",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" p-8 text-2xl font-semibold text-[#333333]">
            Cart(2)
          </h1>
          <div className=" flex justify-between">
            <h1 className=" p-8 text-base font-semibold text-[#333333]">
              Subtotal
            </h1>
            <h1 className="items-end p-8 text-base font-semibold text-[#333333]">
              ₦30,000.00
            </h1>
          </div>
            <div className=" p-5 md:hidden">
            <button className=" border border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] w-full rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center">
              Checkout(₦30,000.00)
            </button>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
