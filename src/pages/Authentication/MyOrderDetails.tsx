import React, { useEffect, useMemo, useState } from "react";
import { IoBasketOutline, IoChevronBack } from "react-icons/io5";
import {
  MdOutlinePersonPinCircle,
  MdOutlineStorefront,
  MdPersonOutline,
} from "react-icons/md";
import OrderModal from "../../components/modal-component/OrderModal";
import { useNavigate, useParams } from "react-router-dom";

import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";
import AppLayout from "../../components/utility/AppLayout";
import { useGetOrdersById } from "../../services/hooks/orders";
import moment from "moment";
import { CgSpinnerAlt } from "react-icons/cg";

const MyOrderDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnclose = () => setShowModal(false);
  const { id } = useParams();
  const { data, isLoading } = useGetOrdersById(id as string);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const navigate = useNavigate();

  const order = useMemo(() => {
    return data?.data?.order;
  }, [data?.data?.order]);
  const selectedProduct = order?.productDetails[selectedProductIndex];
  const productImg = selectedProduct?.productID?.images[0];

  const handleRate = (id: any) => {
    window.scroll(0, 0);
    navigate(`/rate_review/${id}`, {
      replace: true,
    });
  };

  const [showInfo, setShowInfo] = useState(false);

  // ORDER STATUS COLOR
  const getOrderStatus = (status: any) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "text-orange-400";
      case "completed":
        return "text-green-500";
      case "failed":
        return "text-red-600";
      case "returned":
        return "text-[#198df9]";
      case "returned failed":
        return "text-red-600";
      default:
        return "gray";
    }
  };

  const orderStatus = order?.status;
  const statusOrder = getOrderStatus(orderStatus);

  // OTHER ITEMS IN AN OTHER
  const status = order?.status;
  const _id = order?._id;
  const orderDate = order?.orderDate;
  const otherItems = order?.productDetails?.map((item: any) => ({
    ...item,
    status,
    orderDate,
    _id,
  }));

  const handleViewOrder = (index: any) => {
    setSelectedProductIndex(index);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const actionButtonText = (status: string) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return (
          <button
            onClick={() =>
              navigate(
                `/my__orders/${order?._id}/${selectedProduct?.productID?._id}/cancel-request`,
              )
            }
            className="mt-3 w-full cursor-pointer text-center text-base font-medium text-zinc-800 underline hover:text-green-600 lg:mt-0 lg:w-auto lg:text-left"
          >
            Cancel Order
          </button>
        );
      case "completed":
        return (
          <button
            onClick={() =>
              navigate(
                `/my__orders/${order?._id}/${selectedProduct?.productID?._id}/return-request`,
              )
            }
            className="mt-3 w-full cursor-pointer text-center text-base font-medium text-zinc-800 underline hover:text-green-600 lg:mt-0 lg:w-auto lg:text-left"
          >
            Return Order
          </button>
        );
      // case "failed":
      //   return "text-red-600";
      // case "returned":
      //   return "text-[#198df9]";
      // case "returned failed":
      //   return "text-red-600";
      default:
        return (
          <button className="cursor-pointer text-base font-medium text-zinc-800 underline hover:text-green-600"></button>
        );
    }
  };

  return (
    <AppLayout>
      {false && <OrderDetails order={order} />}
      <div className="mx-auto bg-neutral-100 py-16 px-4 pt-8 lg:bg-white">
        {/* HEADING FOR DESKTOP */}
        <div className="relative hidden flex-col items-center justify-center py-10 lg:flex">
          <h2 className="font-medium text-[#333333] xxs:text-lg md:text-[40px] md:leading-[47px]">
            My Order Details
          </h2>

          <div className="mt-1 h-1.5 w-16 bg-[#197B30]"></div>
          <div
            onClick={() => {
              navigate("/my__orders");
            }}
            className="cursor:pointer absolute right-0 bottom-4 transition duration-150 ease-in-out hover:rotate-[-60%] hover:transform "
          >
            <Tooltip message="close">
              <IoMdClose size={20} />
            </Tooltip>
          </div>
        </div>

        {/* HEADING FOR MOBILE */}
        <div
          className="mb-4 flex cursor-pointer items-center gap-2 lg:hidden"
          onClick={() => {
            navigate("/my__orders");
          }}
        >
          <IoChevronBack size={24} />
          <span className="text-base font-normal text-zinc-800">
            Order Details
          </span>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <CgSpinnerAlt size={80} className="animate-spin" />
            <p className="mt-4">Fetching data...</p>
          </div>
        )}

        {/* NEW CARDS FOR MOBILE */}
        {data && (
          <div className="flex flex-col gap-6 lg:hidden">
            <div className="flex flex-wrap justify-between rounded-lg bg-white p-4">
              <div className="flex w-[70%] gap-2">
                <img
                  src={productImg}
                  className="h-10 w-10 rounded-full object-cover"
                  alt=""
                />
                <div className="flex-1">
                  <h3 className="mb-1 text-sm font-semibold text-zinc-800">
                    {selectedProduct?.productID.information.productName}
                    &nbsp;(
                    {selectedProduct?.productID.details.productWeight}kg)
                  </h3>
                  <span className="mb-2 block text-sm text-neutral-500">
                    {selectedProduct?.vendor.sellerAccountInformation.shopName}
                  </span>
                  <span className="block text-sm font-normal text-zinc-800">
                    ₦{selectedProduct?.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <ul className="w-[80px]">
                <li className="text-right text-[13px] font-normal text-zinc-800">
                  {moment(order?.orderDate).format("DD MMM YYYY")}
                </li>
                <li className="opacity-0">blank</li>
                <li className="text-right text-sm font-normal text-zinc-800">
                  X{selectedProduct?.quantity}
                </li>
              </ul>

              <div className="mt-9 flex w-full justify-between border-t pt-8">
                <ul className="flex flex-col gap-2">
                  <li className="text-sm font-normal text-zinc-400">
                    Subtotal
                  </li>
                  <li className="text-sm font-normal text-zinc-400">VAT</li>
                  <li className="text-sm font-normal text-zinc-400">
                    Delivery Fee
                  </li>
                  <li className="text-sm font-medium text-zinc-800">Total</li>
                </ul>
                <ul className="flex flex-col gap-2 text-right">
                  <li className="text-sm font-normal text-zinc-400">
                    ₦{order?.subtotal.toLocaleString()}
                  </li>
                  <li className="text-sm font-normal text-zinc-400">-</li>
                  <li className="text-sm font-normal text-zinc-400">-</li>
                  <li className="text-sm font-normal text-zinc-800">
                    ₦{order?.totalAmount.toLocaleString()}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-between rounded-lg bg-white p-4">
              <div className="flex w-full justify-between">
                <ul className="flex flex-col gap-2">
                  <li className="text-sm font-normal text-zinc-800">
                    Order ID
                  </li>
                  <li className="text-sm font-normal text-zinc-800">
                    Store Location
                  </li>
                  <li className="text-sm font-normal text-zinc-800">
                    Delivery date
                  </li>
                  <li className="text-sm font-normal text-zinc-800">Payment</li>
                  <li className="text-sm font-normal text-zinc-800">Status</li>
                </ul>
                <ul className="flex flex-col gap-2 text-right">
                  <li
                    className="text-sm font-normal text-zinc-800"
                    title={order?._id}
                  >
                    {order?._id.slice(-7)}
                  </li>
                  <li className="text-sm font-normal text-zinc-800">
                    {selectedProduct?.vendor.businessInformation.city}
                  </li>
                  <li className="text-sm font-normal text-zinc-800">-</li>
                  <li className="text-sm font-normal text-zinc-800">
                    ₦{order?.totalAmount.toLocaleString()}
                  </li>
                  <li>
                    <span className={`text-sm ${statusOrder}`}>
                      {order?.status}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap justify-between rounded-lg bg-white py-6 px-4">
              <div className="w-11/12">
                <p className="mb-2 text-[13px] font-medium text-zinc-800">
                  {order?.customer?.firstName} {order?.customer.lastName}
                </p>
                <p className="mb-1 text-[13px] font-normal text-neutral-500 ">
                  {order?.billingInformation.address}
                </p>
                <p className="mb-1 text-[13px] font-normal text-neutral-500">
                  {order?.billingInformation?.phoneNumber}
                </p>
                <p className="mb-1 text-[13px] font-normal text-neutral-500">
                  {order?.customer.email}
                </p>
              </div>
              <MdOutlinePersonPinCircle size={20} />
              <div className="relative w-full">
                <button
                  onClick={
                    order?.status !== "completed"
                      ? () => {
                          setShowInfo(true);
                          setTimeout(() => setShowInfo(false), 2000);
                        }
                      : () => handleRate(selectedProduct?.productID?._id)
                  }
                  className="mt-8 w-full rounded border border-green-700 py-3 text-sm font-semibold text-green-700"
                >
                  Rate Product
                </button>
                <>{actionButtonText(order?.status)}</>
                {/* RATE PRODUCT POP INFO */}
                <div
                  className={`pointer-events-none absolute top-20 right-0 z-20 flex items-center gap-1 rounded-lg bg-neutral-300 p-4 opacity-0 shadow-lg duration-300 after:absolute after:-top-5 after:right-3 after:z-0 after:block after:w-0 after:scale-105 after:border-[10px] after:border-t-transparent after:border-b-neutral-300 after:border-r-transparent after:border-l-transparent  ${
                    showInfo && "opacity-100"
                  }`}
                >
                  You can't rate, kindly complete your order
                </div>
              </div>
            </div>
            <div>
              <h3 className="mt-[40] mb-4 font-['Roboto'] text-lg font-semibold text-zinc-800">
                Other Items in Your Order
              </h3>

              {otherItems?.map((item: any, index: any) => (
                <div
                  className="flex flex-wrap justify-between rounded-lg bg-white p-4"
                  key={index}
                >
                  <div className="flex w-[70%] gap-2">
                    <img
                      src={item?.productID.images[0]}
                      className="h-10 w-10 rounded-full object-cover"
                      alt=""
                    />
                    <div className="flex-1">
                      <h3
                        className="mb-1 cursor-pointer text-sm font-semibold text-zinc-800"
                        onClick={() => handleViewOrder(index)}
                      >
                        {item?.productID.information.productName}
                        &nbsp;(
                        {item?.productID.details.productWeight}
                        kg)
                      </h3>
                      <span className="mb-2 block text-sm text-neutral-500">
                        {item?.vendor.sellerAccountInformation.shopName}
                      </span>
                      <span className={`text-sm ${statusOrder}`}>
                        {item?.status}
                      </span>
                    </div>
                  </div>
                  <ul className="flex w-[80px] flex-col justify-between">
                    <li className="text-right text-[13px] font-normal text-zinc-800">
                      {moment(item?.orderDate).format("DD MMM YYYY")}
                    </li>
                    <li className="text-right text-sm font-normal text-zinc-800">
                      X{item?.quantity}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEW CARD STACKS FOR DESKTOP */}

        {data && (
          <>
            <div className="hidden flex-wrap justify-between gap-5 lg:flex">
              <div
                className="h-[200px] w-1/4 rounded-lg"
                style={{
                  backgroundImage: `url('${productImg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="flex flex-col justify-between rounded-lg border border-[#D9D9D9] bg-[#F4F4F4]  p-4 lg:min-h-[100px] lg:w-[calc(75%_-_20px)] xl:min-h-[200px] xl:w-[calc(75%_/_2_-_20px)]">
                <div className="flex justify-between">
                  <MdOutlineStorefront size={20} />
                  <span className="text-sm text-neutral-400">Abuja</span>
                </div>
                <div className="mt-16 flex justify-between">
                  <div>
                    <div className="text-sm text-neutral-400">Store Name</div>
                    <span className="text-base text-zinc-800">
                      {
                        selectedProduct?.vendor.sellerAccountInformation
                          .shopName
                      }
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Order ID</div>
                    <span
                      className="text-base text-zinc-800"
                      title={order?._id}
                    >
                      {order?._id.slice(-7)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Product Name</div>
                    <span className="text-base text-zinc-800">
                      {selectedProduct?.productID.information.productName}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[200px] flex-col justify-between rounded-lg border  border-[#D9D9D9] bg-[#F4F4F4] p-4 lg:w-full xl:w-[calc(75%_/_2_-_20px)]">
                <div className="relative flex justify-between">
                  <div className="flex items-start gap-1">
                    <MdPersonOutline size={20} className="mt-1" />
                    <div className="">
                      <span className="block text-base font-normal text-zinc-800">
                        {order?.customer?.firstName}
                      </span>
                      <span className="pr-2 text-[14px] leading-[16px] text-[#A2A2A2]">
                        Order Date: &nbsp;
                        <span className="text-[#333333]">
                          {moment(order?.orderDate).format("DD MMMM YYYY")}
                        </span>
                      </span>
                    </div>
                  </div>
                  <button
                    onMouseEnter={
                      order?.status !== "completed"
                        ? () => setShowInfo(true)
                        : () => null
                    }
                    onMouseLeave={
                      order?.status !== "completed"
                        ? () => setShowInfo(false)
                        : () => null
                    }
                    onClick={
                      order?.status !== "completed"
                        ? () => null
                        : () => handleRate(selectedProduct?.productID?._id)
                    }
                    className="cursor-pointer text-base font-semibold text-zinc-800 underline hover:text-green-600"
                  >
                    Rate This Product
                  </button>

                  {/* RATE PRODUCT POP INFO */}
                  <div
                    className={`absolute -top-16 right-3 z-20 flex items-center gap-1 rounded-lg border border-neutral-200 bg-white p-4 opacity-0 shadow-lg duration-300 after:absolute after:-bottom-5 after:right-3 after:z-0 after:block after:w-0 after:scale-105 after:border-[10px] after:border-t-white after:border-b-transparent after:border-r-transparent after:border-l-transparent  ${
                      showInfo && "opacity-100"
                    }`}
                  >
                    You can't rate, kindly complete your order
                  </div>
                </div>
                <div className="mt-3 flex justify-between">
                  <div>
                    <span className="text-sm font-normal text-neutral-400">
                      Phone
                    </span>
                    <span className="block text-base text-zinc-800">
                      {order?.billingInformation?.phoneNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-normal text-neutral-400">
                      Email
                    </span>
                    <span className="block text-base text-zinc-800">
                      {order?.customer.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[200px] flex-col justify-between rounded-lg border  border-[#D9D9D9] bg-[#F4F4F4] p-4 lg:w-[calc(50%_-_10px)] xl:w-[calc(50%_-_10px)]">
                <div className="flex justify-between">
                  <IoBasketOutline size={20} />
                  <span className={`text-sm ${statusOrder}`}>
                    {order?.status}
                  </span>
                </div>
                <div className="mt-16 flex items-end justify-between">
                  <div>
                    <div className="text-sm text-neutral-400">Price</div>
                    <span className="text-base text-zinc-800">
                      ₦{selectedProduct?.price.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Quantity</div>
                    <span className="text-base text-zinc-800">
                      {selectedProduct?.quantity}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Order Total</div>
                    <span className="text-base text-zinc-800">
                      ₦{order?.totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <button className="cursor-pointer text-base font-medium text-zinc-800 underline hover:text-green-600">
                    {actionButtonText(order?.status)}
                  </button>
                </div>
              </div>
              <div className="flex min-h-[200px] flex-col justify-between rounded-lg border  border-[#D9D9D9] bg-[#F4F4F4] p-4 lg:w-[calc(50%_-_10px)] xl:w-[calc(50%_-_10px)]">
                <div className="flex justify-between">
                  <MdOutlinePersonPinCircle size={20} />
                  <button
                    onClick={() => setShowModal(true)}
                    className="cursor-pointer text-base font-semibold text-zinc-800 underline hover:text-green-600"
                  >
                    Track Order
                  </button>
                </div>
                <div className="mt-4 flex justify-between gap-6">
                  <div>
                    <div className="text-sm text-neutral-400">
                      Billing Address
                    </div>
                    <span className="text-base text-zinc-800">
                      {order?.billingInformation.address}
                    </span>
                  </div>
                  {/* <div>
                <div className="text-neutral-400 text-sm">Home Address</div>
                <span className="text-zinc-800 text-base">
                  No. 1 Victoria island, off Lekki, Lagos State.
                </span>
              </div> */}
                </div>
              </div>
            </div>
            <div className="mt-8 hidden lg:block">
              <h3 className="mb-6 font-['Roboto'] text-2xl font-semibold tracking-wide text-zinc-800">
                Other Items In Your Order
              </h3>
              <div className="w-full">
                <table className="w-full border-collapse rounded-2xl border border-zinc-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Product
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Store
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Order Date
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Order ID
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Price
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Qnty
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Status
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {otherItems?.map((item: any, index: any) => (
                      <tr key={index}>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          <div className="justify-left flex flex-wrap items-center gap-2">
                            <img
                              src={item?.productID.images[0]}
                              className="h-10 w-10 rounded-full object-cover"
                              alt="product thumbnail"
                            />
                            <span>
                              {item?.productID.information.productName}
                            </span>
                          </div>
                        </td>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          <span>
                            {item?.vendor.sellerAccountInformation.shopName}
                          </span>
                          <span className="block text-neutral-300">
                            {item?.vendor.businessInformation.city}
                          </span>
                        </td>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          {moment(item?.orderDate).format("DD MMMM YYYY")}
                          <span className="block text-neutral-300">
                            {moment(item?.orderDate)
                              .format("h:mmA")
                              .toLowerCase()}
                          </span>
                        </td>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          {item?._id || "-"}
                        </td>
                        <td className="border border-zinc-300 p-3  text-sm">
                          ₦{item?.price.toLocaleString()}
                        </td>
                        <td className="border border-zinc-300 p-3 px-5 text-sm">
                          {item?.quantity}
                        </td>
                        <td
                          className={`border border-zinc-300 p-3 px-5 text-sm ${statusOrder}`}
                        >
                          {item?.status || "-"}
                        </td>
                        <td
                          className={`border border-zinc-300 p-3 px-5 text-sm`}
                        >
                          <span
                            onClick={() => {
                              handleViewOrder(index);
                            }}
                            className="cursor-pointer text-sm font-normal text-zinc-800 underline"
                          >
                            View
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      <OrderModal onClose={handleOnclose} visible={showModal} order={order} />
    </AppLayout>
  );
};

export default MyOrderDetails;

// import React, { useState, useEffect } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   details: string;
//   note: string;
//   status: string;
//   imageUrl: string;
// }

// interface Order {
//   orderId: number;
//   products: Product[];
//   orderDate: Date;
// }

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
  }, [order?.orderDate, order?.productDetails]);

  const initiateReturn = (productId: number) => {
    // Logic for initiating return for a specific product
    // This could involve API calls, state updates, etc.
    return `Return initiated for product ${productId} in order ${order.orderId}`;
  };
  const buyAgain = (productId: number) => {
    // Logic for buying the product again
    // This could involve adding the product to the cart or triggering a new order
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
    <div className="mx-auto max-w-xl rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Order Details</h2>

      {Object.entries(groupedProducts).map(([storeName, products]) => (
        <div key={storeName} className="mb-6">
          <h3 className="mb-2 text-xl font-semibold">{storeName}</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-md bg-gray-100 p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-4 h-40 w-full rounded-md object-cover"
                />
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {product.name}
                    </h3>
                    <p className="mb-2 text-gray-500">{product.details}</p>
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
                      className="focus:shadow-outline-green mr-2 rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600 focus:outline-none active:bg-green-800"
                    >
                      Buy Again
                    </button>
                    {returnEligibilities[product.id] && (
                      <button
                        onClick={() => initiateReturn(product.id)}
                        className="focus:shadow-outline-blue rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 focus:outline-none active:bg-blue-800"
                      >
                        Initiate Return
                      </button>
                    )}
                    {!returnEligibilities[product.id] && (
                      <p className="mt-2 text-red-500">
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
