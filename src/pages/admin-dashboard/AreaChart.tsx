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
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

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

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
      borderColor: "rgba(8, 75, 40, 0.2)",
      backgroundColor: "rgba(8, 75, 40, 0.2)",
    },
  ],
};

export function AreaChart() {
  return (
    <div style={{height: '500px'}}>
      <Line
        options={options}
        data={data}
        style={{ paddingLeft: "10px", height: "100px" }}
      >
        {" "}
      </Line>
    </div>
  );
}
