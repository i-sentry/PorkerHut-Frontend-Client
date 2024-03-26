import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { HiOutlineTrendingUp } from "react-icons/hi";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ admin }: any) {
  const data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [
          admin?.totalPendingOrders,
          admin?.totalCompletedOrders,
          admin?.totalFailedOrders,
        ],
        backgroundColor: ["#F29339", "#22C55E", "#F91919"],
        // borderColor: [
        //   "black", "red", "blue"

        // ],

        width: [],
      },
    ],
  };

  const percentage = (orders: number) => {
    const AllOrders = admin?.totalOrders;

    return Math.round((orders / AllOrders) * 100);
  };

  return (
    <div className="h-[255px] w-[40%] bg-[#F4F4F4] px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className=" font-medium">Order status</h1>
        <HiOutlineTrendingUp />
      </div>

      <div className="flex items-center gap-6">
        <div style={{ width: "200px", height: "200x" }}>
          <Doughnut data={data}>
            <span>100%</span>
          </Doughnut>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 bg-[#22C55E]"></div>
            <span className="text-sm text-[#A2A2A2]">Completed</span>
            <span>{percentage(admin?.totalCompletedOrders) || 0}%</span>
          </div>
          <div className="flex  items-center gap-4">
            <div className="h-3 w-3 bg-[#F29339]"></div>
            <span className="text-sm text-[#A2A2A2]">Pending</span>
            <span>{percentage(admin?.totalPendingOrders) || 0}%</span>
          </div>
          <div className="flex  items-center gap-4">
            <div className="h-3 w-3 bg-[#F91919]"></div>
            <span className="text-sm text-[#A2A2A2]">Declined</span>
            <span>{percentage(admin?.totalFailedOrders) || 0}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
