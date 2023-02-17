import React from "react";

const TableRow = ({ order }: any) => {
  return (
    <tr className="">
      <td className="bg-black py-4 text-white px-2 border-r border-white">
        <input type="radio" className="w-4 h-4" />
      </td>
      <td className="bg-black py-4 text-white px-2 border-r border-white">
        {order.order_details}
      </td>
      <td className="bg-black py-4 text-white px-2 border-r border-white">
        {order.order_number}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white">
        {order.confirmation_data}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white">
        {order.updated_date}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white">
        {order.price}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white">
        {order.quantity}
      </td>
      <td className="bg-black text-white py-4 px-2 border-r border-white">
        {order.order_status}
      </td>
    </tr>
  );
};

export default TableRow;
