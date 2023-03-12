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
    <div className="min-w-[400px] w-full lg:w-auto bg-white rounded-lg self-start lg:sticky lg:top-[100px]">
      <div className="p-4 pb-0">
        <h1 className="text-[20px] text-[#333333] font-semibold">Orders</h1>
      </div>

      {Object.values(cart).map((item, idx) => <OrderCard item={item} key={idx} />)}

      <div className="py-2">
        <div className="flex justify-between px-4 py-2 font-medium">
          <span>Subtotal</span>
          <span>₦{cartTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between px-4 py-2 font-medium">
          <span>VAT</span>
          <span>₦{vat.toLocaleString()}</span>
        </div>
        <div className="flex justify-between px-4 py-2 font-medium border-b border-[#D9D9D9]">
          <span>Delivery.</span>
          <span>₦{dFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between px-4 py-2 font-medium">
          <span>Total</span>
          <span>₦{(cartTotal + vat + dFee)?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

const OrderCard = ({ item }: { item: IProduct }) => {
  return (
    <div className=" flex gap-4 px-4 py-6 border-b">
      <figure className="w-[102px] overflow-hidden rounded">
        <img src={item.img} alt="" className="w-full" />
      </figure>

      <div className="flex flex-col">
        <h1 className="text-[16px] font-semibold text-[#333333] w-40">
          {item.product?.name}
        </h1>
        <h1 className=" text-[#797979] text-base">{item.product?.weight} x{item.quantity}</h1>
      </div>

      <h1 className=" self-end md:self-start ml-auto">₦{item.price}</h1>
    </div>
  );
};

export default OrderCart;
