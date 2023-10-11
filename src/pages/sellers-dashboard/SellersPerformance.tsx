import React from "react";
import PerformanceWidget from "../../components/performanceComp/PerformanceWidget";
import {
  // Chart as ChartJS,
  // CategoryScale,
  // LinearScale,
  // PointElement,
  // LineElement,
  // Title,
  // Tooltip,
  // Legend,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";
import ChartLayout from "../../components/vendors-component/ChatLayout";
import { Carousel } from "./SellersAccount";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

interface cardData {
  color: string;
  currency: string;
  action: () => void;
  percentage: number;
  value: string;
  type: string;
  borderColor: string;
  textColor: string;
  navigate: string;
  disable: boolean;
  amount: string;
  text: string;
}

const cardData: cardData[] = [
  {
    color: "#F4F4F4",
    currency: "thr",
    action: () => {
      throw new Error("Function not implemented.");
    },
    percentage: 5,
    value: "# 100,00,00",
    type: "Sales",
    borderColor: "#d9d9d9",
    textColor: "red",
    navigate: "link",
    disable: false,
    amount: "",
    text: "lorem ispsum nesr jdhfdffs",
  },
  {
    color: "#FFFFFF",
    currency: "usd",
    action: () => {
      // Custom action implementation
    },
    percentage: 10,
    value: "$ 50,00,00",
    type: "Marketing",
    borderColor: "#CCCCCC",
    textColor: "blue",
    navigate: "link",
    disable: true,
    amount: "",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    color: "#EFEFEF",
    currency: "eur",
    action: () => {
      // Custom action implementation
    },
    percentage: 15,
    value: "€ 75,00,00",
    type: "Finance",
    borderColor: "#AAAAAA",
    textColor: "green",
    navigate: "link",
    disable: false,
    amount: "",
    text: "Lorem consectetur adipiscing elit",
  },
  {
    color: "#DDDDDD",
    currency: "gbp",
    action: () => {
      // Custom action implementation
    },
    percentage: 20,
    value: "£ 90,00,00",
    type: "Operations",
    borderColor: "#BBBBBB",
    textColor: "purple",
    navigate: "link",
    disable: true,
    amount: "",
    text: "sed do eiusmod tempor incididunt",
  },
];

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


    const card = cardData.map((val) => (
      <div>
        <div>{MobilePerformanceWidget(val)}</div>
      </div>
    ));



  return (
    <div className="overflow-hidden xxs:px-4 md:px-0">
      <h1 className="md:text-[32px] md:leading-[46px] xxs:text-[20px] xxs:leading-[23px] text-[#333333] font-normal">
        Performance
      </h1>
      <p className="text-[#A2A2A2] md:text-[14px] xxs:text-[13px] xxs:leading-[15px] md:leading-[16px] ">
        This is an overview of your performance
      </p>
      <div className="w-full md:grid grid-cols-4 gap-4 xxs:gap-5 md:gap-3  whitespace-no wrap  xxs:mt-0 md:mt-4 hidden">
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
      <div className="md:hidden xxs:block mt-8">
        <Carousel cards={card} />
      </div>
      <div className="md:mb-20 overflow-y-scroll h-full mt-10">
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

const MobilePerformanceWidget = (props: any) => {
  const openModal = (e: any) => {
    e.preventDefault();
    props.action();
  };

  const min = 0;
  const max = 100;

  const percentageValue = ((props.percentage - min) / (max - min)) * 100;

  return (
    <div className="">
      <div
        className={`flex flex-auto justify-between flex-col p-3  h-[162px] w-full rounded-lg shadow-sm xxs:flex-shrink-0 md:flex-shrink border border-[${props.buttonColor}] shadow-md`}
        style={{
          backgroundColor: props.color,
          border: props.border,
          borderColor: props.buttonColor,
        }}
      >
        <div className="flex items-start ">
          <div className="text-[#333333] text-[16px] leading-[18px]  font-normal ">
            {props.type}
          </div>
        </div>
        <div>
          <span className="text-[#333333] font-normal   text-[24px] leading-[24px]">
            {props.value}
          </span>
        </div>
        <div>
          {/* AiOutlineRise */}
          <div className="">
            {/* AiOutlineFall */}
            <span
              className={`bg-[${props.buttonColor}] text-[${props.textColor}] flex py-2 rounded-md  transition-all active:scale-90 disabled:cursor-not-allowed`}
            >
              {props.percentage > 50 ? (
                <span>
                  {" "}
                  <AiOutlineFall color="#F91919" size={23} />
                </span>
              ) : (
                <span className="text-[#22C55E]">
                  {" "}
                  <AiOutlineRise color="#22C55E" size={23} />
                </span>
              )}

              <div>
                <p className="flex ">
                  <span
                    className={`text-[12px] leading-[24px] font-normal  ${
                      props.percentage > 50
                        ? "text-[#F91919]"
                        : "text-[#22C55E]"
                    }  px-1`}
                  >
                    {percentageValue}%
                  </span>
                  {props.percentage > 50 ? (
                    <span className="pr-1 text-[#333333] text-[12px] leading-[24px] font-normal">
                      Decrease from yesterday
                    </span>
                  ) : (
                    <span className="pr-1 text-[#333333] text-[12px] leading-[24px] font-normal">
                      Increase from yesterday
                    </span>
                  )}
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <p className=" text-center text-[12px] leading-[24px] font-normal text-[#a2a2a2] mt-5">
        {props.text}
      </p>
    </div>
  );
};
