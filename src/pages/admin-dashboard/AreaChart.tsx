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

// const labels = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

export const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      fill: true,
      data: [100, 200, 150, 300, 250, 180, 210], // Replace this array with your data
      borderColor: "rgba(8, 75, 40, 0.2)",
      backgroundColor: "rgba(8, 75, 40, 0.2)",
    },
  ],
};

export function AreaChart() {
  return (
    <div className="bg-[#F4F4F4]">
      <form className="mt-4 flex items-center justify-between">
        <div>
          <span className=" px-3 font-medium">Sales Overview</span>
        </div>
        <div className="mt-4 flex items-center gap-4 px-4">
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
