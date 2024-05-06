import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrderData } from "../../pages/admin-dashboard/Order";

export interface IOrderData {
  id: string;
  img: string;
  location: string;
  time: string;
  product_name: string;
  store_name: string;
  order_date: string;
  order_id: string;
  price: string;
  quantity: string;
  order_total: string;
  order_status: string;
}

const MyOrderSection = ({ order, rowEvents }: any) => {
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleView = (orderid: any) => {
    setOrderId(orderid);
    navigate(`/my__orders/${orderid}`, { replace: true });
  };

  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const filteredOrder: any = OrderData.find((ord: any) => ord.id === orderId);
    setOrderData(filteredOrder);
  }, [orderId]);

  return (
    <tbody key={order.id}>
      <tr className="border border-[#D9D9D9]">
        <td className=" border-r  border-r-[#D9D9D9] text-sm font-normal ">
          <div className="flex justify-center items-center gap-2 px-4">
            <img
              src={order?.img}
              alt="productImg"
              className="h-8 w-18 rounded-full bg-cover bg-no-repeat bg-center"
            />
            <span>{order?.product_name}</span>
          </div>
        </td>
        <td className="px-2  border-r border-r-[#D9D9D9] text-sm font-normal">
          <div className="flex flex-col gap-2">
            <span>{order?.store_name}</span>
            <span className="text-[#A2A2A2] text-xs">{order.location}</span>
          </div>
        </td>
        <td className="px-2 border-r  border-r-[#D9D9D9] text-sm font-normal">
          <div className=" flex flex-col gap-2">
            <span>{order?.order_date}</span>
            <span className="text-[#A2A2A2] text-xs">{order.time}</span>
          </div>
        </td>
        <td className="px-2 border-r  border-r-[#D9D9D9] text-sm font-normal">
          {order?.order_id}
        </td>
        <td className="px-2 border-r  border-r-[#D9D9D9] text-sm font-normal">
          {order?.price}
        </td>
        <td className="px-2 py-4 border-r  border-r-[#D9D9D9] text-sm font-normal">
          {order?.quantity}
        </td>
        <td className="px-2 border-r  border-r-[#D9D9D9] text-sm font-normal">
          {order?.order_total}
        </td>
        <td className="px-2 py-4 border-r  border-r-[#D9D9D9] text-sm font-normal">
          {order?.order_status}
        </td>
        <td className="px-2 border  border-r-[#D9D9D9] text-sm font-normal">
          <button
            onClick={() => {
              handleView(order?.id);
            }}
            className="underline"
          >
            view
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MyOrderSection;
