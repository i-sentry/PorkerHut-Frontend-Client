import React from "react";
import Stepper from "../stepper/Stepper";

const OrderModal = ({ visible, onClose }: any) => {
  const handleOnClose = (e: any) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed top-8 right-8 bg-black bg-opacity-30 "
    >
      <div className="bg-[#EEEEEE] w-72 h-full">
        <div className="flex items-center justify-between px-4 pt-4">
          <span className="block text-sm font-medium">Tracking Details</span>
          <button onClick={onClose}>x</button>
        </div>
        <div className="px-4">
          <span className="text-xs text-[#797979]">Track your order here.</span>
        </div>
        <div>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
