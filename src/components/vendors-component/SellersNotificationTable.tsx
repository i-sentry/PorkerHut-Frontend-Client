import React from "react";
import ToggleSwitch from "../toggle-switch/ToggleSwitch";

const SellersNotificationTable = ({ storeEmail }: any) => {
  const data = [
    {
      id: 1,
      type: "new orders Notification",
      email: storeEmail,
    },
    {
      id: 2,
      type: "Newsletter feeds",
      email: storeEmail,
    },
    {
      id: 3,
      type: "Order Summary Report",
      email: storeEmail,
    },
    {
      id: 4,
      type: "Failed Delivery Report",
      email: storeEmail,
    },
  ];

  return (
    <table className="mb-10 w-full rounded bg-white">
      <thead className="">
        <tr className="border-b border-gray-300 py-3">
          <th className="py-3 text-[16px] font-normal leading-[19px]">Type</th>
          <th className="text-[16px] font-normal leading-[19px]">Email</th>
          <th className="text-[16px] font-normal leading-[19px]">Status</th>
        </tr>
      </thead>
      {data.map((item) => (
        <tbody key={item.id}>
          <tr className=" border border-b border-gray-300 ">
            <td className="border-r border-gray-300 px-8 py-3 text-[14px] font-normal capitalize leading-[24px]">
              {item.type}
            </td>
            <td className="border-r border-gray-300 px-4 py-3 text-[14px] font-normal leading-[16px]">
              {item.email}
            </td>
            <td className="px-8 py-3 text-[14px] font-normal leading-[16px]">
              <ToggleSwitch />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default SellersNotificationTable;
