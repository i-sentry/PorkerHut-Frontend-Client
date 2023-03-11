import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import OrderCart from "../components/order-component/OrderCart";

const BillingPage = () => {
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
        <div className="p-8 md:hidden">
          <div className=" h-[520px] w-[430px] bg-white rounded-md">
            <h1 className="p-4 text-lg font-semibold text-[#333333] ">
              Personal Information
            </h1>
            <div className=" ml-4">
              <label className=" text-[#333333] text-[14px] my-2" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your First Name"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <label className="text-[#333333] text-[14px] my-2" htmlFor="">Last Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Last Name"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Email Address</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Phone Number</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="+234-816-222-5554"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
          </div>
        </div>
        <div className="p-8 md:hidden">
          <div className=" h-[430px] w-[430px] bg-white rounded-md">
            <h1 className="p-4 text-lg font-semibold text-[#333333] mt-6">
              Delivery Address
            </h1>
            <div className=" ml-4">
              <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Address</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Delivery Address"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
            <label className=" text-[#333333] text-[14px] my-2" htmlFor="">State</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your State"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
            <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Enter Your City/Town/Street</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your City/Town/Street"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
          </div>
        </div>
        <div className=" text-center md:hidden">
          <div>
            <button className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap">
              Proceed to Payments
            </button>
          </div>
          <div className=" mb-16">
            <button className=" border border-[#479559] md:text-[14px] text-[16px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#197B30] bg-[#fff] md:inline-block select-none tracking-wider font-medium whitespace-nowrap mt-4">
              Continue to Shopping
            </button>
          </div>
        </div>
        <div className=" p-8 flex gap-10">
          <div className="w-[1050px] h-[730px]  bg-white rounded-md">
            <h1 className=" p-6 text-[20px] text-[#333333] font-semibold">
              Billing Information
            </h1>
            <div className="ml-4 flex gap-10">
              <div>
              <label className=" text-[#333333] text-[14px] my-2" htmlFor="">First Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your First Name"
                  className=" w-[480px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
                />
              </div>

              <div className="">
              <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Last Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Last Name"
                  className=" w-[480px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
                />
              </div>
            </div>
            <div className=" ml-4 input my-6">
            <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Email Address</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your First Email Address"
                className=" w-[1000px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 input">
            <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Phone Number</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="+234-555-666-6669"
                className=" w-[1000px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 input my-6">
            <label className=" text-[#333333] text-[14px] my-2" htmlFor="">Email Address</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Delivery Address"
                className=" w-[1000px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 input">
              <h1 className=" text-[#333333] text-[14px] my-2">State</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter State"
                className=" w-[1000px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 input my-6">
              <h1 className=" text-[#333333] text-[14px] my-2">
                City/Town/State
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter City/Town/Street"
                className=" w-[1000px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
          </div>
          
            <OrderCart />
          
          {/* <p className=" text-sm text-[#797979] mt-2">
            Our shipping fees are flat rates. Regardless of the size and amount
            of items ordered, only one shipping fee applies.
          </p> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BillingPage;
