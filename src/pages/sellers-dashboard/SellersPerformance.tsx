import React from "react";
import PerformanceWidget from "../../components/performanceComp/PerformanceWidget";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import ChartLayout from "../../components/vendors-component/ChatLayout";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const options = {
  responsive: true,
  bezierCurve: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    // x: {

    // },
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: true,
      },
    },
  },
  elements: {
    line: {
      tension: 0, // smooth lines
    },
  },
  layout: {
    padding: {
      bottom: 20,
      top: 10,
    },
  },
};

const SellersPerformance = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Assets Status",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "";
          const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.height);
          gradient.addColorStop(1, "rgba(166, 240, 187, 0.4)");
          gradient.addColorStop(0, "rgb(46,106,75)");
          return gradient;
        },
        borderColor: "#197b30",
        borderWidth: 0.9,
      },
    ],
  };
  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl text-[#333333] font-bold">Performance</h1>
      <p className="text-[#545353bf] text-sm ">
        This is an overview of your performance
      </p>
      <div className="w-full grid grid-cols-4 gap-4 xxs:gap-5 md:gap-3  whitespace-no wrap  xxs:mt-0 md:mt-4">
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={5}
          value={"# 100,00,00"}
          type={"Sales"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="lorem ispsum nesr jdhfdffs"
        />
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={5}
          value={"# 100,00,00"}
          type={"Sales"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="tomorrow ispsum he jdhfdffs"
        />
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={5}
          value={"# 100,00,00"}
          type={"Sales"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="lorem hhhshdsa nesr jdhfdffs"
        />
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={5}
          value={"# 100,00,00"}
          type={"Sales"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="pork meet ispsum hgh jdhfdffs"
        />
      </div>
      <div className="mb-20 overflow-y-scroll h-full mt-10">
        <ChartLayout
          title=""
          value={"Sales Overview"}
          options={[]}
          onSelectOption={[]}
          //@ts-ignore
          onSelectOption={(option) => {}}
          style={{ width: "100%" }}
        >
          {/* @ts-ignore */}
          <Line data={data} options={options} />
        </ChartLayout>
      </div>
    </div>
  );
};

export default SellersPerformance;
