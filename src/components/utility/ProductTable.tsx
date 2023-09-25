import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";



const ProductTable = ({ data }: any) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/products");
  };

  const date = moment(data?.createdAt).format("Do MMMM YYYY");

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
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Product Name
          </th>
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Store Name
          </th>
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Category
          </th>
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Product ID
          </th>
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Created
          </th>
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Quantity
          </th>
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-4 bg-[#F4F4F4] text-left text-[11px]  leading-normal border font-medium text-[#333] uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 border py-4 bg-[#F4F4F4]"></th>{" "}
          {/* Empty header */}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-400">
        <tr className="hover:bg-green-100">
          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border">
            {data?.information?.productName}
          </td>
          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border">
            {data?.storeName}
          </td>
          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border">
            {data?.information?.category?.name}
          </td>
          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border w-32 truncate">
            {data?._id}
          </td>

          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border">
            {date}
          </td>
          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border">
            {data?.pricing?.quantity}
          </td>
          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border">
            NGN {data?.pricing?.productPrice}
          </td>
          <td
            className={`px-6 py-3 text-[13px] leading-normal whitespace-no-wrap border ${statusClassName}`}
          >
            {formattedStatus}
          </td>
          <td className="px-6 py-3 text-[13px] leading-normal text-[#333] whitespace-no-wrap border">
            <button
              className=" text-[#333] py-1 underline hover:text-[#a10] rounded"
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
