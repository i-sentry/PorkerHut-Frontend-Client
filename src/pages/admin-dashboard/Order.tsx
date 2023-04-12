import React from "react";
import MyOrderSection from "../../components/sellers-order-page-component/MyOrderSection";
import AdminOrderTableSection from "./AdminOrderTableSection";

const Order = () => {
  const OrderData = [
    {
      id: "1",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "2",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "3",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "4",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "2023-01-13T19:30:00Z",
      order_id: "2023-01-13T19:30:00Z",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "5",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "21 September 2022",
      order_id: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "6",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "2023-01-13T19:30:00Z",
      order_id: "2023-01-13T19:30:00Z",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "7",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "2023-01-13T19:30:00Z",
      order_id: "2023-01-13T19:30:00Z",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "8",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "2023-01-13T19:30:00Z",
      order_id: "2023-01-13T19:30:00Z",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "9",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "2023-01-13T19:30:00Z",
      order_id: "2023-01-13T19:30:00Z",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
    {
      id: "10",
      img: "./images/productimg1.png",
      location: "Abuja",
      time: "20:40pm",
      product_name: "100%  Healthy-Fed Pork Lap",
      store_name: "Porker Hut",
      order_date: "2023-01-13T19:30:00Z",
      order_id: "2023-01-13T19:30:00Z",
      price: "32,500",
      quantity: "4",
      order_total: "30,000",
      order_status: "PLACED",
    },
  ];
  return (
    <div className="ml-10 mr-4 mt-4 mb-8 ">
      <div className="mb-2">
        <h1 className="text-xl font-medium ">Orders</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          All Information available
        </span>
      </div>

      <div className="flex gap-8 items-center">
        <h1 className="underline text-sm">All</h1>
        <button className="border-2 border-[#197B30] rounded-lg py-2 px-4 text-sm">
          Pending
        </button>
        <span className="underline text-sm">Ready to GO</span>
        <span className="underline text-sm">Completed</span>
        <span className="underline text-sm">Failed</span>
      </div>

      <div className="flex items-center  gap-4 mt-6">
        <input type="radio" className="w-4 h-4" />
        <div className="relative">
          <select className="block  appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value="" selected disabled hidden>
              Please select an action
            </option>
            <option className="">Push Order</option>
            <option>Decline Order</option>
            <option>Delete Order</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <button className="h-9  bg-[#197B30] w-16 rounded-lg text-white">
          Go
        </button>
      </div>

      

      <table className="m-auto mt-10">
        <thead className="px-5 rounded-r-md rounded-l-md bg-[#F4F4F4]">
          <td className="px-5 py-3">Product Name</td>
          <td className="px-5 whitespace-nowrap">Store Name</td>
          <td className="px-5 ">Order Data</td>
          <td className="px-5 ">Order ID</td>
          <td className="px-5 ">Price</td>
          <td className="px-5 ">Quantity</td>
          <td className="px-5 whitespace-nowrap">Order Total</td>
          <td className="px-5">Status</td>
          <td></td>
        </thead>

        {OrderData.map((order, index) => {
          return <AdminOrderTableSection order={order} key={index} />;
        })}
      </table>
    </div>
  );
};

export default Order;
