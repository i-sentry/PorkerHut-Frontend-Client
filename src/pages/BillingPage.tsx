import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import OrderCart from "../components/order-component/OrderCart";
import { useNavigate } from "react-router-dom";

const BillingPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <>
      <div className="  bg-[#F5F5F5] min-h-screen">
        <nav className="mb-20">
          <NavBar />
        </nav>

        <div className=" bg-[#F5F5F5]">
          <div className="">
            <div className="mx-12 py-6" >
              <ProductsBreadCrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "Cart",
                    link: "/my-cart",
                  },
                  {
                    name: "Checkout",
                    link: "/billing",
                  },
                ]}
              />
            </div>
          </div>
        </div>
       
        <div className="flex gap-8 mx-12 pb-10 relative">
          <div className=" w-2/3 bg-white px-6 flex flex-col gap-4 py-6 rounded-lg">
            <h1 className=" text-[20px] text-[#333333] font-semibold">
              Billing Information
            </h1>
            <div className="flex gap-6">
              <div className=" w-full">
                <label
                  className=" text-[#333333] text-[14px] block"
                  htmlFor=""
                >
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your First Name"
                  className=" h-12 w-full border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
                />
              </div>

              <div className="w-full">
                <label
                  className=" text-[#333333] text-[14px]  block"
                  htmlFor=""
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Last Name"
                  className=" h-12 w-full border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
                />
              </div>
            </div>
            <div className=" input ">
              <label className=" text-[#333333] text-[14px] mb-1" htmlFor="">
                Email Address
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your First Email Address"
                className=" w-full h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" input">
              <label className=" text-[#333333] text-[14px] mb-1" htmlFor="">
                Phone Number
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="+234-555-666-6669"
                className=" w-full h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>

            <h1 className=" text-[20px] text-[#333333] font-semibold lg:hidden">
              Delivery Information
            </h1>
            <div className="">
              <label className=" text-[#333333] text-[14px] mb-1" htmlFor="">
                Address
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Delivery Address"
                className=" w-full h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" input">
              <h1 className=" text-[#333333] text-[14px] mb-1">State</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter State"
                className=" w-full h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ">
              <h1 className=" text-[#333333] text-[14px] mb-1">City/Town/Street</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter City/Town/Street"
                className=" w-full h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>

            <div className=" text-center lg:bg-white rounded-md lg:rounded-t-none p-4 flex flex-col gap-3 lg:justify-end lg:flex-row flex-1 pb-4">
              <div className="">
                <button className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#197B30] bg-[#fff] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
                  Continue to Shopping
                </button>
              </div>
              <div>
                <button
                  className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap"
                  onClick={() => navigate("/pay-card")}
                >
                  Proceed to Payments
                </button>
              </div>
            </div>
          </div>
          <div className=" w-1/3 static h-full top-28 overscroll-y-auto">
            <OrderCart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BillingPage;
