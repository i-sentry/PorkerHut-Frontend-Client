import React, { useState } from "react";
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from "react-icons/hi";
import CustomerReview from "./CustomerReview";
import DoughnutChart from "./DoughnutChart";
import { AreaChart } from "./AreaChart";
import { useGetOrders } from "../../services/hooks/orders";

// function filterWeekly(array: any, referenceDate: any) {
//   const oneWeek = 7 * (24 * 60 * 60 * 1000); // Number of milliseconds in one week

//   const filtered = array.filter((obj: any) => {
//     const diff = Math.abs(referenceDate - obj?.orderDate);
//     return diff < oneWeek; // Filter objects within one week of the reference date
//   });

//   return filtered;
// }

const Analytics = () => {
  // const [orders, setOrders] = useState([])
  const { data, isLoading } = useGetOrders();
  const orders = data?.data?.data;

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Analytics</h1>
        <span className="text-sm font-normal text-[#A2A2A2]">
          Monitor every activity here
        </span>
      </div>

      <div className="h-28 items-center justify-center gap-4 md:grid md:grid-cols-4 ">
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Revenue</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">N400</span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Orders</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">912</span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingDown size={20} className="text-[#F91919]" />
              <span className="text-[#F91919]">-5%</span>
            </span>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Visitors</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">12.5K</span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col justify-center  gap-2 rounded  bg-[#F4F4F4] px-6">
          <h1 className="font-normal text-[#A2A2A2]">Conversion</h1>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">52%</span>
            <span className="flex items-center gap-2">
              <HiOutlineTrendingUp size={20} className="text-[#22C55E]" />
              <span className="text-[#22C55E]">+10%</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <DoughnutChart />
        <CustomerReview rating={0} />
      </div>

      <div className="mt-4 ">
        <AreaChart />
      </div>
    </div>
  );
};

export default Analytics;
