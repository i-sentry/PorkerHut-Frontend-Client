import React, { useState } from "react";
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from "react-icons/hi";
import CustomerReview from "./CustomerReview";
import DoughnutChart from "./DoughnutChart";
import { AreaChart } from "./AreaChart";
import { useGetAdminOverview, useGetOrders } from "../../services/hooks/orders";
import { CgSpinner } from "react-icons/cg";

// function filterWeekly(array: any, referenceDate: any) {
//   const oneWeek = 7 * (24 * 60 * 60 * 1000); // Number of milliseconds in one week

//   const filtered = array.filter((obj: any) => {
//     const diff = Math.abs(referenceDate - obj?.orderDate);
//     return diff < oneWeek; // Filter objects within one week of the reference date
//   });

//   return filtered;
// }

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const start = `${year}-${month}-01`;
const end = `${year}-${month}-${new Date(year, +month, 0).getDate()}`;

const Analytics = () => {
  // const [orders, setOrders] = useState([])
  const { data, isLoading } = useGetOrders();
  const { data: overview, isLoading: loading } = useGetAdminOverview(
    start,
    end,
  );
  const adminOverview = overview?.data;
  const orders = data?.data?.data;
  console.log(adminOverview, "orders");

  const filterOrders = orders?.filter((order: any) => {
    const orderY = new Date(order?.orderDate).getFullYear();
    const orderD = new Date(order?.orderDate).getMonth();

    return orderY === year && orderD === today.getMonth() + 1;
  });

  console.log(filterOrders, "orders");

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="py-6 pl-8 pr-5">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Analytics</h1>
        <span className="text-sm font-normal text-[#A2A2A2]">
          Monitor every activity here
        </span>
      </div>

      <div className="h-28 items-center justify-center gap-4 md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr] ">
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Revenue</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              {loading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                `₦${adminOverview?.totalSales.toLocaleString() || 0}`
              )}
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Orders</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              {loading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                `${adminOverview?.totalOrders || 0}`
              )}
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingDown size={20} className="text-[#F91919]" />
              <span className="text-[#F91919]">-5%</span>
            </span>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Visitors</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              {loading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                `0K`
              )}
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Conversion</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              {loading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                `0%`
              )}
            </span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <DoughnutChart admin={adminOverview} />
        <CustomerReview rating={0} />
      </div>

      <div className="mt-4 ">
        <AreaChart />
      </div>
    </div>
  );
};

export default Analytics;
