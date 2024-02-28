import React, { useEffect, useState } from "react";
import {
  decrementProductQty,
  deleteProductFromCart,
  incrementProductQty,
} from "../redux/features/product/productSlice";
import { useDispatch } from "react-redux";
import { usePopModal } from "../store/overlay";
import RatingStars from "./RatingStars";

const porkerPickupAddress =
  "No 14, Crescent by philip’s junction beside zenith bank off kudirat Lugbe way Abuja - Abuja";

const CartCard2: React.FC<{ item: any[] }> = ({ item: product }) => {
  const dispatch = useDispatch();
  const [items, setItem] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("delivery");
  const toggleModal = usePopModal((state) => state.toggleModal);
  const setLocation = usePopModal((state) => state.setLocation);

  const updatedValues = {
    option: selectedOption,
    pickupAddress: porkerPickupAddress,
  };

  console.log(product, "productproduct");

  const handleUpdateProduct = (id: string) => {
    console.log(id, "id");
    console.log("Current Items Array:", items);

    // Remove the current cart from local storage
    localStorage.removeItem("cart");

    // Update the item with the matching ID
    const updatedItems = Object.values(items)?.map((product) => {
      console.log(product._id, "product._id");
      return product._id === id ? { ...product, ...updatedValues } : product;
    });

    // Update local storage with the new items
    localStorage.setItem("cart", JSON.stringify(updatedItems));

    // Log the updated items array
    console.log("Updated Items Array:", updatedItems);
  };

  const handleRadioChange = (value: string, id: string) => {
    localStorage.removeItem("cart");
    setSelectedOption(value);
    //@ts-ignore
    console.log("Selected Option:", JSON.parse(localStorage.getItem("cart")));
    handleUpdateProduct(id);
  };
  useEffect(() => {
    if (product) {
      setItem(product);
    }
  }, [product]); // Include product in the dependency array

  return (
    <div className="space-y-8">
      {Object.values(items).map((item, idx) => (
        <div key={idx + "index"}>
          <div className="flex items-center gap-6 px-0 md:px-5">
            <div>
              <div className="flex gap-4">
                <div className="img flex flex-col">
                  <figure className="w-[150px] flex-1 bg-white">
                    <img
                      style={{ width: 150, height: 140 }}
                      src={item?.images?.[0] || ""}
                      alt=""
                      className="rounded"
                    />
                  </figure>
                </div>

                <div className="product-info hidden flex-col gap-2 md:flex">
                  <h3 className="font-bold">
                    {item?.information?.productName}
                  </h3>
                  {/* <p>Product ID: {item?._id}</p> */}
                  {/* <RatingWidget
                    onChange={(value) => console.log(value)}
                    defaultValue={2}
                  /> */}
                  <RatingStars maxRating={5} iconSize={24} canRate={false} />
                  <span>{item?.details?.productWeight} Kg</span>
                </div>
              </div>
            </div>

            <div className="right-group flex flex-col gap-4 md:flex-1 lg:ml-auto lg:mr-20 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2">
              <div className="details flex flex-col gap-2 md:flex-row-reverse md:justify-between">
                <p className="md:hidden">{item?.information?.productName}</p>
                <h3 className="font-bold">
                  ₦{item?.pricing?.productPrice?.toLocaleString()}
                </h3>
                <div className="mt-1 flex">
                  <div
                    className=" flex h-[40px] w-[46px] cursor-pointer items-center justify-center border border-[#D9D9D9]"
                    onClick={() =>
                      dispatch(decrementProductQty({ id: item?._id }))
                    }
                  >
                    <p className="flex justify-center font-semibold">-</p>
                  </div>
                  <div className=" flex h-[40px] w-[52px] items-center justify-center border-y border-[#D9D9D9] font-semibold">
                    <p className="flex justify-center">
                      {item?.pricing?.quantity}
                    </p>
                  </div>
                  <div
                    className=" flex h-[40px] w-[46px] cursor-pointer items-center justify-center border border-[#D9D9D9] font-semibold"
                    onClick={() =>
                      dispatch(incrementProductQty({ id: item?._id }))
                    }
                  >
                    <p className="flex justify-center ">+</p>
                  </div>
                </div>
              </div>

              <div className="hidden flex-col md:flex">
                <div className="flex items-center justify-between">
                  <label htmlFor=" text-[#333333] text-sm">Order Notes</label>
                  <span
                    onClick={() =>
                      dispatch(deleteProductFromCart({ id: item?._id }))
                    }
                    className="order-notes cursor-pointer text-sm  text-[#A2A2A2] underline"
                  >
                    Remove
                  </span>
                </div>
                <textarea
                  rows={4}
                  cols={50}
                  id="order-notes"
                  placeholder="Type here"
                  className=" mt-1 h-16 rounded border px-5 py-4 outline-none"
                ></textarea>
              </div>
            </div>
          </div>
          {item?.vendor?.sellerAccountInformation?.shopName ===
            "Test Shop Ltd" && (
            <div className="mt-4 mb-5 flex flex-col gap-4 p-0 md:flex-row md:px-5">
              <div className="">
                <label className="flex cursor-pointer items-center space-x-2">
                  <input
                    type="radio"
                    value="delivery"
                    checked={selectedOption === "delivery"}
                    onChange={() => handleRadioChange("delivery", item?._id)}
                    className="bg-neutral-300 checked:bg-[#FE6600] checked:hover:bg-[#FE6600] focus:ring-0 checked:focus:bg-[#FE6600]"
                  />
                  <p className="text-sm font-semibold text-[#333]">
                    Door Delivery{" "}
                    <span className="text-xs font-normal">
                      (Starting from ₦1,500)
                    </span>
                  </p>
                </label>
              </div>

              <div className="md:flex-1 lg:ml-auto lg:mr-20 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2">
                <label className="flex cursor-pointer items-center space-x-2">
                  <input
                    type="radio"
                    value="pickup"
                    checked={selectedOption === "pickup"}
                    onChange={() => handleRadioChange("pickup", item?._id)}
                    className="bg-neutral-300 checked:bg-[#FE6600] checked:hover:bg-[#FE6600] focus:ring-0 checked:focus:bg-[#FE6600]"
                  />
                  <span className="text-sm font-semibold text-[#333]">
                    Pickup
                  </span>
                </label>

                {selectedOption === "pickup" && (
                  <div className="mt-4 mb-4 flex flex-col md:hidden">
                    <div className="flex items-center justify-between">
                      <label htmlFor=" text-[#333333] font- text-sm">
                        Available Pickup Address
                      </label>
                      <span
                        onClick={() => {
                          toggleModal(true);
                          setLocation(item?.vendor?.businessInformation?.city);
                        }}
                        className="order-notes cursor-pointer text-sm  text-[#522828] underline"
                      >
                        Change pickup station
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      cols={50}
                      disabled={true}
                      value="No 14, Crescent by philip’s junction beside zenith bank off kudirat Lugbe way Abuja - Abuja"
                      id="pick_up"
                      placeholder=""
                      className="mt-1 rounded  border px-5 py-4 text-[12px] leading-[16px] outline-none"
                    ></textarea>
                  </div>
                )}

                <div className="mt-4 mb-4 hidden flex-col md:flex">
                  <div className="flex items-center justify-between">
                    <label htmlFor=" text-[#333333] font- text-sm">
                      Available Pickup Address
                    </label>
                    <span
                      onClick={() => {
                        toggleModal(true);
                        setLocation(item?.vendor?.businessInformation?.city);
                      }}
                      className="order-notes cursor-pointer text-sm  text-[#522828] underline"
                    >
                      Change pickup station
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    disabled={true}
                    cols={50}
                    id="pick_up"
                    value={porkerPickupAddress}
                    className=" mt-1 h-16 rounded border px-5 py-4 text-[12px] leading-[16px] outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CartCard2;
