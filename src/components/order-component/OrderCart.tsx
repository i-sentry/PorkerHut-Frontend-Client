import React from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../redux/features/product/productSlice";
import { RootState } from "../../redux/store";

const OrderCart = () => {
  const cart = useSelector((state: RootState) => state.product.cart)
  const dFee = 700
  const cartTotal = Object.values(cart).reduce((acc, current) => {
    return acc + (parseFloat(current.price) * (current.quantity as number))
  }, 0)
  const vat = cartTotal + (cartTotal / 100 * 7.5)

  return (
    <div className=" w-full lg:w-auto bg-white rounded-lg self-start lg:stacic lg:top-[100px]">
      <div className="px-4 py-6">
        <h1 className="text-[24px] leading-[28px] text-[#333333] font-semibold">Orders</h1>
      </div>

      {Object.values(cart).map((item, idx) => (
        <OrderCard item={item} key={idx} />
      ))}

      <div className="">
        <div className="py-4">
          <div className="flex justify-between px-4 py-2 font-medium w-full mb-3">
            <span className="text-[20px] self-center leading-[23px] font-medium text-[#333333]">
              Subtotal
            </span>
            <span className="text-[20px] leading-[23px] font-medium text-[#333333]">
              ₦{cartTotal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between px-4 py-2 font-medium mb-3">
            <span className="text-[20px] leading-[23px] font-medium text-[#333333]">
              VAT
            </span>
            <span className="text-[20px] leading-[23px] font-medium text-[#333333]">
              ₦{vat.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between px-4 py-2 font-medium ">
            <span className="text-[20px] leading-[23px] font-medium text-[#333333]">
              Delivery.
            </span>
            <span className="text-[20px] leading-[23px] font-medium text-[#333333]">
              ₦{dFee.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-between py-5 px-4 font-medium border-t border-[#D9D9D9]">
          <span className="text-[20px] leading-[23px] font-medium text-[#333333]">
            Total
          </span>
          <span className="text-[20px] leading-[23px] font-medium text-[#333333]">
            ₦{(cartTotal + vat + dFee)?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

const OrderCard = ({ item }: { item: IProduct }) => {
  return (
    <div className=" flex gap-4 px-4 py-6 border-b">
      <figure className="h-[86px] w-[102px] overflow-hidden rounded">
        <img
          src={item.img}
          alt={item?.product?.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex flex-col">
        <h1 className="text-[16px] leading-[24px] text-[#333333] font-medium w-40">
          {item.product?.name}
        </h1>
        <h1 className=" text-[#797979] text-[16px] leading-[24px]  font-medium  mt-4">
          {item.product?.weight} x{item.quantity}
        </h1>
      </div>

      <h1 className=" text-[16px] leading-[24px] text-[#333333] font-medium self-end md:self-start ml-auto">
        ₦{item.price}
      </h1>
    </div>
  );
};

export default OrderCart;
