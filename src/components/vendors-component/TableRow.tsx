import React from "react";

const TableRow = ({ order }: any) => {
  return (
    <tr className="">
      <td className="bg-black py-4 text-white px-2 border-r border-white text-sm font-normal">
        <input type="radio" className="w-4 h-4" />
      </td>
      <td className="bg-black py-4 text-white px-2 border-r border-white text-sm font-normal">
        {order.order_details}
      </td>
      <td className="bg-black py-4 text-white px-2 border-r border-white text-sm font-normal">
        {order.order_number}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white text-sm font-normal">
        {order.confirmation_data}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white text-sm font-normal">
        {order.updated_date}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white text-sm font-normal">
        {order.price}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white text-sm font-normal">
        {order.quantity}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white text-sm font-normal">
        {order.order_status}
      </td>
    </tr>
  );
};

export default TableRow;
