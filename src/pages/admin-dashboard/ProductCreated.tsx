import React, { useState } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import _ from "lodash";
import { productData } from "../../utils/productData";

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "approved":
      return <span className="text-[#22C55E]">Approved</span>;

    case "rejected":
      return <span className=" text-[#F91919]">Rejected</span>;
    case "pending":
      return <span className=" text-[#F29339]">Pending</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};

export const ProductNameColumn = ({ data }: any) => {
  console.log(data?.row?.original?.img, "data");
  const adata = data?.cell?.row?.original?.product?.productName;
  const lowerData = adata?.toLowerCase();
  console.log(data?.cell?.row?.original?.product?.productName);
  const productName = _.startCase(lowerData);
  return (
    <div className="flex items-center gap-2">
      <figure className="h-9 w-9 rounded-full border">
        <img
          src={data?.row?.original?.img}
          alt="product"
          className="rounded-full object-cover w-full h-full"
        />
      </figure>
      <span className="font-light text-sm whitespace-nowrap  text-[#333333]">
        {productName}
      </span>
    </div>
  );
};

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Product Name",
    accessor: "productName",
    Cell: (props: any) => <ProductNameColumn data={props} />,
  },
  {
    Header: "Store Name",
    accessor: "title",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Product ID",
    accessor: "id",
  },
  {
    Header: "Created",
    accessor: "location",
  },
  {
    Header: "Quantity",
    accessor: "weight",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

const ProductCreated = () => {
  const optionalColumn = {
    id: "expand",
    // The header can use the table's getToggleAllRowsSelectedProps method
    // to render a checkbox
    Header: (
      <div>
        {/* <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} /> */}
      </div>
    ),
    // The cell can use the individual row's getToggleRowSelectedProps method
    // to the render a checkbox
    Cell: ({ row }: any) => {
      const navigate = useNavigate();

      const handleView = (id: any) => {
        navigate(`/admin/product/${id}`, {
          replace: true,
        });
      };
      return (
        <div>
          <span
            onClick={() => handleView(row?.original?.id)}
            className="flex items-center gap-3 text-sm underline text-[#333333] active:scale-90 transition-all ease-in-out cursor-pointer hover:text-[#0eb683] "
          >
            View
          </span>
        </div>
      );
    },
  };

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Product Created</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          Find all created product here for approval.
        </span>
      </div>
      <div>
        <AdminTable
          Tcolumns={Tcolumns}
          // @ts-ignore
          optionalColumn={optionalColumn}
          tabs={["All", "Pending", "Approved", "Rejected"]}
          TData={productData}
          placeholder={"Search product name, store names, category.... "}
        />
      </div>
    </div>
  );
};

export default ProductCreated;
