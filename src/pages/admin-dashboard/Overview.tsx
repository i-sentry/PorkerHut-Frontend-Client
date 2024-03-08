import React, { useEffect, useState } from "react";
import { AreaChart } from "./AreaChart";
import { useGetOrders } from "../../services/hooks/orders";
import { CgSpinner } from "react-icons/cg";

const Overview = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { data: ordersList, isLoading } = useGetOrders();
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
            <span className="text-xl font-medium">{val?.figure}</span>
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
  const totalSales = orders.reduce(
    (acc: any, order: any, index: number) => acc + order?.subtotal,
    0,
  );

  const dailyRevenue = orders
    ?.filter((order: any) => {
      const currentDate = new Date();
      const orderDate = new Date(order?.orderDate);
      return (
        orderDate.getFullYear() === currentDate.getFullYear() &&
        orderDate.getMonth() === currentDate.getMonth() &&
        orderDate.getDate() === currentDate.getDate()
      );
    })
    .reduce((acc: any, cur: any) => acc + cur?.subtotal, 0);

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
      figure: `₦${totalSales.toLocaleString()}`,
    },
    {
      id: "2",
      title: "Daily Revenues",
      figure: `₦${dailyRevenue.toLocaleString()}`,
    },
    {
      id: "3",
      title: "Items Sold",
      figure: `${itemsSold}`,
    },
    {
      id: "4",
      title: "Average Order Value",
      figure: `${Math.trunc(totalSales / orders?.length).toLocaleString()}`,
    },
    {
      id: "5",
      title: "Total Orders",
      figure: `${orders?.length}`,
    },
  ];

  const orderData = [
    {
      id: "1",
      title: "Average Daily Order",
      figure: "200",
    },
    {
      id: "2",
      title: "Pending Orders",
      figure: `${getOrderStatusLength(orders, "pending")}`,
    },
    {
      id: "3",
      title: "Fulfilled Orders",
      figure: `${getOrderStatusLength(orders, "completed")}`,
    },
    {
      id: "4",
      title: "Failed Orders",
      figure: `${getOrderStatusLength(orders, "failed")}`,
    },
    {
      id: "5",
      title: "Returned Order",
      figure: `${getOrderStatusLength(orders, "returned")}`,
    },
  ];

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Overview</h1>
        <span className="text-sm font-normal text-[#A2A2A2]">
          This is an overview of Porker Hut.
        </span>
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
                val?.figure
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

      {/* <div className="grid grid-cols-3 items-center mt-8 gap-4">
        <TopStoresRating />
        <AdminOverviewTopProduct />
        <AdminOverviewRating />
      </div> */}
    </div>
  );
};

export default Overview;
