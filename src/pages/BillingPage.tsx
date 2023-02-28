import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import RawPorkImg from "../../src/assets/images/RawPorkImg.png";

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
              <h1 className=" text-[#333333] text-[14px] my-2">First Name</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your First Name"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <h1 className=" text-[#333333] text-[14px] my-2">Last Name</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Last Name"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <h1 className=" text-[#333333] text-[14px] my-2">Email Adress</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <h1 className=" text-[#333333] text-[14px] my-2">Phone Number</h1>
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
              <h1 className=" text-[#333333] text-[14px] my-2">Address</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Delivery Address"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <h1 className=" text-[#333333] text-[14px] my-2">State</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your State"
                className=" w-96 h-16 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 my-4">
              <h1 className=" text-[#333333] text-[14px] my-2">
                City/Town/Street
              </h1>
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
                <h1 className=" text-[#333333] text-[14px] my-2">First Name</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your First Name"
                  className=" w-[480px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
                />
              </div>

              <div className="">
                <h1 className=" text-[#333333] text-[14px] my-2">Last Name</h1>
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
              <h1 className=" text-[#333333] text-[14px] my-2">
                Email Address
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your First Email Address"
                className=" w-[1000px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 input">
              <h1 className=" text-[#333333] text-[14px] my-2">Phone Number</h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="+234-555-666-6669"
                className=" w-[1000px] h-12 border border-[#D9D9D9] rounded-md text-[#A2A2A2] pl-5"
              />
            </div>
            <div className=" ml-4 input my-6">
              <h1 className=" text-[#333333] text-[14px] my-2">Address</h1>
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
          <div className=" ">
            <div className="w-[452px] h-[564px]  bg-white rounded-md">
              <div>
                <h1 className=" p-6 text-[20px] text-[#333333] font-semibold">
                  Orders
                </h1>
                <div className=" flex gap-4 border-b-2 border-[#D9D9D9]">
                  <div>
                    <figure className=" ml-6">
                      <img src={RawPorkImg} alt="" />
                    </figure>
                  </div>
                  <div>
                    <h1 className=" mt-2 text-[16px] font-semibold text-[#333333]">
                      100% Healthy Feed
                    </h1>
                    <h1 className="my-3 text-base font-semibold text-[#333333]">
                      Pork Lap
                    </h1>
                    <h1 className=" text-[#797979] text-base">3kg x2</h1>
                  </div>
                  <div className=" ml-16 mt-2">
                    <h1>₦3,000</h1>
                  </div>
                </div>
                <div className=" flex gap-4 border-b-2 border-[#D9D9D9] mt-4 ">
                  <div>
                    <figure className=" ml-6">
                      <img src={RawPorkImg} alt="" />
                    </figure>
                  </div>
                  <div>
                    <h1 className=" mt-2 text-[16px] font-semibold text-[#333333]">
                      100% Healthy Feed
                    </h1>
                    <h1 className="my-3 text-base font-semibold text-[#333333]">
                      Pork Lap
                    </h1>
                    <h1 className=" text-[#797979] text-base">3kg x2</h1>
                  </div>
                  <div className=" ml-16 mt-2">
                    <h1>₦3,000</h1>
                  </div>
                </div>
                <div className=" ml-[165px] flex gap-40 mt-3">
                  <span>Subtotal</span>
                  <span>₦6,000</span>
                </div>
                <div className="ml-[165px] flex gap-40">
                  <span>VAT........</span>
                  <span>₦1,000</span>
                </div>
                <div className=" ml-[165px] flex gap-40 border-b-2 border-[#D9D9D9]">
                  <span>Delivery.</span>
                  <span>₦1,000</span>
                </div>
                <div className=" ml-[165px] flex gap-40 mt-4">
                  <span>Total.....</span>
                  <span>₦8,000</span>
                </div>
              </div>
            </div>
            <p className=" text-sm text-[#797979] mt-2">
              Our shipping fees are flat rates. Regardless of the size and amount
              of items ordered, only one shipping fee applies.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BillingPage;
