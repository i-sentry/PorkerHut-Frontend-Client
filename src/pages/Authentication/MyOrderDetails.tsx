import React, { useEffect, useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import {
  MdOutlinePersonPinCircle,
  MdOutlineStorefront,
  MdPersonOutline,
} from "react-icons/md";
import productImg from "../../assets/images/productimg1.png";
import OrderModal from "../../components/modal-component/OrderModal";
import { useNavigate, useParams } from "react-router-dom";

import { IOrderData } from "../../components/vendors-component/MyOrderSection";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";
import { OrderData } from "../admin-dashboard/Order";
import AppLayout from "../../components/utility/AppLayout";
import { useGetOrdersById } from "../../services/hooks/orders";

const MyOrderDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnclose = () => setShowModal(false);
  const { id } = useParams();
  const { data, error, isLoading } = useGetOrdersById(id as string);
  console.log(data?.data?.order, "hyunmdhdhf");

  const navigate = useNavigate();

  const order= data?.data?.order;


  return (
    <AppLayout>
      <OrderDetails order={order} />
      {/* <div className="m-auto my-24 ">
        <div className="flex items-center flex-col justify-center py-10 relative">
          <h2 className="md:text-[40px] md:leading-[47px] xxs:text-lg font-medium text-[#333333]">
            My Order Details
          </h2>

          <div className="h-1.5 w-16 bg-[#197B30] mt-1"></div>
          <div
            onClick={() => {
              navigate("/my__orders");
            }}
            className="hover:rotate-[-60%] hover:transform absolute right-20 cursor:pointer transition duration-150 ease-in-out"
          >
            <Tooltip message="close">
              <IoMdClose size={20} />
            </Tooltip>
          </div>
        </div>
        <div className="flex gap-6 px-14">
          <div
            className="w-1/4 h-40 rounded-lg"
            style={{
              backgroundImage: `url('${productImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-1/2 bg-[#F4F4F4] border border-[#D9D9D9]  rounded-lg pl-4 pr-8 pt-4 shadow-sm">
            <div className="flex flex-col gap-[48px]">
              <div className="">
                <div className="flex gap-2">
                  <MdPersonOutline size={20} />
                  <span className=" text-[16px] leading-[19px] text-[#333333] font-normal">
                    William Nado
                  </span>
                </div>
                <div className="">
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] pr-2">
                    Order Date:
                  </span>
                  <span className="text-[#333333] text-[14px] leading-[16px] pr-2">
                    {" "}
                    {order?.order_date}
                  </span>{" "}
                </div>
              </div>

              <div className="flex justify-between">
                <div className="">
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal pr-2 block">
                    Phone
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.id}
                  </span>
                </div>
                <div className="">
                  <div className="text-xs">
                    <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal pr-2 block">
                      Email
                    </span>
                    <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                      {order?.store_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-40 border border-[#D9D9D9] rounded-lg flex flex-col gap-[54px] bg-[#F4F4F4] shadow-sm">
            <div className="flex items-center justify-between pt-4 px-4">
              <div className="flex gap-2">
                <MdOutlinePersonPinCircle size={20} />
              </div>
              <button
                className="underline text-[16px] leading-[19px] font-normal text-[#333333] cursor-pointer hover:text-[#197b30]"
                onClick={() => setShowModal(true)}
              >
                Track Order
              </button>
            </div>
            <div className="flex justify-between px-4">
              <div className="">
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Billing Address
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.location}
                </span>
              </div>
              <div className="">
                <div className="">
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                    Home Address
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  mt-8 px-14 gap-6">
          <div className="w-1/2 border border-[#D9D9D9] bg-[#F4F4F4] h-40 rounded-lg flex flex-col gap-[72px]">
            <div className="flex justify-between items-center pt-4 px-4">
              <MdOutlineStorefront size={20} />
              <span className="text-sm">Abuja</span>
            </div>
            <div className="flex items-center justify-between pl-4 pr-8">
              <div>
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Store Name
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.store_name}
                </span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Order ID
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.id}
                </span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Product Name
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.product_name}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 border border-[#D9D9D9] h-40 rounded-lg bg-[#F4F4F4]">
            <div className=" flex flex-col gap-[70px]">
              <div className="flex justify-between items-center pt-4 px-4">
                <IoBasketOutline size={20} />
                <span className="text-[#22C55E] text-[16px] leading-[19px] font-normal">
                  {order?.order_status}
                </span>
              </div>
              <div className="flex items-center justify-between pl-4 pr-8">
                <div>
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal block">
                    Price
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.price}
                  </span>
                </div>
                <div>
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal block">
                    Quantity
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.quantity}
                  </span>
                </div>
                <div>
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal block">
                    Order Total
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.order_total}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() =>
                      navigate(`/my__orders/${order.id}/${order?.order_id}`)
                    }
                    className="underline text-[16px] leading-[19px] font-normal text-[#333333] cursor-pointer hover:text-[#197b30]"
                  >
                    Return Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <OrderModal onClose={handleOnclose} visible={showModal} />
    </AppLayout>
  );
};

export default MyOrderDetails;

// import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  details: string;
  note: string;
  status: string;
  imageUrl: string;
}

interface Order {
  orderId: number;
  products: Product[];
  orderDate: Date;
}

const OrderDetails: React.FC<{ order: any }> = ({ order }) => {
   const [returnEligibilities, setReturnEligibilities] = useState<{
     [productId: number]: boolean;
   }>({});

   // Calculate the elapsed time since each product was ordered
   useEffect(() => {
     const productReturnEligibilities: { [productId: number]: boolean } = {};

    //  order.products.forEach((product) => {
       const productOrderDate = new Date(order?.orderDate);
       const currentTime = new Date();
       const elapsedTime = currentTime.getTime() - productOrderDate.getTime();

       // Assume return eligibility duration is 7 days (adjust as needed)
       const returnEligibilityDuration = 7 * 24 * 60 * 60 * 1000;
order?.productDetails.forEach((product: any) => {
  productReturnEligibilities[product._id] =
    elapsedTime <= returnEligibilityDuration;
});

     setReturnEligibilities(productReturnEligibilities);
   }, []);

   const initiateReturn = (productId: number) => {
     // Logic for initiating return for a specific product
     // This could involve API calls, state updates, etc.
     console.log(
       `Return initiated for product ${productId} in order ${order.orderId}`
     );
   };
  const buyAgain = (productId: number) => {
    // Logic for buying the product again
    // This could involve adding the product to the cart or triggering a new order
    console.log("Buy again clicked for product:", productId);
  };
  // Group products by store name
  const groupedProducts: { [storeName: string]: any[] } = {};
  order?.productDetails.forEach((product: any) => {
    const storeName =
      product.vendor.sellerAccountInformation.shopName || "Other";
    if (!groupedProducts[storeName]) {
      groupedProducts[storeName] = [];
    }
    groupedProducts[storeName].push(product);
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>

      {Object.entries(groupedProducts).map(([storeName, products]) => (
        <div key={storeName} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{storeName}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-100 p-4 rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 mb-2">{product.details}</p>
                    <p className="text-gray-500">
                      Price: ₦{product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500">Status: {product.status}</p>
                    <p className="text-gray-500">Note: {product.note}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => buyAgain(product.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800 mr-2"
                    >
                      Buy Again
                    </button>
                    {returnEligibilities[product.id] && (
                      <button
                        onClick={() => initiateReturn(product.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                      >
                        Initiate Return
                      </button>
                    )}
                    {!returnEligibilities[product.id] && (
                      <p className="text-red-500 mt-2">
                        Product not eligible for return.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {!Object.values(returnEligibilities).includes(true) && (
        <p className="mt-6 text-red-500">
          Products are no longer eligible for return. Access our Return Policy.
        </p>
      )}
    </div>
  );
};

// export default OrderDetails;
