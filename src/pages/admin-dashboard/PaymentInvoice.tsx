import React, { useEffect, useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import { BsThreeDotsVertical } from "react-icons/bs";
import Popover from "../../components/utility/PopOver";

const invoiceData = [
  {
    id: "0101101",
    accountOwner: "John Doe",
    location: "Abuja",
    storeName: "Porker Hut",
    startDate: "1 January 2022",
    dueDate: "15 January 2022",
    payout: "₦300,000",
    accountNo: 12345678910,
    bankName: "Access Bank",
    status: "paid",
  },
  {
    id: "0101301",
    accountOwner: "John Doe",
    location: "Abuja",
    storeName: "Porker Hut",
    startDate: "1 January 2022",
    dueDate: "15 January 2022",
    payout: "₦300,000",
    accountNo: 12345678910,
    bankName: "Access Bank",
    status: "unpaid",
  },
  {
    id: "0101101",
    accountOwner: "John Doe",
    location: "Abuja",
    storeName: "Porker Hut",
    startDate: "1 January 2022",
    dueDate: "15 January 2022",
    payout: "₦300,000",
    accountNo: 12345678910,
    bankName: "Access Bank",
    status: "overdue",
  },
];

const getStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "unpaid":
      return "text-[#F29339]";
    case "paid":
      return "text-[#22C55E]";
    case "overdue":
      return "text-[#F91919]";
    default:
      return "text-[#202223]";
  }
};

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Account Owner",
    accessor: (row: any) => {
      return (
        <div className="capitalize">
          <h3 className="capitalize">{row?.accountOwner}</h3>
          <span className="text-sm text-neutral-400">{row?.id}</span>
        </div>
      );
    },
  },
  {
    Header: "Store Name",
    accessor: (row: any) => {
      return (
        <div className="capitalize">
          <h3 className="capitalize">{row?.storeName}</h3>
          <span className="text-sm text-neutral-400">{row?.location}</span>
        </div>
      );
    },
  },
  {
    Header: "Start Date",
    accessor: "startDate",
  },
  {
    Header: "Due Date",
    accessor: "dueDate",
  },
  {
    Header: "Payout",
    accessor: "payout",
  },
  {
    Header: "Account",
    accessor: (row: any) => {
      return (
        <div className="capitalize">
          <h3 className="capitalize">{row?.accountNo}</h3>
          <span className="text-sm text-neutral-400">{row?.bankName}</span>
        </div>
      );
    },
  },
  {
    Header: "Status",
    accessor: (row: any) => {
      console.log(row, "annana");
      return (
        <div className={`capitalize ${getStatus(row?.status)}`}>
          {row?.status}
        </div>
      );
    },
  },
  {
    Header: " ",
    accessor: (row: any) => {
      return (
        <Popover
          buttonContent={<BsThreeDotsVertical size={20} />}
          placementOrder={"auto"}
          closeOnClick={true}
        >
          <div className="flex w-[150px] flex-col py-2">
            <button className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]">
              View Account Detail
            </button>
            <button className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]">
              Delete Details
            </button>
          </div>
        </Popover>
      );
    },
  },
];

const PaymentInvoice = () => {
  return (
    <div className="p-9">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#333333]">Payments</h2>
        <p className="text-[#A2A2A2]">Vendor account details</p>
      </div>

      <div className="mb-8 grid grid-cols-5">
        <MonthSelector />
        <NewCard
          orderType={"Total"}
          orderPrice={"₦3,000,000"}
          orderLength={18}
        />
        <NewCard orderType={"Paid"} orderPrice={"₦1,000,000"} orderLength={5} />
        <NewCard
          orderType={"Unpaid"}
          orderPrice={"₦1,000,000"}
          orderLength={5}
        />
        <NewCard
          orderType={"Overdue"}
          orderPrice={"₦1,000,000"}
          orderLength={8}
        />
      </div>

      <div>
        <div className="hide-scroll-bar">
          <AdminTable
            // @ts-ignore
            Tcolumns={Tcolumns}
            tabs={["All", "Paid", "Unpaid", "Overdue"]}
            TData={invoiceData}
            placeholder={"Search vendor, store name or ID number...."}
            showIcon={true}
            showCheckbox={true}
            showDropDown={true}
            dropDownOption={[
              { label: "Set to Paid", value: "set_to_paid" },
              { label: "Set to Unpaid", value: "set_to_unpaid" },
              { label: "Delete Invoice", value: "delete_invoice" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentInvoice;

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MonthSelector: React.FC<{
  data?: any[];
  loading?: boolean;
  setPending?: any;
  setCompleted?: any;
  setFailed?: any;
  setReturned?: any;
}> = ({ data, setPending, setCompleted, setFailed, setReturned }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1,
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(event.target.value));
    console.log(event.target.value, "gsgsgsg");
  };

  const filteredData = data?.filter((order: any) => {
    const month = new Date(order?.orderDate)?.toLocaleString("en-US", {
      month: "numeric",
    });
    return +month === selectedMonth;
  });

  const getOrderStatusLength = (orders: any[], status: string) => {
    return orders?.filter((order) => order?.status === status)?.length;
  };

  // useEffect(() => {
  //   setPending(getOrderStatusLength(filteredData, "pending"));
  //   setCompleted(getOrderStatusLength(filteredData, "completed"));
  //   setFailed(getOrderStatusLength(filteredData, "failed"));
  //   setReturned(getOrderStatusLength(filteredData, "returned"));
  // }, [filteredData, setCompleted, setFailed, setPending, setReturned]);

  return (
    <div className="flex h-[150px] flex-1 flex-col  items-center justify-center border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] p-5 px-3 md:h-auto">
      <label htmlFor="monthSelect">
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={handleChange}
          className="w-[200px] cursor-pointer border-none bg-transparent text-2xl focus:ring-0 md:w-[140px] md:text-base"
        >
          {monthList.map((mon: string, index: any) => (
            <option key={index + 1} value={index + 1}>
              {mon} {new Date().getFullYear()}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

const NewCard = ({ loading, orderLength, orderType, orderPrice }: any) => {
  return (
    <div className="flex h-[150px] flex-grow flex-col items-center justify-center border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] py-9 px-3 md:h-auto md:py-5">
      <h1
        className={`mb-1 text-center text-2xl font-medium capitalize md:text-lg ${getStatus(orderType)}`}
      >
        {orderType} ({orderLength})
      </h1>
      <span
        className={`flex items-center justify-center text-2xl font-medium leading-[23.44px] md:text-lg  ${getStatus(orderType)}`}
      >
        (
        {loading ? (
          <CgSpinnerAlt size={20} className="animate-spin" />
        ) : (
          orderPrice
        )}
        )
      </span>
    </div>
  );
};
