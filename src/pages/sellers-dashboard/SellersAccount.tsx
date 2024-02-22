import React, { useCallback, useEffect, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { orderStatement } from "../../utils/orderStatement";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Statementcolumn } from "../../components/Table/column";
import { useGetVendorOrders } from "../../services/hooks/orders";
import { Column } from "react-table";
import moment from "moment";
import { Tooltip } from "../../components/utility/ToolTip";

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

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Product Name",
    accessor: (row: any) => (
      <span className="align-top" style={{ textTransform: "capitalize" }}>
        {row?.productDetails[0].productID.information.productName}
      </span>
    ),
  },

  {
    Header: "Delivered to",
    accessor: (row: any) => (
      <div className="w-[200px] whitespace-pre-wrap align-top">
        {row?.billingInformation?.address}
      </div>
    ),
  },
  {
    Header: "Delievery Date",
    accessor: "",

    // accessor: (row: any) => {
    //   const date = moment(new Date(row?.orderDate)).format("DD MMMM YYYY");
    //   return date;
    // },
  },
  {
    Header: "Order Number",
    // accessor: "_id",
    accessor: (row: any) => (
      <Tooltip message={row?._id}>
        <span className="cursor-pointer">{row?._id.slice(0, 6)}...</span>
      </Tooltip>
    ),
  },
  {
    Header: "Price",
    accessor: (row) =>
      // @ts-ignore
      `₦${row.productDetails[0]?.price.toLocaleString()}`,
  },
  {
    Header: "Charges",
    accessor: "",
    // accessor: (row: any) => `₦${row?.totalAmount.toLocaleString()}`,
  },
  {
    Header: "Payout Amount",
    accessor: (row: any) => `₦${row?.totalAmount.toLocaleString()}`,
  },
  {
    Header: "Status",
    accessor: (row: any) => {
      switch (row?.status?.toLowerCase()) {
        case "completed":
          return (
            <span className="">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>{" "}
              Completed
            </span>
          );

        case "failed":
          return (
            <span className="">
              <span className="inline-block h-2 w-2 rounded-full bg-[#F91919]"></span>{" "}
              Failed
            </span>
          );
        case "pending":
          return (
            <span className="">
              <span className="inline-block h-2 w-2 rounded-full bg-[#F29339]"></span>{" "}
              Pending
            </span>
          );
        case "returned":
          return (
            <span className="">
              <span className="inline-block h-2 w-2 rounded-full bg-[#198df9]"></span>{" "}
              Returned
            </span>
          );
        case "returned Failed":
          return (
            <span className=" text-[#F91919]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#F91919]"></span>{" "}
              Returned Failed
            </span>
          );
        default:
          return (
            <span className="text-sm font-normal text-[#202223] ">
              {row?.status}
            </span>
          );
      }
    },
  },
  // {
  //   Header: "View more",
  //   Cell: ({ row }: any) => {
  //     const toggleOpenModal = useShowModal((state) => state.toggleOpenModal);
  //     return (
  //       <span
  //         onClick={() => toggleOpenModal(true)}
  //         className="hover:underline hover:text-[#0eb6683] cursor-pointer"
  //       >
  //         View
  //       </span>
  //     );
  //   },
  // },
];

const SellersAccount = () => {
  const [selectedTab, setSelectedTab] = useTabs(["Statement", "Overview"]);
  const [vendorOrders, setVendorOrders] = useState<any[]>([]);
  const store = JSON.parse(localStorage.getItem("vendor") as string);
  const { data: ordervendor, isLoading } = useGetVendorOrders(
    store?.vendor?._id,
  );
  const orders = ordervendor?.data?.orders;
  useEffect(() => setVendorOrders(orders), [orders]);

  const cards = data.map((data) => (
    <div
      key={data?.id}
      className="flex h-[162px] w-full items-center justify-start rounded bg-[#F4F4F4] px-12"
    >
      <div>
        <p className="text-[16px] leading-[19px] text-[#A2A2A2]">
          {data?.title}
        </p>
        <h1 className="text-[36px] font-medium leading-[42px] text-[#333333]">
          {data?.value}
        </h1>
      </div>
    </div>
  ));

  return (
    <div className="wh xxs:px-4 md:px-0">
      {" "}
      <div className="mb-8  flex flex-col gap-2">
        <h1 className="font-medium text-[#1F1F1F] xxs:text-[20px] xxs:leading-[23px] md:text-[36px] md:leading-[42px]">
          Account Statement
        </h1>
        <span className="mt-1 font-normal text-[#A2A2A2] xxs:text-[13px] xxs:leading-[15px] md:text-[16px] md:leading-[18.75px]">
          Monitor all your transaction
        </span>
      </div>
      <div className="w-full">
        <nav className="  flex w-full items-center gap-[20px] py-3 xxs:justify-start md:justify-start">
          <TabSelector
            className={` relative flex cursor-pointer items-center gap-1 bg-transparent p-1.5 text-[16px] font-normal leading-[19px] transition-all duration-300 hover:text-[#197B30] ${
              selectedTab === "Statement"
                ? " block rounded-md border  border-[#197b30] p-1.5 font-normal text-[#197B30]"
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
            className={` relative flex cursor-pointer items-center gap-1 bg-transparent p-1.5 text-[16px] font-normal leading-[19px] transition-all duration-300 hover:text-[#197B30] ${
              selectedTab === "Overview"
                ? "block rounded-md border border-[#197b30] p-1.5 font-normal text-[#197B30]"
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
        <div className=" w-full    py-4 ">
          <TabPanel hidden={selectedTab !== "Statement"}>
            <div>
              <div className="hidden grid-cols-3 gap-5 md:grid">
                {data.map((data) => (
                  <div
                    key={data?.id}
                    className="flex h-[162px] items-center justify-start rounded  bg-[#F4F4F4]  px-12"
                  >
                    <div>
                      <p className="text-[16px] leading-[19px] text-[#A2A2A2]">
                        {data?.title}
                      </p>
                      <h1 className="text-[36px] font-medium leading-[42px] text-[#333333]">
                        {data?.value}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              {/* mobile */}

              <div className=" mx-auto xxs:block md:hidden">
                <Carousel cards={cards} />
              </div>
              <div className="flex gap-4 xxs:my-20 xxs:flex-col md:my-7 md:flex-row">
                <div className="flex-[4.5]">
                  <div className="flex items-center justify-between rounded-t-md bg-[#F4F4F4] py-4 xxs:px-4 md:px-12">
                    <div className="flex flex-col">
                      <span className="font-normal leading-[19px] text-[#333333]  underline  xxs:text-[14px] md:text-[16px]">
                        Payment Period
                      </span>
                      <span className="mt-2 text-[16px] leading-[19px] text-[#A2A2A2]">
                        12 Dec - 28 Dec 2022
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-[#F29339]"></div>
                        <p className="pl-1 text-[16px] leading-[19px] text-[#333333] underline">
                          Status
                        </p>
                      </div>
                      <div className="mt-2 text-[16px] leading-[19px] text-[#A2A2A2] underline">
                        &#x20A6;
                      </div>
                    </div>
                  </div>
                  <div className="border border-t-0 pb-6">
                    <div className="flex justify-between py-5  xxs:px-4 md:px-12">
                      <div className="flex xxs:flex-col xxs:gap-3 md:flex-row md:justify-between md:gap-16 ">
                        <div>
                          <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
                            Orders
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            Sales Revenue
                          </span>
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            Commission
                          </span>
                          <span className="text-[16px] font-normal leading-[19px] text-[#A2A2A2] xxs:hidden md:block">
                            Shipping Cost Contribution{" "}
                          </span>
                          <span className="text-[16px] font-normal leading-[19px] text-[#A2A2A2] md:hidden">
                            Shipping Cost{" "}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-end gap-2 xxs:mt-10 md:mt-0">
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            300,234
                          </span>
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            -4500
                          </span>
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            -2500
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-16 border-t pt-2">
                          <span className="text-[12px] font-normal leading-[14px] text-[#A2A2A2]">
                            Subtotal
                          </span>
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            295,734
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between pb-5  xxs:px-4 md:px-12">
                      <div className="flex xxs:flex-col xxs:gap-3 md:flex-row md:justify-between md:gap-16">
                        <div>
                          <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
                            Refunds
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            Refund on Fees
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-end gap-2 xxs:mt-10 md:mt-0">
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333] ">
                            0.00
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-16 border-t pt-2">
                          <span className="text-[12px] font-normal leading-[14px] text-[#A2A2A2]">
                            Total Balance
                          </span>
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
                            295,734
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="xxs:px-4 md:px-12  ">
                      {/* <hr /> */}
                      <div className=" flex items-center justify-between border-t-2 pt-2">
                        <div>
                          <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
                            Payout
                          </span>
                        </div>
                        <div>
                          <span className="text-[20px] font-medium leading-[23px] text-[#333333]">
                            295,734
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between px-12 xxs:flex-col-reverse md:flex-row">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-[#22C55E]"></div>
                          <p className="pl-1 text-[16px] leading-[19px] text-[#A2A2A2] underline">
                            Paid
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-[#F29339]"></div>
                          <p className="pl-1 text-[16px] leading-[19px] text-[#A2A2A2] underline">
                            Unpaid
                          </p>
                        </div>
                      </div>
                      <div className="xxs:my-5 md:my-0">
                        <div className="cursor-pointer rounded border border-[#197B30] px-3 text-[14px] font-normal leading-[16px] text-[#197B30] xxs:py-3 md:py-1">
                          Download Account Statement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[2] rounded-lg xxs:mt-10 md:mt-0">
                  <div className="flex items-center justify-between rounded-t-md bg-[#F4F4F4] py-[30px] px-2">
                    <div className="flex flex-col">
                      <span className="font-normal leading-[19px] text-[#333333]  underline  xxs:text-[14px] md:text-[16px]">
                        Payment Period
                      </span>
                    </div>
                    <div className="">
                      <div className="">
                        <p className="pl-1 text-[16px] leading-[19px] text-[#333333] underline">
                          Status
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <p className="pl-1 text-[16px] leading-[19px] text-[#333333] underline">
                          Payout
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-t-0 p-2 ">
                    {orderStatement.map((data) => (
                      <div className=" flex items-center justify-between border-b pb-1">
                        <div className="w-16">
                          <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
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
                        <span className="text-[16px] font-normal leading-[19px] text-[#333333]">
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
                  Tcolumns={Tcolumns}
                  // @ts-ignore
                  optionalColumn={false}
                  tabs={[]}
                  TData={vendorOrders}
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
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex: number) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1,
    );
  }, [cards.length]);

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
          className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-500 hover:text-gray-800"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 transform text-gray-500 hover:text-gray-800"
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        <div className="absolute inset-x-0 -bottom-8 flex justify-center">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${
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
