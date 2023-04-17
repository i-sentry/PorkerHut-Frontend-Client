import React from "react";
import AdminOverviewRating from "./AdminOverviewRating";
import AdminOverviewTopProduct from "./AdminOverviewTopProduct";
import { AreaChart } from "./AreaChart";
import TopStoresRating from "./TopStoresRating";

const data = [
  {
    id: "1",
    title: "Total Sales",
    figure: "N 400",
  },
  {
    id: "2",
    title: "Daily Revenues",
    figure: "N400",
  },
  {
    id: "3",
    title: "Items Sold",
    figure: "900",
  },
  {
    id: "4",
    title: "Average Order Value",
    figure: "500",
  },
  {
    id: "5",
    title: "Total Orders",
    figure: "3000",
  },
];
const orderData = [
  {
    id: "1",
    title: "Average Daily Order",
    figure: "200",
  },
  {
    id: "2",
    title: "Pending Orders",
    figure: "20",
  },
  {
    id: "3",
    title: "Fulfilled Orders",
    figure: "1000",
  },
  {
    id: "4",
    title: "Failed Orders",
    figure: "50",
  },
  {
    id: "5",
    title: "Returned Order",
    figure: "100",
  },
];

const Overview = () => {
  const color = (val: {
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | null
      | undefined;
    figure:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | null
      | undefined;
  }) => {
    switch (val?.title) {
      case "Pending Orders":
        return (
          <>
            <h1 className="text-[#F29339] text-xs font-light">{val?.title}</h1>
            <span className="text-xl text-[#F29339] font-medium">
              {val?.figure}
            </span>
          </>
        );
      case "Fulfilled Orders":
        return (
          <>
            <h1 className="text-[#22C55E] text-xs font-light">{val?.title}</h1>
            <span className="text-xl text-[#22C55E] font-medium">
              {val?.figure}
            </span>
          </>
        );
      case "Failed Orders":
        return (
          <>
            <h1 className="text-[#F91919] text-xs font-light">{val?.title}</h1>
            <span className="text-xl text-[#F91919] font-medium">
              {val?.figure}
            </span>
          </>
        );

      default:
        return (
          <>
            <h1 className="text-[#A2A2A2] text-xs font-light">{val?.title}</h1>
            <span className="text-xl font-medium">{val?.figure}</span>
          </>
        );
    }
  };
  return (
    <div className="p-14">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Overview</h1>
        <span className="text-[#A2A2A2] font-light text-sm">
          This is an overview of Porker Hut.
        </span>
      </div>
      <div className="flex items-center justify-items-stretch">
        {data.map((val) => (
          <div
            key={val.id}
            className="bg-[#F4F4F4] h-full flex flex-col flex-1 border-[#D9D9D9] border-r-[1px] gap-2 rounded-l-sm items-start justify-center px-6 py-3"
          >
            <h1 className="text-[#A2A2A2] text-xs  font-normal">{val?.title}</h1>
            <span className="text-xl font-medium">{val?.figure}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-items-stretch mt-4">
        {orderData.map((val) => (
          <div
            key={val.id}
            className="bg-[#F4F4F4] h-full flex flex-col flex-1 border-[#D9D9D9] border-r-[1px] gap-2 rounded-l-sm items-start justify-center px-6 py-3"
          >
            <div>{color(val)}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#F4F4F4] mt-4 py-4 ">
        <form className="flex items-center justify-between">
          <div>
            <span className=" font-medium px-3">Sales Overview</span>
          </div>
          <div className="flex gap-4 items-center px-4">
            <label className="" htmlFor="week"></label>
            <input
              type="week"
              className="focus:outline-none border h-10 w-42 px-2 rounded "
            />
          </div>
        </form>
        <AreaChart />
      </div>

      <div className="grid grid-cols-3 items-center mt-8 gap-4">
        <TopStoresRating />
        <AdminOverviewTopProduct />
        <AdminOverviewRating />
      </div>
    </div>
  );
};

export default Overview;
