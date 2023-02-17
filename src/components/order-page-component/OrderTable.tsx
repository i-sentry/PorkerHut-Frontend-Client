import React from "react";
import TableSection from "./TableSection";

interface DataProps {}

const OrderTable = () => {
  const OrderData = [
    {
      id: "1",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "2",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "3",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "4",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "5",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "6",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "7",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "8",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
    {
      id: "9",
      order_details:
        "Paul Okoye - 4 Water Corporation Road, Water Coperation Road, Victoria Island Lagos State 0907234556",
      order_number: "000123456",
      confirmation_data: "21 September 2022",
      updated_date: "21 September 2022",
      price: "32,500",
      quantity: "4",
      order_status: "PLACED",
    },
  ];
  return (
    <div className=" ">
      <div className="mt-4">
        <table className=" min-w-full">
          <thead className=" py-5 px-5 bg-[#F4F4F4]">
            <tr>
              <td className="px-5 py-5"></td>
              <td className="px-5 py-5"></td>
              <td className="px-5 py-5">Order Number</td>
              <td className="px-5 py-5">Confirmation Date</td>
              <td className="px-5 py-5">Updated Date</td>
              <td className="px-5 py-5">Price</td>
              <td className="px-5 py-5">Quantity</td>
              <td className="px-5 py-5">Status</td>
            </tr>
          </thead>
          {/* <tbody>
            {OrderData.map((order) => (
                <tr key={order.id}>
                    <td>
                        <input type="radio" />
                    </td>
                    <td>Details </td>
                </tr>
            ))}
          </tbody> */}

          {OrderData.map((order, index) => (
            <TableSection order={order} index={index} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
