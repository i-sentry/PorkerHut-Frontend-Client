import React, { useEffect, useState } from "react";
import { AreaChart } from "./AreaChart";
import { useGetAdminOverview, useGetOrders } from "../../services/hooks/orders";
import { CgSpinner } from "react-icons/cg";
import TopStoresRating from "./TopStoresRating";
import AdminOverviewTopProduct from "./AdminOverviewTopProduct";
import AdminOverviewRating from "./AdminOverviewRating";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const start = `${year}-${month}-01`;
const end = `${year}-${month}-${new Date(year, +month, 0).getDate()}`;

const Overview = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { data: ordersList, isLoading } = useGetOrders();
  const { data: overview, isLoading: loading } = useGetAdminOverview(
    start,
    end,
  );
  const adminOverview = overview?.data;
  // console.log("Current month:", totalSales);

  // console.log("First day of the month:", firstDay);
  // console.log("Last day of the month:", lastDay);

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
              {isLoading ? (
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

  console.log(orders);
  console.log(itemsSold);

  const data = [
    {
      id: "1",
      title: "Total Sales",
      figure: `₦${adminOverview?.totalSales.toLocaleString() ?? 0}`,
    },
    {
      id: "2",
      title: "Daily Revenues",
      figure: `₦${Math.trunc(adminOverview?.averageDailyRevenues ?? 0).toLocaleString()}`,
    },
    {
      id: "3",
      title: "Items Sold",
      figure: `${adminOverview?.totalItemsSold ?? 0}`,
    },
    {
      id: "4",
      title: "Average Order Value",
      figure: `₦${Math.trunc(adminOverview?.averageOrderValue ?? 0).toLocaleString()}`,
    },
    {
      id: "5",
      title: "Total Orders",
      figure: `${adminOverview?.totalOrders ?? 0}`,
    },
  ];

  const orderData = [
    {
      id: "1",
      title: "Average Daily Order",
      figure: `${Math.trunc(adminOverview?.averageDailyOrders ?? 0)}`,
    },
    {
      id: "2",
      title: "Pending Orders",
      figure: `${adminOverview?.totalPendingOrders ?? 0}`,
    },
    {
      id: "3",
      title: "Fulfilled Orders",
      figure: `${adminOverview?.totalFulfilledOrders ?? 0}`,
    },
    {
      id: "4",
      title: "Failed Orders",
      figure: `${adminOverview?.totalFailedOrders ?? 0}`,
    },
    {
      id: "5",
      title: "Returned Order",
      figure: `${adminOverview?.totalReturnedOrders ?? 0}`,
    },
  ];

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium ">Overview</h1>
          <span className="text-sm font-normal text-[#A2A2A2]">
            This is an overview of Porker Hut.
          </span>
        </div>
        <select>
          <option value="">ALL</option>
        </select>
      </div>
      <div className="flex items-center justify-items-stretch">
        {data.map((val) => (
          <div
            key={val.id}
            className="flex h-full flex-1 flex-col items-start justify-center gap-2 rounded-l-sm border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] px-6 py-3"
          >
            <h1 className="text-xs font-normal  text-[#A2A2A2]">
              {val?.title}
            </h1>
            <span className="text-xl font-medium">
              {isLoading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                val?.figure || 0
              )}
            </span>
          </div>
        ))}
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
        <AreaChart />
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
