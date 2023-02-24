import React, { useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlinePersonPinCircle, MdOutlineStorefront, MdPersonOutline } from "react-icons/md";
import productImg from "../../assets/images/productimg1.png";
import OrderModal from "../../components/modal-component/OrderModal";

const MyOrderDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnclose = () => setShowModal(false);
  return (
    <>
    <div className="m-auto mt-10">
      <div className="flex items-center flex-col justify-center mb-10">
        <h2 className="text-2xl font-medium">My Orders</h2>

        <div className="h-1 w-16 bg-[#197B30] mt-1"></div>
      </div>
      <div className="flex gap-6 px-20">
        <div
          className="w-1/4 h-40 rounded-lg"
          style={{
            backgroundImage: `url('${productImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-1/2 bg-[#D9D9D9]  rounded-lg pl-4 pr-8 pt-4">
          <div className="flex flex-col gap-[48px]">
            <div className="">
              <div className="flex gap-2">
                <MdPersonOutline size={20} />
                <span className=" text-sm">William Nado</span>
              </div>
              <span className="text-xs">
                <span className="text-[#A2A2A2] text-xs pr-2">Order Date:</span>
                15 January 2022
              </span>
            </div>

            <div className="flex justify-between">
              <div className="">
                <span className="text-[#A2A2A2] text-xs pr-2 block">Phone</span>
                <span className="text-xs">+234 7045678989</span>
              </div>
              <div className="">
                <span className="text-xs">
                  <span className="text-[#A2A2A2] text-xs pr-2 block">
                    Email
                  </span>
                  williamsNad0123@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-40 bg-[#D9D9D9] rounded-lg flex flex-col gap-[54px]">
          <div className="flex items-center justify-between pt-4 px-4">
            <div className="flex gap-2">
              <MdOutlinePersonPinCircle size={20} />
            </div>
            <button className="underline text-sm" onClick={() => setShowModal(true)}>Track Order</button>
          </div>
          <div className="flex justify-between px-4">
            <div className="leading-tight">
              <span className="text-[#A2A2A2] text-xs pr-2 block">
                Billing Address
              </span>
              <span className="text-xs">
                No. 1 Victoria island, off Lekki, <br /> Lagos State.
              </span>
            </div>
            <div className="">
              <div className="leading-tight">
                <span className="text-[#A2A2A2] text-xs pr-2 block">
                  Home Address
                </span>
                <span className="text-xs">
                  No. 1 Victoria island, off Lekki, <br /> Lagos State.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  mt-8 px-20 gap-6">
        <div className="w-1/2 bg-[#D9D9D9] h-40 rounded-lg flex flex-col gap-[72px]">
          <div className="flex justify-between items-center pt-4 px-4">
            <MdOutlineStorefront size={20} />
            <span className="text-sm">Abuja</span>
          </div>
          <div className="flex items-center justify-between pl-4 pr-8">
            <div>
              <span className="text-[#A2A2A2] text-xs block">Store Name</span>
              <span className="text-xs">PorkerHut</span>
            </div>
            <div>
              <span className="text-[#A2A2A2] text-xs block">Order ID</span>
              <span className="text-xs">10101</span>
            </div>
            <div>
              <span className="text-[#A2A2A2] text-xs block">Product Name</span>
              <span className="text-xs">100% Healthy-Fed Pork Lap </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#D9D9D9] h-40 rounded-lg">
          <div className=" flex flex-col gap-[70px]">
            <div className="flex justify-between items-center pt-4 px-4">
              <IoBasketOutline size={20} />
              <span className="text-sm">Completed</span>
            </div>
            <div className="flex items-center justify-between pl-4 pr-8">
              <div>
                <span className="text-[#A2A2A2] text-xs block">Price</span>
                <span className="text-xs">10000</span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-xs block">Quantity</span>
                <span className="text-xs">3</span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-xs block">Order Total</span>
                <span className="text-xs">30000</span>
              </div>
              <div>
                <button className="text-xs underline">Return Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <OrderModal onClose={handleOnclose} visible={showModal}  />
    </>
  );
};

export default MyOrderDetails;
