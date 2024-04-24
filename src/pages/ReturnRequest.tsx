import React, { useEffect, useMemo, useState } from "react";
import AppLayout from "../components/utility/AppLayout";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { OrderData } from "./MyOrder";
import { IOrderData } from "../components/vendors-component/MyOrderSection";
import { useGetOrdersById } from "../services/hooks/orders";

const ReturnRequest = () => {
  const { id, productId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetOrdersById(id as string);
  const order = useMemo(() => data?.data?.order, [id]);
  const selectedProduct = order?.productDetails?.find(
    (item: any) => item?.productID?._id === productId,
  );

  console.log(selectedProduct, "request return");

  const [item, setOrder] = useState<IOrderData>({
    id: "",
    img: "",
    location: "",
    time: "",
    product_name: "",
    store_name: "",
    order_date: "",
    order_id: "",
    price: "",
    quantity: "",
    order_total: "",
    order_status: "",
  });

  useEffect(() => {
    const filteredOrder = OrderData.find((ord: IOrderData) => ord.id === id);
    //@ts-ignore
    setOrder(filteredOrder);
  }, [id]);
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [...selectedProduct?.productID?.images];
  console.log(selectedProduct, "request return", images);

  return (
    <AppLayout>
      <div className="mt-16 pb-10 md:mt-[90px]">
        <div className="mb-5 flex flex-col items-center gap-1 text-center">
          <h2 className="text-2xl font-bold">Return Request</h2>
          <div className="h-1 w-[100px] bg-green-700"></div>
        </div>

        <div className="bg-white xxs:px-4 md:flex md:gap-4 md:rounded-sm">
          <div className="flex xxs:flex-col-reverse md:flex-1 md:flex-row md:gap-2">
            <div className="flex-[1] xxs:mt-3 xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 md:mt-0 md:block">
              {images?.map((img: any, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index}`}
                  onClick={() => setSelectedImg(index)}
                  className="h-20 w-[75px] cursor-pointer rounded-md object-cover md:mb-3"
                />
              ))}
            </div>
            <div className="md:flex-[5]">
              <img
                src={images[selectedImg]}
                alt="img4"
                className=" w-full rounded-md object-cover  xxs:h-[300px] md:h-[400px]"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">
                {selectedProduct?.productID?.information?.productName}
              </h3>
              <span className="text-xl font-medium text-[#000000]">
                ₦
                {selectedProduct?.productID?.pricing?.productPrice.toLocaleString()}
              </span>
            </div>
            <ul className="space-y-2">
              <li className="text-[#797979]">
                Store Name:{" "}
                <span className="font-medium capitalize text-[#333333]"></span>
              </li>
              <li className="text-[#797979]">
                Category: <span className="font-medium text-[#333333]"></span>
              </li>
              <li className="text-[#797979]">
                Product ID:{" "}
                <span className="font-medium text-[#333333]">
                  {selectedProduct?.productID?._id}
                </span>
              </li>
              <li className="text-[#797979]">
                Weight:{" "}
                <span className="font-medium text-[#333333]">
                  {selectedProduct?.productID?.details?.productWeight}kg
                </span>
              </li>
              <li className="text-[#797979]">
                Quantity:{" "}
                <span className="font-medium text-[#333333]">
                  {selectedProduct?.quantity}
                </span>
              </li>
              <li className="text-[#797979]">
                Order Total:{" "}
                <span className="font-medium text-[#333333]">
                  {" "}
                  ₦{order?.totalAmount?.toLocaleString()}
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <form id="return-order">
                <label htmlFor="reason" className="mb-2 inline-block">
                  Reason
                </label>
                <textarea
                  name="reason"
                  placeholder="Type here"
                  id="reason"
                  className="h-[150px] w-full resize-none rounded border border-[#D9D9D9] p-3 placeholder:text-[#A2A2A2] focus:border-green-700 focus:ring-green-700"
                ></textarea>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => navigate(`/my__orders/${id}`)}
                    className="rounded border border-red-600 px-6 py-2 text-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded bg-green-700 px-6 py-2 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ReturnRequest;
