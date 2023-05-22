import React from "react";
import StepperComponent from "../../components/step/StepperComponent";
import { HiOutlineSearch } from "react-icons/hi";
import Table from "../../components/Table/Table";
import { Column } from "react-table";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";
import Table_Data from "../../utils/json/Table_Data.json";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";


export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "completed":
      return <span className="text-[#22C55E]">Completed</span>;

    case "failed":
      return <span className=" text-[#F91919]">Failed</span>;
    case "pending":
      return <span className=" text-[#F29339]">Pending</span>;
    case "returned":
      return <span className=" text-[#198df9]">Returned</span>;
    case "returned Failed":
      return <span className=" text-[#F91919]">Returned Failed</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};

export const ProductNameColumn = ({ data }: any) => {
  console.log(data?.row?.original?.img, "data");
  const adata = data?.cell?.value;
  const lowerData = adata?.toLowerCase();
  const productName = _.startCase(lowerData);
  return (
    <div className="flex items-center gap-2">
      <span className="text-[16px] leading-[19px] font-normal whitespace-nowrap  text-[#333333]">
        {productName}
      </span>
    </div>
  );
};

const SellersProductPage = () => {
  const Tcolumns: Column<{}>[] = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Created",
      accessor: "create",
    },
    {
      Header: "Product ID",
      accessor: "product_id",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },

    {
      Header: "Visible",
      accessor: "visible",
    },
    {
      Header: "Active",
      accessor: "active",
      Cell: ({ row }: any) => (
        <div>
          <ToggleSwitch />
        </div>
      ),
    },
    {
      Header: "Action",
      Cell: ({ row }: any) => (
        <NavLink
          to={`/sellers-dashboard/product/seller-stepper/${row.id}`}
          className="underline"
        >
          Edit
        </NavLink>
      ),
    },
  ];

  

  return (
    <div className="pb-10">
      <div className="">
        <h1 className="text-[36px] leading-[42px] font-medium mb-6 ">
          Manage Products
        </h1>
        <div className="mb-8 ">
          <span className="text-[14px] leading-[16px] font-normal text-[#A2A2A2]">
            The product overview where all products are managed.
          </span>
        </div>
      </div>

      <div className="mt-10">
        <AdminTable
          Tcolumns={Tcolumns}
          // @ts-ignore
          // optionalColumn={optionalColumn}
          tabs={["All", "Pending", "Completed", "Failed", "Returned"]}
          TData={Table_Data}
          placeholder={"Search product name, store names, category.... "}
          optionalColumn={null}
         
        />
      </div>
    </div>
  );
};

export default SellersProductPage;
