import React, { useEffect, useState } from "react";
import PaymentCard from "../../components/admin-dashboard-components/PaymentCard";
import { BsSearch } from "react-icons/bs";
import TrackerCard from "../../components/admin-dashboard-components/TrackerCard";
import ComingSoon from "../../components/ComingSoon";
import { useGetAllInvoice } from "../../services/hooks/admin/payments";
import moment from "moment";
import { Column } from "react-table";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";

const PaymentTracker = () => {
  const [trackers, setTrackers] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const { data: invoices, isLoading } = useGetAllInvoice();

  useEffect(() => {
    setTrackers(isLoading ? [] : invoices?.data);
  }, [isLoading, invoices]);

  console.log(trackers);

  return (
    // <div>
    //   <PaymentCard store_name={undefined} id={0} email={''} company_address={''} phone={''} total_orders={0} total_failed_orders={0} data_joined={''} status={''} />
    // </div>

    <div className="py-6 pl-8 pr-5">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#333333]">Payment Tracker</h2>
        <div className="flex items-center justify-between">
          <p className="text-[#A2A2A2]">Vendor account details</p>
          <span>Week 35</span>
        </div>
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
      </div>

      {/* TRACKER CARD */}
      {isLoading && <div>Loading....</div>}
      {!isLoading && (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3">
          {trackers?.map((data: any, index: number) => (
            <TrackerCard key={index} data={data} setOpen={setOpen} />
          ))}
        </div>
      )}

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

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Product Name",
    accessor: (row: any) => {
      return (
        <div className="capitalize">
          <h3 className="capitalize">
            {row?.vendor?.businessInformation?.businessOwnerName}
          </h3>
          <span className="text-sm text-neutral-400">{row?._id}</span>
        </div>
      );
    },
  },
  {
    Header: "Delivered to",
    accessor: (row: any) => {
      return (
        <div className="capitalize">
          <h3 className="capitalize">
            {row?.vendor?.sellerAccountInformation?.shopName}
          </h3>
          <span className="text-sm capitalize text-neutral-400">
            {row?.vendor?.businessInformation?.city}
          </span>
        </div>
      );
    },
  },
  {
    Header: "Updated Date",
    accessor: (row: any) => (
      <span>{moment(row?.startDate).format("DD MMMM YYYY")}</span>
    ),
  },
  {
    Header: "Order ID",
    accessor: (row: any) => (
      <span>{moment(row?.dueDate).format("DD MMMM YYYY")}</span>
    ),
  },
  {
    Header: "Price",
    accessor: (row: any) => `₦${row?.payout}`,
  },
  {
    Header: "Charges",
    accessor: (row: any) => `₦${row?.payout}`,
  },
  {
    Header: "Quantity",
    accessor: (row: any) => `₦${row?.payout}`,
  },
  {
    Header: "Total Pay",
    accessor: (row: any) => `₦${row?.payout}`,
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

const SoldItems = ({ setOpen }: any) => {
  return (
    <>
      <section>
        <div>
          <span
            onClick={() => setOpen(false)}
            className="cursor-pointer text-sm underline"
          >
            Close
          </span>
          <span>Week 23</span>
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
        </div>

        <div>
          <AdminTable
            // @ts-ignore
            Tcolumns={Tcolumns}
            tabs={[]}
            TData={[]}
            placeholder={"Search vendor, store name or ID number...."}
            showIcon={true}
            showCheckbox={false}
            showDropDown={false}
          />
        </div>
      </section>
    </>
  );
};
