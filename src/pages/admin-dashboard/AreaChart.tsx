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
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
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
    <div style={{ height: "380px" }} className="bg-[#F4F4F4]">
      <form className="flex items-center justify-between mt-4">
        <div>
          <span className=" font-medium px-3">Sales Overview</span>
        </div>
        <div className="flex gap-4 items-center px-4 mt-4">
          <label className="" htmlFor="week"></label>
          <input
            type="week"
            className="focus:outline-none border h-10 w-42 px-2 rounded "
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
