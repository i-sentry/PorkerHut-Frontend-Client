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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import ChartLayout from "../../components/sellers-order-page-component/ChatLayout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SellersPerformance = () => {

 const data = {
   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
   datasets: [
     {
       //  label: "First dataset",
       data: [33, 53, 85, 41, 44, 65],
       fill: "start",
       backgroundColor: "rgb(46,106,75)",
       borderColor: "#197b30",

       label: "Visit",
       //  fill: "start",
       lineTension: 0,
       //  backgroundColor: "rgba(131,138,133,0.4)",
       //  borderColor: "rgba(131,138,133,1)",
       borderCapStyle: "butt",
       //  borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: "miter",
       pointBorderColor: "#197b30",
       pointBackgroundColor: "#fff",
       pointBorderWidth: 4,
       pointHoverRadius: 1,
       pointHoverBackgroundColor: "#ffff",
       pointHoverBorderColor: "#197b30",
       pointHoverBorderWidth: 1,
       pointRadius: 1,
       pointHitRadius: 10,
     },
   ],
 };
  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl text-[#333333] font-bold">Performance</h1>
      <p className="text-[#545353bf] text-sm ">
        This is an overview of your performance
      </p>
      <div className="w-full  flex xxs:gap-5 md:gap-3  whitespace-no wrap   overflow-x-auto xxs:mt-0 md:mt-4">
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
          <Line data={data} />
        </ChartLayout>
      </div>
    </div>
  );
};

export default SellersPerformance;
