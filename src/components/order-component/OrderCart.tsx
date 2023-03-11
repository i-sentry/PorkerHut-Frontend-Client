import React from "react";
import RawPorkImg from "../../assets/images/RawPorkImg.png";

const OrderCart = () => {
  return (
    <div className="w-[400px] bg-white rounded-lg self-start">
      <div className="p-4 pb-0">
        <h1 className="text-[20px] text-[#333333] font-semibold">Orders</h1>
      </div>

      <OrderCard />
      <OrderCard />
      <OrderCard />

      <div className="py-2">
        <div className="flex justify-between px-4 py-2 font-medium">
          <span>Subtotal</span>
          <span>₦6,000</span>
        </div>
        <div className="flex justify-between px-4 py-2 font-medium">
          <span>VAT</span>
          <span>₦1,000</span>
        </div>
        <div className="flex justify-between px-4 py-2 font-medium border-b border-[#D9D9D9]">
          <span>Delivery.</span>
          <span>₦1,000</span>
        </div>
        <div className="flex justify-between px-4 py-2 font-medium">
          <span>Total</span>
          <span>₦8,000</span>
        </div>
      </div>
    </div>
  );
};

const OrderCard = ({ item }: any) => {
  return (
    <div className=" flex gap-4 px-4 py-6 border-b">
      <figure className="w-[102px] overflow-hidden rounded">
        <img src={RawPorkImg} alt="" className="w-full" />
      </figure>

      <div className="flex flex-col">
        <h1 className="text-[16px] font-semibold text-[#333333] w-40">
          100% Healthy Feed pork Lap
        </h1>
        <h1 className=" text-[#797979] text-base">3kg x2</h1>
      </div>

      <h1 className=" self-end md:self-start">₦3,000</h1>
    </div>
  );
};

export default OrderCart;
