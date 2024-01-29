import React, { useEffect, useState } from "react";
import { IoBasketOutline, IoChevronBack } from "react-icons/io5";
import {
  MdOutlinePersonPinCircle,
  MdOutlineStorefront,
  MdPersonOutline,
} from "react-icons/md";
// import productImgs from "../../assets/images/productimg1.png";
import OrderModal from "../../components/modal-component/OrderModal";
import { useNavigate, useParams } from "react-router-dom";

// import { IOrderData } from "../../components/vendors-component/MyOrderSection";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";
// import { OrderData } from "../admin-dashboard/Order";
import AppLayout from "../../components/utility/AppLayout";
import { useGetOrdersById } from "../../services/hooks/orders";
import moment from "moment";
import { BsFillXCircleFill, BsXCircleFill } from "react-icons/bs";
// import OtherOrdersTable from "../../components/OtherOrdersTable";

// const columns = [
//   { Header: "S/N", accessor: "id" },
//   { Header: "First Name", accessor: "first_name" },
//   { Header: "Last Name", accessor: "last_name" },
//   { Header: "Email Address", accessor: "email" },
//   { Header: "Gender", accessor: "gender" },
//   { Header: "University", accessor: "university" },
// ];

const MyOrderDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnclose = () => setShowModal(false);
  const { id } = useParams();
  const { data, error, isLoading } = useGetOrdersById(id as string);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  console.log(data?.data?.order, "hyunmdhdhf");

  const navigate = useNavigate();

  const order = data?.data?.order;
  console.log(order, "new order table");
  const selectedProduct = order?.productDetails[selectedProductIndex];
  console.log(selectedProduct, "selectedProduct");

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
    switch (status) {
      case "pending":
        return "text-orange-400";
      case "completed":
        return "text-green-500";
      case "failed":
        return "text-red-600";
      default:
        return "gray";
    }
  };

  const orderStatus = order?.status;
  const status = getOrderStatus(orderStatus);

  // OTHER ITEMS IN AN OTHER
  const _status = order?.status;
  const _id = order?._id;
  const orderDate = order?.orderDate;
  const otherItems = order?.productDetails?.map((item: any) => ({
    ...item,
    _status,
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

    // navigate(`/my__orders/${id}`, {
    //   replace: true,
    // });
  };

  return (
    <AppLayout>
      {false && <OrderDetails order={order} />}
      <div className="mx-auto py-16 pt-8 px-4 bg-neutral-100 lg:bg-white">
        {/* HEADING FOR DESKTOP */}
        <div className="items-center flex-col justify-center py-10 relative hidden lg:flex">
          <h2 className="md:text-[40px] md:leading-[47px] xxs:text-lg font-medium text-[#333333]">
            My Order Details
          </h2>

          <div className="h-1.5 w-16 bg-[#197B30] mt-1"></div>
          <div
            onClick={() => {
              navigate("/my__orders");
            }}
            className="hover:rotate-[-60%] hover:transform absolute right-0 bottom-4 cursor:pointer transition duration-150 ease-in-out "
          >
            <Tooltip message="close">
              <IoMdClose size={20} />
            </Tooltip>
          </div>
        </div>

        {/* HEADING FOR MOBILE */}
        <div
          className="flex gap-2 items-center mb-4 lg:hidden cursor-pointer"
          onClick={() => {
            navigate("/my__orders");
          }}
        >
          <IoChevronBack size={24} />
          <span className="text-zinc-800 text-base font-normal">
            Order Details
          </span>
        </div>

        {/* NEW CARDS FOR MOBILE */}
        <div className="flex flex-col gap-6 lg:hidden">
          <div className="flex justify-between flex-wrap bg-white rounded-lg p-4">
            <div className="flex gap-2 w-[70%]">
              <img
                src={productImg}
                className="w-10 h-10 rounded-full object-cover"
                alt=""
              />
              <div className="flex-1">
                <h3 className="text-zinc-800 text-sm font-semibold mb-1">
                  {selectedProduct?.productID.information.productName}
                  &nbsp;(
                  {selectedProduct?.productID.details.productWeight}kg)
                </h3>
                <span className="text-neutral-500 text-sm block mb-2">
                  {selectedProduct?.vendor.sellerAccountInformation.shopName}
                </span>
                <span className="text-zinc-800 text-sm font-normal block">
                  ₦{selectedProduct?.price.toLocaleString()}
                </span>
              </div>
            </div>
            <ul className="w-[80px]">
              <li className="text-zinc-800 text-[13px] font-normal text-right">
                {moment(order?.orderDate).format("DD MMM YYYY")}
              </li>
              <li className="opacity-0">blank</li>
              <li className="text-zinc-800 text-sm font-normal text-right">
                X{selectedProduct?.quantity}
              </li>
            </ul>

            <div className="border-t flex justify-between w-full mt-9 pt-8">
              <ul className="flex flex-col gap-2">
                <li className="text-zinc-400 text-sm font-normal">Subtotal</li>
                <li className="text-zinc-400 text-sm font-normal">VAT</li>
                <li className="text-zinc-400 text-sm font-normal">
                  Delivery Fee
                </li>
                <li className="text-zinc-800 text-sm font-medium">Total</li>
              </ul>
              <ul className="flex flex-col gap-2 text-right">
                <li className="text-zinc-400 text-sm font-normal">
                  ₦{order?.subtotal.toLocaleString()}
                </li>
                <li className="text-zinc-400 text-sm font-normal">-</li>
                <li className="text-zinc-400 text-sm font-normal">-</li>
                <li className="text-zinc-800 text-sm font-normal">
                  ₦{order?.totalAmount.toLocaleString()}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between flex-wrap bg-white rounded-lg p-4">
            <div className="flex justify-between w-full">
              <ul className="flex flex-col gap-2">
                <li className="text-zinc-800 text-sm font-normal">Order ID</li>
                <li className="text-zinc-800 text-sm font-normal">
                  Store Location
                </li>
                <li className="text-zinc-800 text-sm font-normal">
                  Delivery date
                </li>
                <li className="text-zinc-800 text-sm font-normal">Payment</li>
                <li className="text-zinc-800 text-sm font-normal">Status</li>
              </ul>
              <ul className="flex flex-col gap-2 text-right">
                <li
                  className="text-zinc-800 text-sm font-normal"
                  title={order?._id}
                >
                  {order?._id.slice(-7)}
                </li>
                <li className="text-zinc-800 text-sm font-normal">
                  {selectedProduct?.vendor.businessInformation.city}
                </li>
                <li className="text-zinc-800 text-sm font-normal">-</li>
                <li className="text-zinc-800 text-sm font-normal">
                  ₦{order?.totalAmount.toLocaleString()}
                </li>
                <li>
                  <span className={`text-neutral-400 text-sm ${status}`}>
                    {order?.status}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between flex-wrap bg-white rounded-lg py-6 px-4">
            <div className="w-11/12">
              <p className="text-zinc-800 text-[13px] font-medium mb-2">
                {order?.customer?.firstName} {order?.customer.lastName}
              </p>
              <p className="text-neutral-500 text-[13px] font-normal mb-1 ">
                {order?.billingInformation.address}
              </p>
              <p className="text-neutral-500 text-[13px] font-normal mb-1">
                {order?.billingInformation?.phoneNumber}
              </p>
              <p className="text-neutral-500 text-[13px] font-normal mb-1">
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
                className="py-3 w-full mt-8 rounded border border-green-700 text-green-700 text-sm font-semibold"
              >
                Rate Product
              </button>
              <button className="w-full text-center mt-4 text-zinc-800 text-base font-normal font-['Roboto'] underline">
                Return Order
              </button>
              {/* RATE PRODUCT POP INFO */}
              <div
                className={`bg-neutral-300 flex items-center gap-1 opacity-0 duration-300 shadow-lg rounded-lg p-4 absolute top-20 right-0 after:block after:border-[10px] after:border-t-transparent after:w-0 after:border-b-neutral-300 z-20 after:z-0 after:absolute after:-top-5 after:right-3 after:border-r-transparent after:border-l-transparent after:scale-105  ${
                  showInfo && "opacity-100"
                }`}
              >
                You can't rate, kindly complete your order{" "}
                <BsFillXCircleFill size={24} color="#f00" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-zinc-800 text-lg font-semibold font-['Roboto'] mt-[40] mb-4">
              Other Items in Your Order
            </h3>

            {otherItems?.map((item: any, index: any) => (
              <div className="flex justify-between flex-wrap bg-white rounded-lg p-4">
                <div className="flex gap-2 w-[70%]">
                  <img
                    src={item?.productID.images[0]}
                    className="w-10 h-10 rounded-full object-cover"
                    alt=""
                  />
                  <div className="flex-1">
                    <h3
                      className="text-zinc-800 text-sm font-semibold mb-1 cursor-pointer"
                      onClick={() => handleViewOrder(index)}
                    >
                      {item?.productID.information.productName}
                      &nbsp;(
                      {item?.productID.details.productWeight}
                      kg)
                    </h3>
                    <span className="text-neutral-500 text-sm block mb-2">
                      {item?.vendor.sellerAccountInformation.shopName}
                    </span>
                    <span className={`text-neutral-400 text-sm ${status}`}>
                      {item?._status}
                    </span>
                  </div>
                </div>
                <ul className="w-[80px] flex flex-col justify-between">
                  <li className="text-zinc-800 text-[13px] font-normal text-right">
                    {moment(item?.orderDate).format("DD MMM YYYY")}
                  </li>
                  <li className="text-zinc-800 text-sm font-normal text-right">
                    X{item?.quantity}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* NEW CARD STACKS FOR DESKTOP */}
        <div className="hidden lg:flex justify-between flex-wrap gap-5">
          <div
            className="w-1/4 h-[200px] rounded-lg"
            style={{
              backgroundImage: `url('${productImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="lg:w-[calc(75%_-_20px)] xl:w-[calc(75%_/_2_-_20px)] lg:min-h-[100px] xl:min-h-[200px] bg-[#F4F4F4] border border-[#D9D9D9]  rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <MdOutlineStorefront size={20} />
              <span className="text-neutral-400 text-sm">Abuja</span>
            </div>
            <div className="flex justify-between mt-16">
              <div>
                <div className="text-neutral-400 text-sm">Store Name</div>
                <span className="text-zinc-800 text-base">
                  {selectedProduct?.vendor.sellerAccountInformation.shopName}
                </span>
              </div>
              <div>
                <div className="text-neutral-400 text-sm">Order ID</div>
                <span className="text-zinc-800 text-base" title={order?._id}>
                  {order?._id.slice(-7)}
                </span>
              </div>
              <div>
                <div className="text-neutral-400 text-sm">Product Name</div>
                <span className="text-zinc-800 text-base">
                  {selectedProduct?.productID.information.productName}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-full xl:w-[calc(75%_/_2_-_20px)] min-h-[200px] bg-[#F4F4F4] border border-[#D9D9D9]  rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between relative">
              <div className="flex items-start gap-1">
                <MdPersonOutline size={20} className="mt-1" />
                <div className="">
                  <span className="block text-zinc-800 text-base font-normal">
                    {order?.customer?.firstName}
                  </span>
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] pr-2">
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
                className="text-zinc-800 text-base font-semibold underline cursor-pointer hover:text-green-600"
              >
                Rate This Product
              </button>

              {/* RATE PRODUCT POP INFO */}
              <div
                className={`bg-white flex gap-1 items-center opacity-0 border border-neutral-200 duration-300 shadow-lg rounded-lg p-4 absolute -top-16 right-3 after:block after:border-[10px] after:border-t-white after:w-0 after:border-b-transparent z-20 after:z-0 after:absolute after:-bottom-5 after:right-3 after:border-r-transparent after:border-l-transparent after:scale-105  ${
                  showInfo && "opacity-100"
                }`}
              >
                You can't rate, kindly complete your order{" "}
                <BsFillXCircleFill color="#f00" />
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <span className="text-neutral-400 text-sm font-normal">
                  Phone
                </span>
                <span className="text-zinc-800 text-base block">
                  {order?.billingInformation?.phoneNumber}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 text-sm font-normal">
                  Email
                </span>
                <span className="text-zinc-800 text-base block">
                  {order?.customer.email}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-[calc(50%_-_10px)] xl:w-[calc(50%_-_10px)] min-h-[200px] bg-[#F4F4F4] border border-[#D9D9D9]  rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <IoBasketOutline size={20} />
              <span className={`text-neutral-400 text-sm ${status}`}>
                {order?.status}
              </span>
            </div>
            <div className="flex justify-between items-end mt-16">
              <div>
                <div className="text-neutral-400 text-sm">Price</div>
                <span className="text-zinc-800 text-base">
                  ₦{selectedProduct?.price.toLocaleString()}
                </span>
              </div>
              <div>
                <div className="text-neutral-400 text-sm">Quantity</div>
                <span className="text-zinc-800 text-base">
                  {selectedProduct?.quantity}
                </span>
              </div>
              <div>
                <div className="text-neutral-400 text-sm">Order Total</div>
                <span className="text-zinc-800 text-base">
                  ₦{order?.totalAmount.toLocaleString()}
                </span>
              </div>
              <button className="text-zinc-800 text-base font-medium underline hover:text-green-600 cursor-pointer">
                Return Order
              </button>
            </div>
          </div>
          <div className="lg:w-[calc(50%_-_10px)] xl:w-[calc(50%_-_10px)] min-h-[200px] bg-[#F4F4F4] border border-[#D9D9D9]  rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <MdOutlinePersonPinCircle size={20} />
              <button className="text-zinc-800 text-base font-semibold underline cursor-pointer hover:text-green-600">
                Track Order
              </button>
            </div>
            <div className="flex justify-between mt-4 gap-6">
              <div>
                <div className="text-neutral-400 text-sm">Billing Address</div>
                <span className="text-zinc-800 text-base">
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
        <div className="lg:block hidden mt-8">
          <h3 className="text-zinc-800 text-2xl font-semibold font-['Roboto'] tracking-wide mb-6">
            Other Items In Your Order
          </h3>
          <div className="w-full">
            <table className="w-full border-collapse border border-zinc-300 rounded-2xl">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-zinc-300 py-4 px-8 text-left">
                    Product Name
                  </th>
                  <th className="border border-zinc-300 py-4 px-8 text-left">
                    Store Name
                  </th>
                  <th className="border border-zinc-300 py-4 px-8 text-left">
                    Order Date
                  </th>
                  <th className="border border-zinc-300 py-4 px-8 text-left">
                    Order ID
                  </th>
                  <th className="border border-zinc-300 py-4 px-8 text-left">
                    Prices
                  </th>
                  <th className="border border-zinc-300 py-4 px-8 text-left">
                    No of items
                  </th>
                  <th className="border border-zinc-300 py-4 px-8 text-left">
                    Status
                  </th>
                  <th className="border border-zinc-300 py-4 px-8 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {otherItems?.map((item: any, index: any) => (
                  <tr>
                    <td className="border border-zinc-300 p-3  px-5 text-sm">
                      <div className="flex justify-left gap-2 flex-wrap items-center">
                        <img
                          src={item?.productID.images[0]}
                          className="w-10 h-10 rounded-full object-cover"
                          alt="product thumbnail"
                        />
                        <span>{item?.productID.information.productName}</span>
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
                        {moment(item?.orderDate).format("h:mmA").toLowerCase()}
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
                      className={`p-3 border border-zinc-300 px-5 text-sm ${status}`}
                    >
                      {item?._status || "-"}
                    </td>
                    <td className={`p-3 border border-zinc-300 px-5 text-sm`}>
                      <span
                        onClick={() => {
                          handleViewOrder(index);
                        }}
                        className="text-zinc-800 text-sm font-normal cursor-pointer underline"
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
      </div>
      <OrderModal onClose={handleOnclose} visible={showModal} />
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
