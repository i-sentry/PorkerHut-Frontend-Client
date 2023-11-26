import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../redux/features/product/productSlice";
import { RootState } from "../../redux/store";
import { useCartTotalAmount } from "../../store";
import { useCreateOrder } from "../../services/hooks/orders";

export type IUser = {
  accessToken: string;
  billingInfo: string[];
  createdAt: string;
  email: string;
  firstName: string;
  isAdmin: boolean;
  lastName: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

const OrderCart = ({
  temp,
  billingId,
  user,
  setTemp,
  setLoading,
}: {
  temp: boolean;
  billingId: string;
  user: IUser;
  setTemp: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const setCartTotal = useCartTotalAmount((state) => state.setCartTotal);
  const createOrder = useCreateOrder();
  const cart = useSelector((state: RootState) => state.product.cart);
  const dFee = 700;
  const cartTotal = Object.values(cart).reduce((acc, current) => {
    return (
      acc + current.pricing.productPrice * (current.pricing.quantity as number)
    );
  }, 0);
  const vat = cartTotal + (cartTotal / 100) * 7.5;
  const sumTotal = cartTotal + vat + dFee;
console.log(cart, "cart");
  const newArray = Object.values(cart).map((item: any) => ({
    productID: item?._id,
    quantity: item?.pricing?.quantity,
    price: item?.pricing?.productPrice,
    totalPrice: item?.pricing?.productPrice,
    vendor: item?.vendor?._id,
    deliveryOption: item?.option ?? "delivery",
    pickupAddress: item?.pickupAddress,
  }));

  useEffect(() => {
    setCartTotal(sumTotal);
  }, [cartTotal, setCartTotal, sumTotal]);

  const initiateCreateProduct = () => {
    createOrder
      .mutateAsync({
        customer: user?._id,
        productDetails: newArray,
        subtotal: cartTotal,
        deliveryFee: dFee,
        tax: vat,
        totalAmount: sumTotal,
        billingInformation: billingId,

      })
      .then((res) => {
        console.log(res, "order res");
        console.log(res.order._id, "order id");
            setLoading(false)
      })
      .catch((err)=>{
    setLoading(false);
      });
  };

  if (temp === true) {
    initiateCreateProduct();
    setTemp(false);
  }

  return (
    <div className=" w-full lg:w-auto bg-white rounded-lg self-start  lg:top-[100px]">
      <div className="px-4 py-6">
        <h1 className="text-[24px] leading-[28px] text-[#333333] font-semibold">
          Orders
        </h1>
      </div>

      <div className="overflow-y-auto max-h-[440px] ">
        {Object.values(cart).map((item, idx) => (
          <div key={idx}>
            <OrderCard item={item} />
          </div>
        ))}
      </div>

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
            ₦{sumTotal?.toLocaleString()}
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
          src={item.images[0] || ""}
          alt={item?.information.productName}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex flex-col">
        <h1 className="text-[16px] leading-[24px] text-[#333333] font-medium w-40">
          {item?.information.productName}
        </h1>
        <h1 className=" text-[#797979] text-[16px] leading-[24px]  font-medium  mt-4">
          {item.details.productWeight} x {item.pricing.quantity}
        </h1>
      </div>

      <h1 className=" text-[16px] leading-[24px] text-[#333333] font-medium self-end md:self-start ml-auto">
        ₦{item.pricing.productPrice}
      </h1>
    </div>
  );
};

export default OrderCart;
