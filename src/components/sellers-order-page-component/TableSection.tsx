import React from "react";
import ExpandableButton from "./ExpandableButton";
import TableRow from "./TableRow";
import UseOpenControl from "../../hooks/UseOpenControl";

interface OrderProps {
  id: string;
  order_number: string;
  confirmation_data: string;
  updated_date: string;
  price: string;
  quantity: string;
  order_status: string;
}

interface TableSectionProps {
  order: OrderProps;
  index: number;
}

const TableSection: React.FC<TableSectionProps> = ({ order, index }) => {
  const { isOpen, toggle } = UseOpenControl(false);
  return (
    <tbody className="">
      <tr className="border border-[#D9D9D9] ">
        <td className="p-2  border-white">
          <input type="radio" className="w-4 h-4" />
        </td>
        <td className="px-2 py-4 border-r-2  border-r-[#D9D9D9]">
          <ExpandableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td className=" border-white text-sm font-normal border-r-2  border-r-[#D9D9D9] px-2 py-4">
          {order.order_number}
        </td>
        <td className="text-sm font-normal border-r-2  border-r-[#D9D9D9] px-2 py-4">
          {order.confirmation_data}
        </td>
        <td className="text-sm font-normal border-r-2  border-r-[#D9D9D9] px-2 py-4">
          {order.updated_date}
        </td>
        <td className="text-sm font-normal border-r-2  border-r-[#D9D9D9] px-2 py-4">
          {order.price}
        </td>
        <td className="text-sm font-normal border-r-2  border-r-[#D9D9D9] px-2 py-4">
          {order.quantity}
        </td>
        <td className="text-sm font-normal px-2">{order.order_status}</td>
      </tr>
      {isOpen && <TableRow order={order} />}
    </tbody>
  );
};

export default TableSection;
