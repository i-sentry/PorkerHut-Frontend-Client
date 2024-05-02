import React from "react";
import Stepper from "../stepper/Stepper";
import { BsX } from "react-icons/bs";

const OrderModal = ({ visible, onClose, order }: any) => {
  console.log(order, "stepper order");

  const handleOnClose = (e: any) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-30 "
    >
      <div className="h-auto w-[300px] bg-[#EEEEEE] p-6 py-8 sm:w-[450px] lg:w-[500px]">
        <div className="flex items-center justify-between px-4">
          <div>
            <h3 className="block text-2xl font-medium ">Tracking Details</h3>
            <p className="text-sm text-[#797979]">Track your order here.</p>
          </div>
          <button onClick={onClose}>
            <BsX size={32} />
          </button>
        </div>
        <div className="">
          <Stepper order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
