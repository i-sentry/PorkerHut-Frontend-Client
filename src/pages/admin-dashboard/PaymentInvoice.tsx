import React, { useEffect, useState } from "react";
import { CgSpinner, CgSpinnerAlt } from "react-icons/cg";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import { BsThreeDotsVertical, BsX } from "react-icons/bs";
import Popover from "../../components/utility/PopOver";
import ComingSoon from "../../components/ComingSoon";
import {
  useGetAllInvoice,
  useGetAllInvoiceTotals,
} from "../../services/hooks/admin/payments";
import { forEach, update } from "lodash";
import moment from "moment";
import { invoiceAccInfo } from "../../utils/formData";
import { useForm } from "react-hook-form";

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

// type RootObjectType = {
//   _id: string;
//   vendor: VendorType;
//   payout: number;
//   status: string;
//   startDate: string;
//   currentWeek: number;
//   dueDate: string;
//   salesRevenue: number;
//   order: OrderType[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
//   totalOrders: number;
// };

const PaymentInvoice = () => {
  const [paymentInvoices, setPaymentInvoices] = useState<any[]>([]);
  const [invoiceTotals, setInvoiceTotals] = useState<any>();
  const { data: invoices, isLoading } = useGetAllInvoice();
  const { data: invoicesTotals, isLoading: totLoading } =
    useGetAllInvoiceTotals();
  const [open, setOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState<any>();

  const handleClick = (id: string) => {
    setOpen(true);
    setCurrentInvoice(paymentInvoices?.find((item: any) => item?._id === id));
  };

  // console.log(paymentInvoices, invoiceTotals, "Payment Totals");

  useEffect(() => {
    setPaymentInvoices(isLoading ? [] : invoices?.data);
  }, [isLoading, invoices]);

  useEffect(() => {
    setInvoiceTotals(totLoading ? null : invoicesTotals);
  }, [totLoading, invoices]);

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Account Owner",
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
      Header: "Store Name",
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
      Header: "Start Date",
      accessor: (row: any) => (
        <span>{moment(row?.startDate).format("DD MMMM YYYY")}</span>
      ),
    },
    {
      Header: "Due Date",
      accessor: (row: any) => (
        <span>{moment(row?.dueDate).format("DD MMMM YYYY")}</span>
      ),
    },
    {
      Header: "Payout",
      accessor: (row: any) => `₦${row?.payout}`,
    },
    {
      Header: "Account",
      accessor: (row: any) => {
        return (
          <div className="capitalize">
            <h3 className="capitalize">
              {row?.vendor?.vendorBankAccount?.accountNumber}
            </h3>
            <span className="text-sm text-neutral-400">
              {row?.vendor?.vendorBankAccount?.bankName}
            </span>
          </div>
        );
      },
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
              <button
                onClick={() => handleClick(row?._id)}
                className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
              >
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

  return (
    <div className="py-6 pl-8 pr-5">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#333333]">Payments Invoice</h2>
        <p className="text-[#A2A2A2]">Vendor account details</p>
      </div>

      <div className="mb-8 grid grid-cols-5">
        <MonthSelector />
        <NewCard
          orderType={"Total"}
          orderPrice={`₦${invoiceTotals?.totalInvoices?.amount || 0}`}
          orderLength={invoiceTotals?.totalInvoices?.count || 0}
          loading={totLoading}
        />
        <NewCard
          orderType={"Paid"}
          orderPrice={`₦${invoiceTotals?.totalPaid?.amount || 0}`}
          orderLength={invoiceTotals?.totalPaid?.count || 0}
          loading={totLoading}
        />
        <NewCard
          orderType={"Unpaid"}
          orderPrice={`₦${invoiceTotals?.totalUnpaid?.amount || 0}`}
          orderLength={invoiceTotals?.totalUnpaid?.count || 0}
          loading={totLoading}
        />
        <NewCard
          orderType={"Overdue"}
          orderPrice={`₦${invoiceTotals?.totalDue?.amount || 0}`}
          orderLength={invoiceTotals?.totalDue?.count || 0}
          loading={totLoading}
        />
      </div>

      <div>
        <div className="hide-scroll-bar">
          <AdminTable
            // @ts-ignore
            Tcolumns={Tcolumns}
            tabs={["All", "Paid", "Unpaid", "Overdue"]}
            TData={paymentInvoices}
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
      <AccountDetails setOpen={setOpen} open={open} data={currentInvoice} />

      {/* <div className="absolute top-0 left-0 h-full w-full bg-white">
        <ComingSoon pendingPage={"Payment Invoice"} />
      </div> */}
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
            <option
              key={index + 1}
              value={index + 1}
              disabled={new Date().getMonth() + 1 < index + 1}
            >
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

const AccountDetails = ({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  data: any;
  setOpen: any;
}) => {
  const { register, reset, setValue } = useForm();

  // console.log(data, "curr inco");

  useEffect(() => {
    if (data) {
      setValue(
        "businessInformation.businessOwnerName",
        data?.vendor?.businessInformation?.businessOwnerName || "",
      );
      setValue(
        "sellerAccountInformation.shopName",
        data?.vendor?.sellerAccountInformation?.shopName || "",
      );
      setValue(
        "vendorBankAccount.accountNumber",
        data?.vendor?.vendorBankAccount?.accountNumber || "",
      );
      setValue(
        "vendorBankAccount.accountName",
        data?.vendor?.vendorBankAccount?.accountName || "",
      );
      setValue(
        "vendorBankAccount.bankName",
        data?.vendor?.vendorBankAccount?.bankName || "",
      );
    }
  }, [data]);

  return (
    <div
      className={`absolute top-0 right-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-60 py-9 duration-300 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative w-[500px] rounded-md bg-[#F4F4F4] p-5 px-8">
        <div className="mb-5">
          <h3 className="mb-2 text-2xl font-bold">Account Details</h3>
          <p>Please fill in the necessary information.</p>
        </div>
        <span
          className="absolute top-5 right-5 cursor-pointer text-neutral-700"
          onClick={() => setOpen(false)}
        >
          <BsX size={30} />
        </span>

        <form className="space-y-3">
          {invoiceAccInfo.map((data: any, index: number) => (
            <label key={index} htmlFor={data.name} className="block">
              <span className="mb-2 text-sm text-[#333333]">{data?.label}</span>{" "}
              <input
                {...register(data?.name)}
                type={data?.type}
                id={data.name}
                name={data.name}
                className="w-full rounded border border-neutral-300 text-sm focus:border-green-700 focus:ring-green-700"
              />
              <p className="mt-2 text-sm text-[#797979]">{data?.info}</p>
            </label>
          ))}

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md border border-green-700 px-8 py-2.5 text-sm font-medium text-green-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-green-700 px-8 py-2.5 text-sm font-medium text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
