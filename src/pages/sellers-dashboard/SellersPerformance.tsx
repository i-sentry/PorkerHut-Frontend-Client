import React from "react";
import PerformanceWidget from "../../components/performanceComp/PerformanceWidget";
import { ScriptableContext } from "chart.js";
import { Line } from "react-chartjs-2";
import ChartLayout from "../../components/vendors-component/ChatLayout";
import { Carousel } from "./SellersAccount";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { useGetVendorOrders } from "../../services/hooks/orders";
import { CgSpinner } from "react-icons/cg";

interface IData {
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

/* const cardData: IData[] = [
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
]; */

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
  const vendor = JSON.parse(localStorage.getItem("vendor") as string);
  const { data: vo, isLoading } = useGetVendorOrders(vendor?.vendor?._id);
  const vendorOrders = vo?.data?.orders;

  // console.log(vendorOrders, isLoading, "vendorOrders");

  const salesRevenue = vendorOrders
    ?.map((order: any) => order?.subtotal)
    ?.reduce((acc: any, price: any) => acc + price, 0);

  const itemSold = vendorOrders
    ?.map((order: any) => order?.productDetails?.length)
    ?.reduce((acc: any, item: any) => acc + item, 0);

  // console.log("salesRevenue", salesRevenue);

  const monthData = vendorOrders?.map((order: any) => {
    const monthIndex = new Date(order.orderDate)?.getMonth();
    return new Date(0, monthIndex)?.toLocaleString("default", {
      month: "long",
    });
  });

  // console.log(monthData, "monthData");

  const chartData = vendorOrders
    ?.flatMap((order: any) => order?.productDetails)
    ?.map((product: any) => ({
      price: product?.productID?.pricing?.productPrice,
    }));
  // console.log(chartData, "chartData");

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Assets Status",
        // data: [33, 53, 85, 41, 44, 65],
        data: chartData?.map((item: any) => item?.price),
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

  const performanceWidgetsData: IData[] = [
    {
      color: "#F4F4F4",
      currency: "thr",
      action: () => {
        throw new Error("Function not implemented.");
      },
      percentage: 10,
      value: `₦${salesRevenue?.toLocaleString()}`,
      type: "Sales",
      borderColor: "#d9d9d9",
      textColor: "red",
      navigate: "link",
      disable: false,
      amount: "",
      text: "Value of the goods you have sold",
    },
    {
      color: "#F4F4F4",
      currency: "thr",
      action: () => {
        throw new Error("Function not implemented.");
      },
      percentage: -5,
      value: vendorOrders?.length,
      type: "Orders",
      borderColor: "#d9d9d9",
      textColor: "red",
      navigate: "link",
      disable: false,
      amount: "",
      text: "Number of orders delivered and in delivery.",
    },
    {
      color: "#F4F4F4",
      currency: "thr",
      action: () => {
        throw new Error("Function not implemented.");
      },
      percentage: 2,
      value: itemSold,
      type: "Items Sold",
      borderColor: "#d9d9d9",
      textColor: "red",
      navigate: "link",
      disable: false,
      amount: "",
      text: "Number of Items expected to get to the customer",
    },
    {
      color: "#F4F4F4",
      currency: "thr",
      action: () => {
        throw new Error("Function not implemented.");
      },
      percentage: 10,
      value: "300k",
      type: "Page views",
      borderColor: "#d9d9d9",
      textColor: "red",
      navigate: "link",
      disable: false,
      amount: "",
      text: "Number of visit on your page",
    },
  ];

  const card = performanceWidgetsData.map((val) => (
    <div>
      <div>{MobilePerformanceWidget(val, isLoading)}</div>
    </div>
  ));

  return (
    <div className="overflow-hidden xxs:px-4 md:px-0">
      <h1 className="font-bold text-[#333333] xxs:text-[20px] xxs:leading-[23px] md:text-[32px] md:leading-[46px]">
        Performance
      </h1>
      <p className="text-[#A2A2A2] xxs:text-[13px] xxs:leading-[15px] md:text-[14px] md:leading-[16px] ">
        This is an overview of your performance
      </p>
      <div className="whitespace-no wrap hidden w-full gap-4 xxs:mt-0 xxs:gap-5 md:mt-4  md:grid md:grid-cols-2  md:gap-4 xl:grid-cols-4 xl:gap-6">
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={10}
          value={`₦${salesRevenue?.toLocaleString()}`}
          type={"Sales"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="Value of the goods you have sold"
          isLoading={isLoading}
        />
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={-5}
          value={vendorOrders?.length}
          type={"Orders"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="Number of orders delivered and in delivery."
          isLoading={isLoading}
        />
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={2}
          value={itemSold}
          type={"Items Sold"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="Number of Items expected to get to the  customer"
          isLoading={isLoading}
        />
        <PerformanceWidget
          color={"#F4F4F4"}
          currency={"thr"}
          action={function (): void {
            throw new Error("Function not implemented.");
          }}
          percentage={10}
          value={"300k"}
          type={"Page views"}
          borderColor={"#d9d9d9"}
          textColor={"red"}
          navigate={"link"}
          disable={false}
          amount={""}
          text="Number of visit on your page"
          isLoading={isLoading}
        />
      </div>
      <div className="mt-8 xxs:block md:hidden">
        <Carousel cards={card} />
      </div>
      <div className="hide-scroll-bar relative mt-10 h-full overflow-y-scroll md:mb-20">
        <div className="absolute right-8 top-10 mt-4 flex items-center gap-4 px-4">
          <label className="" htmlFor="week"></label>
          <input
            type="week"
            className="w-42 h-10 rounded border px-2 focus:outline-none "
          />
        </div>
        <ChartLayout
          title=""
          value={"Sales Overview"}
          options={[]}
          // onSelectOption={[]}
          //@ts-ignore
          onSelectOption={(option) => {}}
          style={{ width: "100%" }}
        >
          {/* @ts-ignore */}
          <Line
            data={data}
            style={{ width: "100%", height: "480px" }}
            options={options}
          />
        </ChartLayout>
      </div>
    </div>
  );
};

export default SellersPerformance;

const MobilePerformanceWidget = (props: any, isLoading: any) => {
  // const openModal = (e: any) => {
  //   e.preventDefault();
  //   props.action();
  // };

  const min = 0;
  const max = 100;

  const percentageValue = ((props.percentage - min) / (max - min)) * 100;

  return (
    <div className="">
      <div
        className={`flex h-[162px] w-full flex-auto flex-col justify-center gap-2 rounded-lg border p-3 shadow-sm xxs:flex-shrink-0 md:flex-shrink border-[${props.buttonColor}] shadow-md`}
        style={{
          backgroundColor: props.color,
          border: props.border,
          borderColor: props.buttonColor,
        }}
      >
        <div className="mb-3 flex items-start justify-center">
          <div className="text-center text-[16px] font-normal leading-[18px] text-[#333333] ">
            {props.type}
          </div>
        </div>
        <div className="mb-6">
          <span className="flex items-center justify-center text-center text-[24px] font-bold leading-[24px] text-[#333333]">
            {isLoading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              props.value
            )}
          </span>
        </div>
        <div>
          {/* AiOutlineRise */}
          <div className="">
            {/* AiOutlineFall */}
            <span
              className={`bg-[${props.buttonColor}] text-[${props.textColor}] flex items-center justify-center rounded-md py-2 transition-all active:scale-90 disabled:cursor-not-allowed`}
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
                    className={`text-[12px] font-normal leading-[24px]  ${
                      props.percentage > 50
                        ? "text-[#F91919]"
                        : "text-[#22C55E]"
                    }  px-1`}
                  >
                    {percentageValue}%
                  </span>
                  {props.percentage > 50 ? (
                    <span className="pr-1 text-[12px] font-normal leading-[24px] text-[#333333]">
                      Decrease from yesterday
                    </span>
                  ) : (
                    <span className="pr-1 text-[12px] font-normal leading-[24px] text-[#333333]">
                      Increase from yesterday
                    </span>
                  )}
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <p className=" mt-5 text-center text-[12px] font-normal leading-[24px] text-[#a2a2a2]">
        {props.text}
      </p>
    </div>
  );
};
