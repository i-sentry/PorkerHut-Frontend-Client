import React, { useEffect, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { orderStatement } from "../../utils/orderStatement";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Statementcolumn } from "../../components/Table/column";



const data = [
  {
    id: 0,
    title: "Due & Unpaid",
    value: "₦1,000,000",
  },
  {
    id: 1,
    title: "Open Statement",
    value: "₦12,000",
  },
  {
    id: 3,
    title: "Total Paid",
    value: "₦180,000",
  },
];

const SellersAccount = () => {


  const [selectedTab, setSelectedTab] = useTabs(["Statement", "Overview"]);

  const cards = data.map((data) => (
    <div
      key={data?.id}
      className="bg-[#F4F4F4] w-full rounded h-[162px] flex items-center justify-start px-12"
    >
      <div>
        <p className="text-[#A2A2A2] text-[16px] leading-[19px]">
          {data?.title}
        </p>
        <h1 className="text-[36px] leading-[42px] text-[#333333] font-medium">
          {data?.value}
        </h1>
      </div>
    </div>
  ));

  return (
    <div className="xxs:px-4 md:px-0">
      {" "}
      <div className="flex  flex-col gap-2 mb-8">
        <h1 className="md:text-[36px] md:leading-[42px] font-medium xxs:text-[20px] xxs:leading-[23px] text-[#1F1F1F]">
          Account Statement
        </h1>
        <span className="text-[#A2A2A2] md:text-[16px] md:leading-[18.75px] font-normal xxs:text-[13px] xxs:leading-[15px] mt-1">
          Monitor all your transaction
        </span>
      </div>
      <div className=" w-ful">
        <nav className="  flex items-center xxs:justify-between md:justify-start py-3 gap-[20px] w-full">
          <TabSelector
            className={` cursor-pointer relative bg-transparent font-normal text-[16px] leading-[19px] p-1.5 transition-all duration-300 flex items-center gap-1 hover:text-[#197B30] ${
              selectedTab === "Statement"
                ? " block border border-[#197b30]  font-normal rounded-md text-[#197B30] p-1.5"
                : "font-light underline"
            } `}
            isActive={selectedTab === "Statement"}
            onClick={() => {
              setTimeout(() => {
                setSelectedTab("Statement");
              }, 200);
            }}
          >
            Account Statement
          </TabSelector>

          <TabSelector
            className={` cursor-pointer relative bg-transparent font-normal text-[16px] leading-[19px] p-1.5 transition-all duration-300 flex items-center gap-1 hover:text-[#197B30] ${
              selectedTab === "Overview"
                ? "block border border-[#197b30] font-normal rounded-md text-[#197B30] p-1.5"
                : "font-light underline"
            } `}
            isActive={selectedTab === "Overview"}
            onClick={() => {
              setTimeout(() => {
                setSelectedTab("Overview");
              }, 200);
            }}
          >
            Order Overview
          </TabSelector>
        </nav>
        <div className=" py-4    w-full ">
          <TabPanel hidden={selectedTab !== "Statement"}>
            <div>
              <div className="md:grid grid-cols-3 gap-5 hidden">
                {data.map((data) => (
                  <div
                    key={data?.id}
                    className="bg-[#F4F4F4] rounded h-[162px] flex items-center  justify-start  px-12"
                  >
                    <div>
                      <p className="text-[#A2A2A2] text-[16px] leading-[19px]">
                        {data?.title}
                      </p>
                      <h1 className="text-[36px] leading-[42px] text-[#333333] font-medium">
                        {data?.value}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              {/* mobile */}

              <div className=" mx-auto md:hidden xxs:block">
                <Carousel cards={cards} />
              </div>
              <div className="flex xxs:flex-col md:flex-row md:my-7 gap-4 xxs:my-20">
                <div className="flex-[4.5]">
                  <div className="flex items-center justify-between bg-[#F4F4F4] py-4 md:px-12 xxs:px-4 rounded-t-md">
                    <div className="flex flex-col">
                      <span className="md:text-[16px] leading-[19px] xxs:text-[14px]  font-normal  underline text-[#333333]">
                        Payment Period
                      </span>
                      <span className="text-[#A2A2A2] text-[16px] leading-[19px] mt-2">
                        12 Dec - 28 Dec 2022
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-[#F29339] rounded-full"></div>
                        <p className="text-[16px] leading-[19px] text-[#333333] underline pl-1">
                          Status
                        </p>
                      </div>
                      <div className="text-[#A2A2A2] text-[16px] leading-[19px] underline mt-2">
                        &#x20A6;
                      </div>
                    </div>
                  </div>
                  <div className="border border-t-0 pb-6">
                    <div className="md:px-12 xxs:px-4 flex  justify-between py-5">
                      <div className="flex md:flex-row xxs:flex-col md:justify-between md:gap-16 xxs:gap-3 ">
                        <div>
                          <span className="text-[#333333] text-[20px] leading-[23px] font-medium">
                            Orders
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            Sales Revenue
                          </span>
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            Commission
                          </span>
                          <span className="text-[#A2A2A2] text-[16px] leading-[19px] font-normal md:block xxs:hidden">
                            Shipping Cost Contribution{" "}
                          </span>
                          <span className="text-[#A2A2A2] text-[16px] leading-[19px] font-normal md:hidden">
                            Shipping Cost{" "}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-2 items-end xxs:mt-10 md:mt-0">
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            300,234
                          </span>
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            -4500
                          </span>
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            -2500
                          </span>
                        </div>
                        <div className="flex items-center justify-between border-t gap-16 mt-2 pt-2">
                          <span className="text-[#A2A2A2] text-[12px] leading-[14px] font-normal">
                            Subtotal
                          </span>
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            295,734
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:px-12 xxs:px-4 flex  justify-between pb-5">
                      <div className="flex md:flex-row xxs:flex-col md:justify-between md:gap-16 xxs:gap-3">
                        <div>
                          <span className="text-[#333333] text-[20px] leading-[23px] font-medium">
                            Refunds
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            Refund on Fees
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-2 items-end xxs:mt-10 md:mt-0">
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal ">
                            0.00
                          </span>
                        </div>
                        <div className="flex items-center justify-between border-t gap-16 mt-2 pt-2">
                          <span className="text-[#A2A2A2] text-[12px] leading-[14px] font-normal">
                            Total Balance
                          </span>
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            295,734
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:px-12 xxs:px-4  ">
                      {/* <hr /> */}
                      <div className=" flex items-center justify-between border-t-2 pt-2">
                        <div>
                          <span className="text-[#333333] text-[20px] leading-[23px] font-medium">
                            Payout
                          </span>
                        </div>
                        <div>
                          <span className="text-[#333333] text-[20px] leading-[23px] font-medium">
                            295,734
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-12 flex md:flex-row xxs:flex-col-reverse mt-4 items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <div className="h-2 w-2 bg-[#22C55E] rounded-full"></div>
                          <p className="text-[16px] leading-[19px] text-[#A2A2A2] underline pl-1">
                            Paid
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 bg-[#F29339] rounded-full"></div>
                          <p className="text-[16px] leading-[19px] text-[#A2A2A2] underline pl-1">
                            Unpaid
                          </p>
                        </div>
                      </div>
                      <div className="xxs:my-5 md:my-0">
                        <div className="text-[#197B30] text-[14px] leading-[16px] font-normal border border-[#197B30] md:py-1 xxs:py-3 px-3 rounded cursor-pointer">
                          Download Account Statement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[2] rounded-lg xxs:mt-10 md:mt-0">
                  <div className="flex items-center justify-between bg-[#F4F4F4] py-[30px] px-2 rounded-t-md">
                    <div className="flex flex-col">
                      <span className="md:text-[16px] leading-[19px] xxs:text-[14px]  font-normal  underline text-[#333333]">
                        Payment Period
                      </span>
                    </div>
                    <div className="">
                      <div className="">
                        <p className="text-[16px] leading-[19px] text-[#333333] underline pl-1">
                          Status
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <p className="text-[16px] leading-[19px] text-[#333333] underline pl-1">
                          Payout
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border border-t-0 ">
                    {orderStatement.map((data) => (
                      <div className=" flex items-center justify-between border-b pb-1">
                        <div className="w-16">
                          <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                            {data.deliverydate}
                          </span>
                        </div>
                        <div
                          className={`h-2 w-2 ${
                            data.status === "unpaid"
                              ? "bg-[#F29339]"
                              : "bg-[#22C55E]"
                          } rounded-full`}
                        ></div>
                        <span className="text-[#333333] text-[16px] leading-[19px] font-normal">
                          {data?.payout}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Overview"}>
            <div>
              <div className="">
                <AdminTable
                  // @ts-ignore
                  Tcolumns={Statementcolumn}
                  // @ts-ignore
                  optionalColumn={false}
                  tabs={[]}
                  TData={orderStatement}
                  placeholder={
                    "Search product name, store names, category.... "
                  }
                  showDropDown={false}
                  showIcon={false}
                  showCheckbox={false}
                />
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default SellersAccount;

type CarouselProps = {
  cards: JSX.Element[];
};

export const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [handleNext]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500 hover:text-gray-800"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        <div className="flex absolute -bottom-8 inset-x-0 justify-center">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === activeIndex ? "bg-[#197B30]" : "bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="mt-2">{cards[activeIndex]}</div>
    </div>
  );
};
