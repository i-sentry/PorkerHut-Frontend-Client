import React, { useEffect, useState } from "react";
import PaymentCard from "../../components/admin-dashboard-components/PaymentCard";
import { BsSearch } from "react-icons/bs";
import TrackerCard from "../../components/admin-dashboard-components/TrackerCard";
import ComingSoon from "../../components/ComingSoon";
import { useGetPaymentTrackers } from "../../services/hooks/admin/payments";
import moment from "moment";
import { Column } from "react-table";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";

function getCurrentWeek(): number {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;

  // Calculate the ISO week number
  const weekNumber = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);

  return weekNumber;
}

const PaymentTracker = () => {
  const [trackers, setTrackers] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const { data: invoices, isLoading } = useGetPaymentTrackers();
  const [week, setWeek] = useState(getCurrentWeek());
  const [weekFull, setWeekFull] = useState(
    `${new Date().getFullYear()}-W${getCurrentWeek()}`,
  );

  const handleChange = (e: any) => {
    const value = e.target.value;
    const InputedVal = value
      .split("-")
      .find((item: any) => item.includes("W" || "w"))
      .replace(/^[wW]/g, "");
    setWeekFull(value);
    setWeek(InputedVal * 1);
    console.log(InputedVal, "vvavavav");
  };

  useEffect(() => {
    setTrackers(
      isLoading
        ? []
        : invoices?.data?.filter(
            (item: any) => item?.period?.currentWeek === week,
          ),
    );
  }, [isLoading, invoices, week]);

  console.log(invoices, "tracker");

  return (
    <div className="py-6 pl-8 pr-5">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#333333]">Payment Tracker</h2>
        <div className="flex items-center justify-between">
          <p className="text-[#A2A2A2]">Vendor account details</p>
          {!open && (
            <div className="flex items-center gap-3">
              Week {week}
              <input
                type="week"
                id="week"
                value={weekFull}
                name="week"
                onChange={(e) => handleChange(e)}
              />
            </div>
          )}
        </div>
        {!open && (
          <div className="mt-3 flex justify-end">
            <label htmlFor="search" className="relative block w-[45%]">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search store name or ID number...."
                className="form-input inline-block w-full rounded-[8px] border-0 bg-[#F4F4F4] py-2.5 px-3 pl-6 outline-none ring-0 focus:border focus:border-green-700 focus:ring-0"
              />
              <span className="absolute top-1/2 right-4 -translate-y-1/2">
                <BsSearch size={20} />
              </span>
            </label>
          </div>
        )}
      </div>

      {/* TRACKER CARD */}
      {isLoading && <div>Loading....</div>}
      {!open && !isLoading && (
        <>
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {trackers?.map((data: any, index: number) => (
              <TrackerCard
                key={index}
                data={data}
                setSoldItems={setCurrentItems}
                setOpen={setOpen}
              />
            ))}
          </div>
        </>
      )}
      {open && <SoldItems setOpen={setOpen} data={currentItems} />}

      {/* <div className="absolute top-0 left-0 h-full w-full bg-white">
        <ComingSoon pendingPage={"Payment Tracker"} />
      </div> */}
    </div>
  );
};

export default PaymentTracker;

const getStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "text-[#F29339]";
    case "completed":
      return "text-[#22C55E]";
    case "failed":
      return "text-[#F91919]";
    case "returned":
      return "text-[#198df9]";
    case "returned failed":
      return "text-[#f91919]";
    default:
      return "text-[#202223]";
  }
};

const SoldItems = ({ setOpen, data }: any) => {
  const charges = data?.charges / data?.period?.order?.length;

  console.log(data);

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Product Name",
      accessor: (row: any) => {
        return (
          <div className="capitalize">
            <h3 className="capitalize">
              {row?.productDetails[0]?.productID?.information?.productName}
            </h3>
          </div>
        );
      },
    },
    {
      Header: "Delivered to",
      accessor: (row: any) => {
        return <p className="">{row?.billingInformation}</p>;
      },
    },
    {
      Header: "Updated Date",
      accessor: (row: any) => (
        <span>{moment(row?.orderDate).format("DD MMMM YYYY")}</span>
      ),
    },
    {
      Header: "Order ID",
      accessor: (row: any) => <span>{row?._id}</span>,
    },
    {
      Header: "Price",
      accessor: (row: any) => `₦${row?.productDetails[0]?.price}`,
    },
    {
      Header: "Charges",
      accessor: (row: any) => `₦${charges}`,
    },
    {
      Header: "Quantity",
      accessor: (row: any) => `${row?.productDetails[0]?.quantity}`,
    },
    {
      Header: "Total Pay",
      accessor: (row: any) =>
        `₦${(row?.productDetails[0]?.price - charges).toLocaleString()}`,
    },
    {
      Header: "Status",
      accessor: (row: any) => {
        return (
          <div className={`capitalize ${getStatus(row?.status)}`}>
            {row?.status}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <section>
        <div className="flex flex-col items-end gap-4">
          <span
            onClick={() => setOpen(false)}
            className="cursor-pointer text-sm underline"
          >
            Close
          </span>
          <span>Week {getCurrentWeek()}</span>
          <div className="mt-3 flex justify-end">
            <label htmlFor="search" className="relative block w-[400px]">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search store name or ID number...."
                className="form-input inline-block w-full rounded-[8px] border-0 bg-[#F4F4F4] py-2.5 px-3 pl-6 outline-none ring-0 focus:border focus:border-green-700 focus:ring-0"
              />
              <span className="absolute top-1/2 right-4 -translate-y-1/2">
                <BsSearch size={20} />
              </span>
            </label>
          </div>
        </div>

        <div>
          {data && (
            <AdminTable
              // @ts-ignore
              Tcolumns={Tcolumns}
              tabs={[]}
              TData={data?.period?.order || []}
              placeholder={"Search vendor, store name or ID number...."}
              showIcon={true}
              showCheckbox={false}
              showSearchBar={false}
              showDropDown={false}
            />
          )}
        </div>
      </section>
    </>
  );
};
