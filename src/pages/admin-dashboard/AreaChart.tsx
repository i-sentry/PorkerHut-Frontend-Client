import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "",
      left: "top" as const,
    },
  },
};


export function AreaChart({ values }: { values?: any }) {
  const days = values?.dailyOverview?.map((day: any) => day?.dayOfWeek);
  const sales = values?.dailyOverview?.map(
    (day: any) => day?.dailySalesNotPaid + day?.dailySalesPaid,
  );

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = {
    labels: daysOfWeek,
    datasets: [
      {
        fill: true,
        data: sales, 
        borderColor: "rgba(8, 75, 40, 0.2)",
        backgroundColor: "rgba(8, 75, 40, 0.2)",
      },
    ],
  };

  return (
    <div className="bg-[#F4F4F4]">
      <form className="flex items-center justify-between pt-8">
        <div className="mb-3">
          <span className=" px-3 pb-4 font-medium">Sales Overview</span>
        </div>
        <div className="mt-4 hidden items-center gap-4 px-4">
          <label className="" htmlFor="week"></label>
          <input
            type="week"
            className="w-42 h-10 rounded border px-2 focus:outline-none "
          />
        </div>
      </form>
      <Line
        options={options}
        data={data}
        style={{
          paddingLeft: "10px",
          height: "60px",
          backgroundColor: "#F4F4F4",
        }}
      >
        {" "}
      </Line>
    </div>
  );
}
