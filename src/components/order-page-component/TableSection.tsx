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
    <tbody className="py-8 w-full">
      <tr className="border border-[#D9D9D9]">
        <td className="p-2 border-r border-white">
          <input type="radio" className="" />
        </td>
        <td className="button-td">
          <ExpandableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td className=" border-r border-white">{order.order_number}</td>
        <td>{order.confirmation_data}</td>
        <td>{order.updated_date}</td>
        <td>{order.price}</td>
        <td>{order.quantity}</td>
        <td>{order.order_status}</td>
      </tr>
      {isOpen && <TableRow order={order} />}
    </tbody>
  );
};

export default TableSection;
