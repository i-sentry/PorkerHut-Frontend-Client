import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { HiOutlineTrendingUp } from "react-icons/hi";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [30, 35, 35],
        backgroundColor: ["#F29339", "#22C55E", "#F91919"],
        // borderColor: [
        //   "black", "red", "blue"

        // ],

        width: [],
      },
    ],
  };

  return (
    <div className="px-4 bg-[#F4F4F4] py-4 w-[40%] h-[255px]">
      <div className="flex items-center justify-between">
        <h1 className=" font-medium">Order status</h1>
        <HiOutlineTrendingUp />
      </div>

      <div className="flex gap-6 items-center">
        <div style={{ width: "200px", height: "200x" }}>
          <Doughnut data={data}>
            <span>100%</span>
          </Doughnut>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#22C55E] h-3 w-3"></div>
            <span className="text-[#A2A2A2] text-sm">Completed</span>
            <span>35%</span>
          </div>
          <div className="flex  items-center gap-4">
            <div className="bg-[#F29339] h-3 w-3"></div>
            <span className="text-[#A2A2A2] text-sm">Pending</span>
            <span>30%</span>
          </div>
          <div className="flex  items-center gap-4">
            <div className="bg-[#F91919] h-3 w-3"></div>
            <span className="text-[#A2A2A2] text-sm">Declined</span>
            <span>30%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
