import React, { useEffect, useMemo, useState } from "react";
import { AreaChart } from "./AreaChart";
import {
  useGetAdminGraph,
  useGetAdminOverview,
  useGetAllAdminOverview,
  useGetOrders,
} from "../../services/hooks/orders";
import { CgSpinner } from "react-icons/cg";
import TopStoresRating from "./TopStoresRating";
import AdminOverviewTopProduct from "./AdminOverviewTopProduct";
import AdminOverviewRating from "./AdminOverviewRating";
import { filter } from "lodash";

const today = new Date();
const month = String(today.getMonth()).padStart(2, "0");
const year = today.getFullYear();
const start = `${year}-${month}-01`;
const end = `${year}-${month}-${new Date(year, +month, 0).getDate()}`;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Overview = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { data: ordersList, isLoading } = useGetOrders();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const { data: graph } = useGetAdminGraph(start, end);
  const {
    data: overview,
    isLoading: loading,
    refetch,
  } = useGetAllAdminOverview();
  const [adminOverview, setAdminOverview] = useState<any>({});
  const filteredData = overview?.data?.find((data: any) => {
    const date = new Date(data?.overViewDate);
    const month = `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString().padStart(2, "0")}`;
    console.log(
      month,
      `${new Date().getFullYear()}-${String(selectedMonth).padStart(2, "0")}`,
      "monthssss",
    );

    return (
      month ===
      `${new Date().getFullYear()}-${String(selectedMonth).padStart(2, "0")}`
    );
  });

  const chartData = graph?.data?.weeklySalesOverview;
  

  useEffect(() => {
    !loading &&
      setAdminOverview((prev: any) => {
        const data = filteredData;
        console.log(data);
        return { ...prev, ...data };
      });
  }, [selectedMonth]);
  console.log("Current graph:", graph?.data?.weeklySalesOverview);

  // console.log("First day of the month:", firstDay);
  console.log("Last day of the month:", selectedMonth, adminOverview);

  console.log(filteredData, "filteredData");

  const color = (val: {
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | null
      | undefined;
    figure:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | null
      | undefined;
  }) => {
    switch (val?.title) {
      case "Pending Orders":
        return (
          <>
            <h1 className="text-xs font-light text-[#F29339]">{val?.title}</h1>
            <span className="text-xl font-medium text-[#F29339]">
              {loading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                val?.figure
              )}
            </span>
          </>
        );
      case "Fulfilled Orders":
        return (
          <>
            <h1 className="text-xs font-light text-[#22C55E]">{val?.title}</h1>
            <span className="text-xl font-medium text-[#22C55E]">
              {isLoading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                val?.figure
              )}
            </span>
          </>
        );
      case "Failed Orders":
        return (
          <>
            <h1 className="text-xs font-light text-[#F91919]">{val?.title}</h1>
            <span className="text-xl font-medium text-[#F91919]">
              {isLoading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                val?.figure
              )}
            </span>
          </>
        );

      default:
        return (
          <>
            <h1 className="text-xs font-light text-[#A2A2A2]">{val?.title}</h1>
            <span className="text-xl font-medium">
              {isLoading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                val?.figure
              )}
            </span>
          </>
        );
    }
  };

  useEffect(() => {
    if (!isLoading) setOrders(ordersList?.data.data);
  }, [ordersList?.data.data, isLoading]);

  useEffect(() => {}, [selectedMonth]);

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  // OVERVIEW STATS
  // const totalSales = orders.reduce(
  //   (acc: any, order: any, index: number) => acc + order?.subtotal,
  //   0,
  // );

  const itemsSold = orders
    ?.map((order: any) => order?.productDetails.length)
    .reduce((acc: any, cur: any) => acc + cur, 0);

  const getOrderStatusLength = (orders: any[], status: string) => {
    return orders?.filter((order) => order?.status.toLowerCase() === status)
      ?.length;
  };

  // console.log(orders);
  // console.log(itemsSold);

  const data = [
    {
      id: "1",
      title: "Total Sales",
      figure: `₦${adminOverview?.totalSales?.toLocaleString() ?? 0}` || 0,
    },
    {
      id: "2",
      title: "Daily Revenues",
      figure:
        `₦${Math.trunc(adminOverview?.averageDailyRevenues ?? 0)?.toLocaleString()}` ||
        0,
    },
    {
      id: "3",
      title: "Items Sold",
      figure: `${adminOverview?.totalItemsSold ?? 0}` || 0,
    },
    {
      id: "4",
      title: "Average Order Value",
      figure:
        `₦${Math.trunc(adminOverview?.averageOrderValue ?? 0)?.toLocaleString()}` ||
        0,
    },
    {
      id: "5",
      title: "Total Orders",
      figure: `${adminOverview?.totalOrders ?? 0}` || 0,
    },
  ];

  const orderData = [
    {
      id: "1",
      title: "Average Daily Order",
      figure: `${Math.trunc(filteredData?.averageDailyOrders ?? 0)}` || 0,
    },
    {
      id: "2",
      title: "Pending Orders",
      figure: `${filteredData?.totalPendingOrders ?? 0}` || 0,
    },
    {
      id: "3",
      title: "Fulfilled Orders",
      figure: `${filteredData?.totalCompletedOrders ?? 0}` || 0,
    },
    {
      id: "4",
      title: "Failed Orders",
      figure: `${filteredData?.totalFailedOrders ?? 0}` || 0,
    },
    {
      id: "5",
      title: "Returned Order",
      figure: `${filteredData?.totalReturnedOrders ?? 0}` || 0,
    },
  ];

  const filterOrders = orders?.filter((order: any) => {
    const orderY = new Date(order?.orderDate).getFullYear();
    const orderD = new Date(order?.orderDate).getMonth() + 1;
    console.log("filter", orderD, selectedMonth);
    return orderY === year && orderD === selectedMonth;
  });

  return (
    <div className="py-6 pl-8 pr-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Overview</h1>
          <span className="text-sm font-normal text-[#A2A2A2]">
            This is an overview of Porker Hut.
          </span>
        </div>
        <select
          onChange={(e: any) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
          className="rounded-sm border border-neutral-200 focus:border-green-700 focus:ring-green-700"
        >
          {months?.map((month: any, index: any) => {
            const disabled = index + 1 > currentMonth;

            return (
              <option key={index} value={index + 1} disabled={disabled}>
                {month} {currentYear}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex items-center justify-items-stretch">
        <div className="flex h-full flex-1 flex-col items-start justify-center gap-2 rounded-l-sm border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] px-6 py-3">
          <h1 className="text-xs font-normal  text-[#A2A2A2]">Total Sales</h1>
          <span className="text-xl font-medium">
            {loading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              `₦${filteredData?.totalSales?.toLocaleString() || 0}`
            )}
          </span>
        </div>
        <div className="flex h-full flex-1 flex-col items-start justify-center gap-2 rounded-l-sm border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] px-6 py-3">
          <h1 className="text-xs font-normal  text-[#A2A2A2]">
            Daily Revenues
          </h1>
          <span className="text-xl font-medium">
            {loading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              `₦${Math.trunc(filteredData?.averageDailyRevenues ?? 0)?.toLocaleString()}`
            )}
          </span>
        </div>
        <div className="flex h-full flex-1 flex-col items-start justify-center gap-2 rounded-l-sm border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] px-6 py-3">
          <h1 className="text-xs font-normal  text-[#A2A2A2]">Items Sold</h1>
          <span className="text-xl font-medium">
            {loading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              `${filteredData?.totalItemsSold ?? 0}`
            )}
          </span>
        </div>
        <div className="flex h-full flex-1 flex-col items-start justify-center gap-2 rounded-l-sm border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] px-6 py-3">
          <h1 className="text-xs font-normal  text-[#A2A2A2]">
            Average Order Value
          </h1>
          <span className="text-xl font-medium">
            {loading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              `${Math.trunc(filteredData?.averageOrderValue ?? 0)?.toLocaleString()}`
            )}
          </span>
        </div>
        <div className="flex h-full flex-1 flex-col items-start justify-center gap-2 rounded-l-sm border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] px-6 py-3">
          <h1 className="text-xs font-normal  text-[#A2A2A2]">Total Orders</h1>
          <span className="text-xl font-medium">
            {loading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              `${filteredData?.totalOrders ?? 0}`
            )}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-items-stretch">
        {orderData.map((val) => (
          <div
            key={val.id}
            className="flex h-full flex-1 flex-col items-start justify-center gap-2 rounded-l-sm border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] px-6 py-3"
          >
            <div>{color(val)}</div>
          </div>
        ))}
      </div>

      <div className="my-4">
        <AreaChart values={chartData} />
      </div>

      <div className="mt-8 grid grid-cols-3 items-center gap-4">
        <TopStoresRating />
        <AdminOverviewTopProduct />
        <AdminOverviewRating />
      </div>
    </div>
  );
};

export default Overview;
