import React, { useState } from "react";
import {
  decrementProductQty,
  deleteProductFromCart,
  incrementProductQty,
  IProduct,
} from "../redux/features/product/productSlice";
import { useDispatch } from "react-redux";
import RatingWidget from "./RatingWidget";
import { usePopModal } from "../store/overlay";

const CartCard2: React.FC<{ item: IProduct }> = ({ item }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState<string>("delivery");
  const toggleModal = usePopModal((state) => state.toggleModal);
  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };
  return (
    <>
      <div className="flex items-center px-5 gap-6">
        <div>
          <div className="flex items-center gap-4">
            <div className="img flex flex-col">
              <figure className="bg-white w-[150px] flex-1">
                <img
                  style={{ width: 150, height: 140 }}
                  src={item.images[0] || ""}
                  alt=""
                  className="rounded"
                />
              </figure>
            </div>

            <div className="product-info hidden md:flex flex-col gap-2">
              <h3 className="font-bold">{item.information.productName}</h3>
              <p>Product ID: {item._id}</p>
              <RatingWidget
                onChange={(value) => console.log(value)}
                defaultValue={2}
              />
              <span>{item.details.productWeight} Kg</span>
            </div>
          </div>
        </div>

        <div className="right-group flex flex-col gap-4 md:flex-1 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/2 lg:ml-auto lg:mr-20">
          <div className="details flex flex-col gap-2 md:flex-row-reverse md:justify-between">
            <p className="md:hidden">{item.information.productName}</p>
            <h3 className="font-bold">
              ₦{item.pricing.productPrice?.toLocaleString()}
            </h3>
            <div className="flex mt-1">
              <div
                className=" h-[40px] w-[46px] flex items-center justify-center border border-[#D9D9D9] cursor-pointer"
                onClick={() => dispatch(decrementProductQty({ id: item._id }))}
              >
                <p className="flex justify-center font-semibold">-</p>
              </div>
              <div className=" h-[40px] w-[52px] flex items-center justify-center border-y border-[#D9D9D9] font-semibold">
                <p className="flex justify-center">{item?.pricing.quantity}</p>
              </div>
              <div
                className=" h-[40px] w-[46px] flex items-center justify-center border border-[#D9D9D9] font-semibold cursor-pointer"
                onClick={() => dispatch(incrementProductQty({ id: item._id }))}
              >
                <p className="flex justify-center ">+</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor=" text-[#333333] text-sm">Order Notes</label>
              <span
                onClick={() =>
                  dispatch(deleteProductFromCart({ id: item._id }))
                }
                className="order-notes text-[#A2A2A2] text-sm  underline cursor-pointer"
              >
                Remove
              </span>
            </div>
            <textarea
              rows={4}
              cols={50}
              id="order-notes"
              placeholder="Type here"
              className=" h-16 outline-none border rounded px-5 py-4 mt-1"
            ></textarea>
          </div>
        </div>
      </div>
      <div className=" flex  mt-4 px-5">
        <div className="">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="delivery"
              checked={selectedOption === "delivery"}
              onChange={() => handleRadioChange("delivery")}
              className="h-5 w-5 "
            />
            <p className="text-sm text-[#333] font-semibold">
              Door Delivery{" "}
              <span className="text-xs font-normal">
                (Starting from ₦1,500)
              </span>
            </p>
          </label>
        </div>
        <div className="md:flex-1 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/2 lg:ml-auto lg:mr-20">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="pickup"
              checked={selectedOption === "pickup"}
              onChange={() => handleRadioChange("pickup")}
              className="h-5 w-5 "
            />
            <span className="text-sm text-[#333] font-semibold">Pickup</span>
          </label>

          <div className="mt-4 hidden md:flex flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor=" text-[#333333] font- text-sm">
                Pickup Address
              </label>
              <span
                onClick={() => toggleModal(true)}
                className="order-notes text-[#A2A2A2] text-sm  underline cursor-pointer"
              >
                Change pickup station
              </span>
            </div>
            <textarea
              rows={4}
              cols={50}
              id="pick_up"
              placeholder="Type here"
              className=" h-16 outline-none border rounded px-5 py-4 mt-1"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard2;
