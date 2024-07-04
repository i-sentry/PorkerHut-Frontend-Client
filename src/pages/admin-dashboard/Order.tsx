import React, { useEffect, useState } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import _ from "lodash";
import product1 from "../../assets/products/prod2.png";
import product3 from "../../assets/products/porkleg.png";
import product5 from "../../assets/products/prod5.png";
import product6 from "../../assets/products/prod6.png";
import product7 from "../../assets/products/pork2.png";
import product8 from "../../assets/products/prod8.png";
import product9 from "../../assets/products/prod9.png";
import product from "../../assets/products/product.png";
import prod from "../../assets/products/prod.png";
import { useGetOrders } from "../../services/hooks/orders";
import { Tooltip } from "../../components/utility/ToolTip";
import moment from "moment";
import logo from "../../assets/images/porkerlogo.png";

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
        <span className="text-sm font-normal text-[#202223] ">{data}</span>
      );
  }
};

const DateColumn = ({ d }: any) => {
  const createdAt = d.orderDate;

  const formattedDate = moment(createdAt).format("DD MMMM YYYY");
  const formattedTime = moment(createdAt).format("h:mmA").toLowerCase();
  return (
    <div className="flex flex-col items-start">
      <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        {formattedDate}
      </span>
      <span className="mt-1 text-sm font-light capitalize text-neutral-400">
        {formattedTime}
      </span>
    </div>
  );
};

const StoreNameColumn = ({ d }: any) => {
  const { vendor } = d;

  const storeName =
    d?.productDetails[0]?.productID?.vendor?.sellerAccountInformation
      ?.shopName || "";
  const storeCity =
    d?.productDetails[0]?.productID?.vendor?.businessInformation?.city || "";
  return (
    <div className="flex flex-col items-start">
      <span className=" whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        {storeName}
      </span>
      <span className="mt-1 text-sm font-light capitalize text-neutral-400">
        {storeCity}
      </span>
    </div>
  );
};

export const ProductNameColumn = ({ data }: any) => {
  const adata = data?.productDetails[0]?.productID?.information?.productName;
  const lowerData = adata?.toLowerCase();
  const productName = _.startCase(lowerData);
  return (
    <div className="flex items-center gap-2">
      <figure className="h-9 w-9 rounded-full border">
        <img
          src={data?.productDetails[0]?.productID?.images[0]}
          alt="product"
          className="h-full w-full rounded-full object-cover"
        />
      </figure>
      <span className="whitespace-nowrap text-sm font-light  text-[#333333]">
        {productName}
      </span>
    </div>
  );
};
export const OrderData = [
  {
    id: "1",
    img: product,
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
    img: prod,
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
    img: product3,
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
    img: product1,
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
    img: product6,
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
    img: product8,
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
    img: product9,
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
    img: product5,
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
    img: product3,
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
    img: product7,
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

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Product Name",
    accessor: (row: any) => {
      return <ProductNameColumn data={row} />;
    },
  },
  {
    Header: "Store Name",
    accessor: (row) => {
      return <StoreNameColumn d={row} />;
    },
    // @ts-ignore

    // row.productDetails[0]?.vendor?.sellerAccountInformation?.shopName,
    // Cell: (data: any) => {
    //   const d = data.row.original;
    //   return <StoreNameColumn d={d} />;
    // },
  },
  {
    Header: "Order Date",
    accessor: "orderDate",
    Cell: (data) => {
      const d = data?.row.original;

      return <DateColumn d={d} />;
    },
  },
  {
    Header: "Order ID",
    accessor: (row: any) => (
      <Tooltip message={row?._id}>
        <span className="cursor-pointer">{row?._id.slice(0, 10)}...</span>
      </Tooltip>
    ),
  },
  {
    Header: "Prices",
    accessor: (row) =>
      // @ts-ignore
      `₦${row.productDetails[0]?.price.toLocaleString()}`,
  },
  {
    Header: "Quantity",
    accessor: (row: any) => row?.productDetails?.length,
  },
  {
    Header: "Order Total",
    accessor: (row: any) => `₦${row?.totalAmount.toLocaleString()}`,
  },
  {
    Header: "Order Status",
    accessor: (row: any) => {
      switch (row?.status?.toLowerCase()) {
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
            <span className="text-sm font-normal text-[#202223] ">
              {row?.status}
            </span>
          );
      }
    },
  },
  {
    Header: "Payment Status",
    accessor: (row: any) => {
      if (row?.isPaid) {
        return (
          <span className="rounded bg-green-700 bg-opacity-10 p-1 px-3 text-green-700">
            Success
          </span>
        );
      } else {
        return (
          <span className="rounded bg-red-600 bg-opacity-10 p-1 px-3 text-red-600">
            Failed
          </span>
        );
      }
    },
  },
];

const Order = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { data: ordersList, isLoading } = useGetOrders();
  useEffect(() => {
    if (!isLoading)
      setOrders(
        ordersList?.data?.data?.toSorted(
          (a: any, b: any) =>
            new Date(b?.orderDate).getTime() - new Date(a?.orderDate).getTime(),
        ),
      );
  }, [ordersList?.data.data, isLoading]);
  const navigate = useNavigate();

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
    accessor: (row: any) => {
      const handleView = (id: any) => {
        navigate(`/admin/order/${id}`, {
          replace: true,
        });
        window.scrollTo(0, 0);
      };

      return (
        <div>
          <span
            onClick={() => handleView(row?._id)}
            className="flex cursor-pointer items-center gap-3 text-sm text-[#333333] underline transition-all ease-in-out hover:text-[#0eb683] active:scale-90 "
          >
            View
          </span>
        </div>
      );
    },
  };

  return (
    <div className="py-6 pl-8 pr-5">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Orders</h1>
        <span className="text-sm font-normal text-[#A2A2A2]">
          All Information available
        </span>
      </div>
      <div>
        {isLoading && (
          <div className="flex h-[50vh] w-full flex-col items-center justify-center">
            <img
              src={logo}
              alt="loaderLogo"
              className="h-20 w-20 animate-pulse"
            />
            <p className="text-[14px] leading-[24px] text-[#333333]">
              Fetching Data...
            </p>
          </div>
        )}

        {!isLoading && orders?.length ? (
          <AdminTable
            Tcolumns={Tcolumns}
            // @ts-ignore
            optionalColumn={optionalColumn}
            tabs={["All", "Pending", "Completed", "Failed", "Returned"]}
            TData={orders}
            placeholder={"Search product name, store names, category.... "}
            showDropDown={true}
            dropDownOption={[
              {
                value: "please_select_an_action",
                label: "Please select an action",
              },
              { label: "Push Order", value: "push_order" },
              { label: "Decline Order", value: "decline_order" },
              { label: "Delete Order", value: "delete_order" },
            ]}
          />
        ) : (
          ""
        )}

        {!isLoading && orders?.length < 1 && (
          <div className="flex items-center justify-center py-10 px-4 text-neutral-500">
            No Orders Yet...
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
