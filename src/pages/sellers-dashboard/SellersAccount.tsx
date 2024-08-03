import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TabPanel, useTabs } from "../../components/utility/WidgetComp";
import { TabSelector } from "../../components/utility/TabSelector";
import { orderStatement } from "../../utils/orderStatement";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
// import { Statementcolumn } from "../../components/Table/column";
import { useGetVendorOrders } from "../../services/hooks/orders";
import { Column } from "react-table";
// import moment from "moment";
import { Tooltip } from "../../components/utility/ToolTip";
import ComingSoon from "../../components/ComingSoon";
import { useGetVendorInvoice } from "../../services/hooks/Vendor";
import { CgSpinner } from "react-icons/cg";
import moment from "moment";

function getWeekNumber(dateString: string): number {
  const date = new Date(dateString);

  // Copy the date and set it to the first day of the year
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  // Calculate the number of days between the date and the start of the year
  const dayOfYear =
    Math.floor((date.getTime() - startOfYear.getTime()) / 86400000) + 1; // 86400000 ms per day

  // Calculate the week number
  const weekNumber = Math.ceil(dayOfYear / 7);

  return weekNumber;
}

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
              <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>{" "}
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

  const { data: invoice, isLoading } = useGetVendorInvoice(store?.vendor?._id);
  const orders = invoice?.data?.openStatement?.invoices[0]?.order || [];
  const totalPaid = useMemo(
    () =>
      invoice?.data?.data?.reduce(
        (acc: number, cur: any) => (acc + cur?.totalPaid?.amount) | 0,
        0,
      ),
    [isLoading, invoice?.data],
  );

  const totalDue = useMemo(
    () =>
      invoice?.data?.data?.reduce(
        (acc: number, cur: any) => acc + cur?.totalDueAndUnpaid?.amount || 0,
        0,
      ),
    [isLoading, invoice?.data],
  );

  useEffect(() => setVendorOrders(orders), [invoice, isLoading]);

  console.log(invoice, "invoice", vendorOrders);

  const data = [
    {
      id: 0,
      title: "Due & Unpaid",
      value: isLoading ? (
        <span>
          <CgSpinner className="animate-spin" />
        </span>
      ) : (
        `₦${totalDue || 0}`
      ),
    },
    {
      id: 1,
      title: "Open Statement",
      value: isLoading ? (
        <span>
          <CgSpinner className="animate-spin" />
        </span>
      ) : (
        `₦${invoice?.data?.openStatement?.amount || 0}`
      ),
    },
    {
      id: 3,
      title: "Total Paid",
      value: isLoading ? (
        <span>
          <CgSpinner className="animate-spin" />
        </span>
      ) : (
        `₦${totalPaid || 0}`
      ),
    },
  ];

  const cards = data.map((data) => (
    <div
      key={data?.id}
      className="flex h-[162px] w-full items-center justify-start rounded bg-[#F4F4F4] px-12"
    >
      <div>
        <p className="text-[16px] leading-[19px] text-[#A2A2A2]">
          {data?.title}
        </p>
        <h1 className="pt-2 text-[36px] font-medium leading-[42px] text-[#333333]">
          {`₦ ${data?.value}`}
        </h1>
      </div>
    </div>
  ));

  return (
    <>
      {/* <ComingSoon pendingPage="Account Statement" /> */}
      <div className="xxs:px-4">
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

                {!isLoading && invoice?.data?.openStatement?.invoices && (
                  <div className="mt-6 grid gap-3 lg:grid-cols-[2fr_1fr]">
                    <AccountSummary
                      data={invoice?.data?.openStatement?.invoices}
                    />
                    <PaymentSummary
                      invoice={invoice?.data?.openStatement?.invoices}
                    />
                  </div>
                )}
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
    </>
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

const AccountSummary: React.FC<{ data: any }> = ({ data }) => {
  const [acc, setAcc] = useState<any>();
  const subTotal: number = acc?.salesRevenue - 0 - 0 || 0;
  const totalBal = subTotal + acc?.refundOnFees || 0;

  useEffect(() => {
    const curInvoice = data
      ? data
          ?.slice()
          .sort(
            (a: any, b: any) =>
              new Date(b?.startDate).getTime() -
              new Date(a?.startDate).getTime(),
          )
      : null;
    setAcc(curInvoice ? curInvoice?.[0] : null);

    // console.log(curInvoice[0], "curInvoice");
  }, [data]);

  console.log(data, "acc", getWeekNumber(new Date().toISOString()), acc);

  const commissions = acc?.order
    ?.flatMap((item: any) => {
      return item?.productDetails?.map(
        (productDetail: any) =>
          (productDetail?.productID?.information?.category?.commissionRate *
            productDetail?.price) /
          100,
      );
    })
    .reduce((acc: number, item: any) => acc + item, 0);

  console.log(commissions);

  return (
    <>
      <section className="rounded-md border border-neutral-100">
        <div className="flex items-center justify-between bg-neutral-100 p-2 px-4">
          <div className="">
            <h2 className="font-medium underline">Payment Period</h2>
            <p className="text-sm text-gray-500">
              {moment(acc?.startDate || new Date()).format("DD MMM")} -
              {moment(acc?.endDate || new Date()).format("DD MMM YYYY")}
            </p>
          </div>
          <div className="border-gray-200">
            <h2 className="font-medium underline">
              <span className="inline-block h-2 w-2 rounded-full bg-[#F29339]"></span>{" "}
              Status
            </h2>
            <p className="text-center text-sm text-gray-500">₦</p>
          </div>
        </div>

        <div className="px-4 py-5">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] items-start gap-y-3">
            {/* ORDERS */}
            <div>
              <h3 className="font-medium">Orders</h3>
            </div>
            <div>
              <ul className="space-y-2">
                <li>Sales Revenue</li>
                <li>Commission</li>
                <li className="text-neutral-400">Shipping Cost Contribution</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-right">
                <li>{acc?.salesRevenue?.toLocaleString() || 0}</li>
                <li>-0</li>
                <li className="text-neutral-400">-0</li>
                <li className="">
                  <span className="inline-flex w-[230px] items-center justify-between gap-20 border-t pt-2">
                    <span className="text-sm text-neutral-400">Subtotal</span>
                    <span>{subTotal?.toLocaleString()}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Refunds</h3>
            </div>
            <div>
              <ul className="space-y-2">
                <li>Refund on fees</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-right">
                <li>{acc?.refundOnFees}</li>
                <li className="">
                  <span className="inline-flex w-[230px] items-center justify-between gap-20 border-t pt-2">
                    <span className="text-sm text-neutral-400">
                      Total Balance
                    </span>
                    <span>{totalBal?.toLocaleString()}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* PAYOUT */}
          <div className="mt-3 grid grid-cols-2 items-center justify-between gap-y-4 border-t-4 pt-3">
            <h3 className="font-medium">Payout</h3>
            <span className="justify-self-end">
              {totalBal?.toLocaleString()}
            </span>

            <ul className="space-x-4">
              <li className="inline-flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-green-700"></span>{" "}
                <span className="text-neutral-400 underline">Paid</span>
              </li>
              <li className="inline-flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-[#F29339]"></span>{" "}
                <span className="text-neutral-400 underline">Unpaid</span>
              </li>
            </ul>
            <button className="inline-block w-max justify-self-end rounded-md border border-green-700 px-2 py-2 text-green-700">
              Download Account Statement
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const PaymentSummary: React.FC<{ invoice: any }> = ({ invoice }) => {
  return (
    <>
      <section className="rounded-md border border-neutral-100">
        <div className=" grid h-[60px] grid-cols-[1.5fr_0.5fr_1fr] items-center justify-between gap-3 bg-neutral-100 p-2 px-2">
          <div className="text-left text-sm">Payment Period</div>
          <div className="text-left text-sm">Status</div>
          <div className="text-center text-sm">Payout</div>
        </div>
        <div className="w-full">
          <div className="hide-scroll-bar h-[355px] overflow-y-auto py-2">
            <div className="grid gap-3 px-2">
              {invoice?.map((data: any, index: number) => (
                <div
                  className="grid grid-cols-[1.5fr_0.5fr_1fr] gap-3"
                  key={index}
                >
                  <div className="text-sm">
                    {moment(data.startDate).format("DD MMM")} -
                    {moment(data.endDate).format("DD MMM YYYY")}
                  </div>
                  <div className="inline-flex items-center justify-center">
                    <span
                      className={`h-2 w-2 ${
                        data.status === "unpaid"
                          ? "bg-[#F29339]"
                          : "bg-[#22C55E]"
                      } mx-auto inline-block rounded-full`}
                    ></span>
                  </div>
                  <div className=" pr-2 text-center text-sm">
                    {data?.payout || 0}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
