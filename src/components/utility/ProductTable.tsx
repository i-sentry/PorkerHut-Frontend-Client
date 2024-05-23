import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "./ToolTip";

const ProductTable = ({ data }: any) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/products");
  };

  const date = moment(data?.createdAt).format("Do MMM YYYY");

  let statusClassName = "";
  let formattedStatus = "";

  switch (data?.approvalStatus) {
    case "rejected":
      statusClassName = "text-[#F91919]";
      formattedStatus = "Rejected";
      break;
    case "approved":
      statusClassName = "text-[#22C55E]";
      formattedStatus = "Approved";
      break;
    case "false":
    case "pending":
      statusClassName = "text-[#F29339]";
      formattedStatus = "Pending";
      break;
    default:
      statusClassName = "text-gray-500";
      formattedStatus = "Unknown";
  }

  return (
    <table className="min-w-full divide-y divide-gray-400 rounded-sm">
      <thead>
        <tr>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Product Name
          </th>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Store Name
          </th>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Category
          </th>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Product ID
          </th>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Created
          </th>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Quantity
          </th>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Price
          </th>
          <th className="border bg-[#F4F4F4] px-6 py-4 text-left  text-[11px] font-medium uppercase leading-normal tracking-wider text-[#333]">
            Status
          </th>
          <th className="hidden border bg-[#F4F4F4] px-6 py-4"></th>{" "}
          {/* Empty header */}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-400 bg-white">
        <tr className="hover:bg-green-100">
          <td className="whitespace-no-wrap border px-6 py-3 text-[13px] capitalize leading-normal text-[#333]">
            {data?.information?.productName}
          </td>
          <td className="whitespace-no-wrap border px-6 py-3 text-[13px] capitalize leading-normal text-[#333]">
            {data?.vendor?.sellerAccountInformation?.shopName}
          </td>
          <td className="whitespace-no-wrap border px-6 py-3 text-[13px] leading-normal text-[#333]">
            {data?.information?.category?.name}
          </td>
          <td className="whitespace-no-wrap w-32 truncate border px-6 py-3 text-[13px] leading-normal text-[#333]">
            <Tooltip message={data?._id}>{data?._id.slice(0, 10)}</Tooltip>
          </td>

          <td className="whitespace-no-wrap border px-6 py-3 text-[13px] leading-normal text-[#333]">
            {date}
          </td>
          <td className="whitespace-no-wrap border px-6 py-3 text-[13px] leading-normal text-[#333]">
            {data?.pricing?.quantity}
          </td>
          <td className="whitespace-no-wrap border px-6 py-3 text-[13px] leading-normal text-[#333]">
            NGN {data?.pricing?.productPrice.toLocaleString()}
          </td>
          <td
            className={`whitespace-no-wrap border px-6 py-3 text-[13px] leading-normal ${statusClassName}`}
          >
            {formattedStatus}
          </td>
          <td className="whitespace-no-wrap hidden border px-6 py-3 text-[13px] leading-normal text-[#333]">
            <button
              className=" rounded py-1 text-[#333] underline hover:text-[#a10]"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
