import React, { useMemo, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Column } from "react-table";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import Table from "../../components/Table/Table";
import { column } from "../../components/Table/column";
import mockData from "../../utils/json/mockData.json";

type OrderDataProps = {
  id: string;
  title?: string;
  figure?: string;
};

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
export const OrderData = [
  {
    id: "1",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "2",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Failed",
  },
  {
    id: "3",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "4",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "5",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Completed",
  },
  {
    id: "6",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Failed",
  },
  {
    id: "7",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "8",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Returned",
  },
  {
    id: "9",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Failed",
  },
  {
    id: "10",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Completed",
  },
];

const orderData = [
  {
    id: "1",
    title: "Today",
  },
  {
    id: "2",
    title: "Pending Order",
    figure: "200",
  },
  {
    id: "3",
    title: "Ready to Go",
    figure: "300",
  },
  {
    id: "4",
    title: "Fufilled Orders",
    figure: "1000",
  },
  {
    id: "5",
    title: "Failed Orders",
    figure: "50",
  },
];

const SellersOrderPage = () => {
  const color = (val: { title: string; figure?: string | undefined }) => {
    switch (val?.title) {
      case "Pending Order":
        return (
          <>
            <h1 className="text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className="  text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      case "Ready to Go":
        return (
          <>
            <h1 className=" text-[#F29339] text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className="text-[#F29339] text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      case "Fufilled Orders":
        return (
          <>
            <h1 className="text-[#22C55E] text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className=" text-[#22C55E]  text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      case "Failed Orders":
        return (
          <>
            <h1 className=" text-[#F91919] text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className="text-[#F91919] text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      default:
        return (
          <>
            <h1 className=" text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className=" text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              {val?.figure}
            </span>
          </>
        );
    }
  };

  const dataSlider = [
    {
      id: 1,
      name: "Today",
      total: "",
    },
    {
      id: 2,
      name: "Today",
      total: 400,
    },
    {
      id: 3,
      name: "Today",
      total: 400,
    },
    {
      id: 4,
      name: "Today",
      total: 400,
    },
    {
      id: 5,
      name: "Today",
      total: 400,
    },
  ];

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Product Name",
      accessor: "product_name",
      Cell: (props: any) => <ProductNameColumn data={props} />,
    },
    {
      Header: "Store Name",
      accessor: "store_name",
    },
    {
      Header: "Order Date",
      accessor: "order_date",
    },
    {
      Header: "Order ID",
      accessor: "order_id",
    },
    {
      Header: "Prices",
      accessor: "price",
    },

    {
      Header: "Status",
      accessor: "order_status",
      Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
    },
  ];

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
  };

  const sortButton = (
    <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="12"
        viewBox="0 0 10 18"
        fill="none"
      >
        <path
          d="M5.00016 2.83L8.17016 6L9.58016 4.59L5.00016 0L0.410156 4.59L1.83016 6L5.00016 2.83ZM5.00016 15.17L1.83016 12L0.420156 13.41L5.00016 18L9.59016 13.41L8.17016 12L5.00016 15.17Z"
          fill="#323232"
        />
      </svg>
    </span>
  );

  return (
    <div className="pb-10">
      <h1 className="text-[36px] leading-[42px] font-medium mb-6 ">Orders</h1>
      <div className="md:flex h-20 items-center justify-center">
        {orderData.map(
          (val: { title: string; figure?: string | undefined }) => (
            <div className="bg-[#F4F4F4] h-full flex flex-col items-center justify-center flex-1 border-[#D9D9D9] border-r-[1px]">
              <div>{color(val)}</div>
            </div>
          )
        )}
      </div>

      <div className="mt-6 mb-8">
        <h1 className="my-4 text-[24px] leading-[28px] font-normal">
          Overview
        </h1>
      </div>

      <div className="">
        <AdminTable
          // @ts-ignore
          Tcolumns={column}
          // @ts-ignore
          optionalColumn={false}
          tabs={["All", "Pending", "Completed", "Failed", "Returned"]}
          TData={mockData}
          placeholder={"Search product name, store names, category.... "}
          showIcon={true}
        />
      </div>
    </div>
  );
};

export default SellersOrderPage;
