import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../../redux/features/product/productSlice";
import { RootState } from "../../redux/store";
import { useCartTotalAmount } from "../../store";
import { useCreateOrder } from "../../services/hooks/orders";
import { useMakePayment } from "../../services/hooks/payment";

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
  const makePayment = useMakePayment();

  const cart = useSelector((state: RootState) => state.product.cart);
  // const dFee = 700;
  const cartTotal = Object.values(cart).reduce((acc, current) => {
    return (
      acc +
      current?.pricing?.productPrice * (current?.pricing?.quantity as number)
    );
  }, 0);

  // DELIEVRY FEE CALCULATION
  const dFee =
    Object.values(cart).reduce(
      (acc: any, item: any) =>
        acc +
        Math.round(
          (item?.pricing?.productPrice *
            (item?.information?.category?.deliveryFeeRate / 100)) /
            100,
        ) *
          100,
      0,
    ) || 700;
  console.log(cart, dFee);

  const vat = cartTotal + (cartTotal / 100) * 7.5;
  const sumTotal = cartTotal + dFee;
  // const sumTotal = cartTotal;
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
        localStorage.setItem("order_id", JSON.stringify(res.order._id));
        if (res.order) {
          initiatePayment(res.order._id);
        }
        // setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const initiatePayment = (id: string) => {
    makePayment
      .mutateAsync({
        email: user?.email,
        amount: sumTotal,
        full_name: `${user?.firstName} ${user?.lastName}`,
        order_id: id,
        //subject to change to ngn
        currency: "NGN",
      })
      // .mutateAsync({ email: user?.email, amount: sumTotal })
      .then((res) => {
        const authorizationUrl = res.data?.data.data.authorization_url;
        if (authorizationUrl) {
          window.open(authorizationUrl, "_blank");
        } else {
          console.error("Authorization URL not found in the response");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error during payment:", err);
      });
  };

  if (temp === true) {
    initiateCreateProduct();
    setTemp(false);
  }

  return (
    <>
      <div className=" w-full self-start rounded-lg bg-white lg:top-[100px]  lg:w-auto">
        <div className="px-4 py-6">
          <h1 className="text-[24px] font-semibold leading-[28px] text-[#333333]">
            Orders
          </h1>
        </div>

        <div className="max-h-[440px] overflow-y-auto ">
          {Object.values(cart).map((item, idx) => (
            <div key={idx}>
              <OrderCard item={item} />
            </div>
          ))}
        </div>

        <div className="">
          <div className="py-4">
            <div className="mb-3 flex w-full justify-between px-4 py-2 font-medium">
              <span className="self-center text-[20px] font-medium leading-[23px] text-[#333333]">
                Subtotal
              </span>
              <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
                ₦{cartTotal.toLocaleString()}
              </span>
            </div>
            {/* <div className="mb-3 flex justify-between px-4 py-2 font-medium">
            <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
              VAT
            </span>
            <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
              ₦{vat.toLocaleString()}
            </span>
          </div> */}
            <div className="flex justify-between px-4 py-2 font-medium ">
              <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
                Delivery.
              </span>
              <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
                ₦{dFee.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex justify-between border-t border-[#D9D9D9] py-5 px-4 font-medium">
            <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
              Total
            </span>
            <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
              ₦{sumTotal?.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 px-4 font-medium text-[#727272]">
        <span className="text-red-600">Note:</span> Our shipping fee vary by
        weight and location. Fee are subject to change.
      </p>
    </>
  );
};

const OrderCard = ({ item }: { item: IProduct }) => {
  return (
    <div className="flex justify-start gap-4 border-b px-4 py-6">
      <figure className="h-[86px] w-[102px] overflow-hidden rounded">
        <img
          src={item?.images?.[0] || ""}
          alt={item?.information?.productName}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="flex flex-col">
        <h1 className="w-40 text-[16px] font-medium leading-[24px] text-[#333333]">
          {item?.information?.productName}
        </h1>
        <p className=" mt-1 text-[16px] font-medium  leading-[24px]  text-[#797979]">
          {item?.details?.productWeight} x {item?.pricing?.quantity}
        </p>
        <span className=" mt-2 text-[16px] font-medium leading-[24px] text-[#333333]">
          ₦{item?.pricing?.productPrice}
        </span>
      </div>
    </div>
  );
};

export default OrderCart;
