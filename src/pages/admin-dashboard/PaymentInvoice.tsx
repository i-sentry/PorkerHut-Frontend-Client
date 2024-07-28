import React, { useEffect, useMemo, useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import { BsThreeDotsVertical, BsX } from "react-icons/bs";
import Popover from "../../components/utility/PopOver";
import {
  useGetAllInvoice,
  useGetAllInvoiceTotals,
} from "../../services/hooks/admin/payments";
import moment from "moment";
import { invoiceAccInfo } from "../../utils/formData";
import { Controller, useForm } from "react-hook-form";
import { useGetBankList } from "../../services/hooks/users/banks";
import { BASEURL } from "../../services/api";
import { SelectOptionType } from "../../components/sellers-onboarding/SellersAccountInfo";
import useSWR from "swr";
import CustomSelect from "../../components/utility/CustomSelect";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateAdminAccess } from "../../services/hooks/admin/Auth";
import { useUpdateVendor } from "../../services/hooks/Vendor";
import { toast } from "react-toastify";

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

type PaymentStatusProps = {
  amount: number;
  count: number;
};

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

const PaymentInvoice = () => {
  const [totals, setTotals] = useState<PaymentStatusProps>();
  const [unpaid, setUnpaid] = useState<PaymentStatusProps>();
  const [paid, setPaid] = useState<PaymentStatusProps>();
  const [overdue, setOverdue] = useState<PaymentStatusProps>();
  const [paymentInvoices, setPaymentInvoices] = useState<any[]>([]);
  const [invoiceTotals, setInvoiceTotals] = useState<any[]>([]);
  const { data: invoices, isLoading, refetch } = useGetAllInvoice();
  const { data: invoicesTotals, isLoading: totLoading } =
    useGetAllInvoiceTotals();
  const [open, setOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState<any>();

  const handleClick = (id: string) => {
    setOpen(true);
    setCurrentInvoice(paymentInvoices?.find((item: any) => item?._id === id));
  };

  console.log(invoiceTotals, "Payment Totals");

  useEffect(() => {
    setPaymentInvoices(isLoading ? [] : invoices?.data);
  }, [isLoading, invoices]);

  useEffect(() => {
    setInvoiceTotals(totLoading ? [] : invoicesTotals?.data);
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
        <MonthSelector
          data={invoiceTotals}
          setUnpaid={setUnpaid}
          setOverdue={setOverdue}
          setPaid={setPaid}
          setTotals={setTotals}
        />
        <NewCard
          orderType={"Total"}
          orderPrice={`₦${totals?.amount || 0}`}
          orderLength={totals?.count || 0}
          loading={totLoading}
        />
        <NewCard
          orderType={"Paid"}
          orderPrice={`₦${paid?.amount || 0}`}
          orderLength={paid?.count || 0}
          loading={totLoading}
        />
        <NewCard
          orderType={"Unpaid"}
          orderPrice={`₦${unpaid?.amount || 0}`}
          orderLength={unpaid?.count || 0}
          loading={totLoading}
        />
        <NewCard
          orderType={"Overdue"}
          orderPrice={`₦${overdue?.amount || 0}`}
          orderLength={overdue?.count || 0}
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
              // { label: "Delete Invoice", value: "delete_invoice" },
            ]}
            goType="invoice"
            refetch={refetch}
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

const MonthSelector: React.FC<{
  data?: any[];
  loading?: boolean;
  setUnpaid?: any;
  setPaid?: any;
  setOverdue?: any;
  setTotals?: any;
}> = ({ data, setUnpaid, setPaid, setOverdue, setTotals }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1,
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const filteredData = data?.find((order: any) => {
    const month = new Date(order?.createdAt)?.toLocaleString("en-US", {
      month: "numeric",
    });
    return +month === selectedMonth;
  });

  console.log(filteredData, "ddadad");

  useEffect(() => {
    setUnpaid(filteredData?.totalUnpaid);
    setPaid(filteredData?.totalpaid);
    setTotals(filteredData?.totalInvoices);
    setOverdue(filteredData?.totalDue);
  }, [filteredData, setUnpaid, setPaid, setOverdue, setTotals]);

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
          className="absolute top-5 right-5 hidden cursor-pointer text-neutral-700"
          onClick={() => setOpen(false)}
        >
          <BsX size={30} />
        </span>

        <VendorDetails data={data} setOpen={setOpen} />
      </div>
    </div>
  );
};

const fetchResolveBankName = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch bank name");
  }
  const data = await response.json();
  return data;
};

const scheme = yup.object().shape({
  ownerName: yup.string().required(),
  storeName: yup.string().required(),
  bankName: yup.string().required(),
  accountName: yup.string().required(),
  accountNumber: yup.number().required(),
});

const VendorDetails = ({ setOpen, data }: any) => {
  const updateVendor = useUpdateVendor(data?.vendor?._id);
  const { data: bankList, isLoading: isBankLoading } = useGetBankList();
  const [dropOption, setDropOption] = useState<SelectOptionType>(null);
  const [fetch, setFetch] = useState(false);
  const [, setAccountName] = useState("");
  const [accName, setAccName] = useState("");
  const [accNo, setAccNo] = useState<string>(
    data?.vendor?.vendorBankAccount.accountNumber,
  );
  const [error, setError] = useState(true);
  const [errorType, setErrorType] = useState("");
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheme),
  });
  const bankOptions = useMemo(
    () =>
      bankList?.data?.data?.map((bank: any) => ({
        label: bank.name,
        value: bank.code,
        bank,
      })),
    [bankList?.data],
  );

  const bankAccount = accNo || data?.vendor?.vendorBankAccount?.accountNumber;
  const bankCode = dropOption?.value;
  const url = `${BASEURL}/api/pay/account-details?account_number=${encodeURIComponent(
    bankAccount,
  )}&bank_code=${bankCode}`;

  const { data: resolveBankNameResult, isLoading } = useSWR(
    fetch ? url : null,
    fetchResolveBankName,
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAccNo(value);

    console.log(value, "value", getValues()?.accountNumber);

    if (value?.length === 10) {
      setFetch(true);
      console.log(value, "value", getValues()?.accountNumber);
    }
  };

  const handleCancel = () => {
    setOpen(false);

    reset({
      accountNumber: data?.vendor?.vendorBankAccount?.accountNumber,
      bankName: data?.vendor?.vendorBankAccount?.bankName,
      accountName: data?.vendor?.vendorBankAccount?.accountName,
    });

    setAccNo(data?.vendor?.vendorBankAccount?.accountNumber);
    setError(false);
    setErrorType("");

    setDropOption(
      bankOptions?.find(
        (bank: any) =>
          bank?.label === data?.vendor?.vendorBankAccount?.bankName,
      ),
    );
  };

  const updateInvoice = (e: any) => {
    e.preventDefault();
    const val = getValues();

    console.log(data, "update", dropOption?.label);
    // const match = accountName?.replace(/,/g, "").split(" ");

    updateVendor
      .mutateAsync({
        vendorBankAccount: {
          accountNumber: val?.accountNumber,
          accountName: val?.accountName,
          bankName: dropOption?.label,
        },
      })
      .then((res: any) => {
        toast.success("Vendor Info");
        console?.log(res, "resss");
        setOpen(false);

        reset({
          accountNumber: `${data?.vendor?.vendorBankAccount?.accountNumber}`,
          bankName: data?.vendor?.vendorBankAccount?.bankName,
          accountName: data?.vendor?.vendorBankAccount?.accountName,
        });

        setAccNo(data?.vendor?.vendorBankAccount?.accountNumber);
        setError(false);
        setErrorType("");

        setDropOption(
          bankOptions?.find(
            (bank: any) =>
              bank?.label === data?.vendor?.vendorBankAccount?.bankName,
          ),
        );
      })
      .catch((err: any) => console.log(err));
  };

  useEffect(() => {
    if (isLoading) return;

    const accountName = resolveBankNameResult?.data?.account_name || "";
    if (accountName) {
      setValue("accountName", accountName);
      setAccName(accountName);
      setAccountName(resolveBankNameResult?.data);
      setError(false);
      setErrorType("");
    } else {
      setError(true);
      setErrorType("invalid-acc-no");
      setValue("accountName", "");
    }
  }, [resolveBankNameResult, isLoading]);

  useEffect(() => {
    if (data) {
      setValue(
        "ownerName",
        data?.vendor?.businessInformation?.businessOwnerName || "",
      );
      setValue(
        "storeName",
        data?.vendor?.sellerAccountInformation?.shopName || "",
      );
      setValue(
        "accountNumber",
        data?.vendor?.vendorBankAccount?.accountNumber || "",
      );
      setValue(
        "accountName",
        data?.vendor?.vendorBankAccount?.accountName || "",
      );
      setValue("bankName", data?.vendor?.vendorBankAccount?.bankName || "");

      setDropOption(
        bankOptions?.find(
          (bank: any) =>
            bank?.label === data?.vendor?.vendorBankAccount?.bankName,
        ),
      );
    }
  }, [data]);

  useEffect(() => {
    // console.log(dropOption, "dropOption");
    if (accNo?.length === 10 || getValues()?.accountNumber?.length === 10) {
      setFetch(true);
    }
  }, [dropOption, accNo]);

  // console.log(accName, "curr inco", resolveBankNameResult?.data?.account_name);
  // console.log(getValues(), "acc");

  return (
    <form className="space-y-3" onSubmit={(e) => updateInvoice(e)}>
      <label htmlFor="ownerName" className="block">
        <span className="mb-2 text-sm text-[#333333]">Account Owner</span>
        <input
          {...register("ownerName")}
          type="text"
          id="ownerName"
          name="ownerName"
          disabled
          className="w-full rounded border border-neutral-300 text-sm focus:border-green-700 focus:ring-green-700 disabled:text-neutral-500"
        />
        <p className="mt-2 text-sm text-[#797979]">
          Please fill in the account owner’s name.
        </p>
      </label>
      <label htmlFor="storeName" className="block">
        <span className="mb-2 text-sm text-[#333333]">Store Name</span>{" "}
        <input
          {...register("storeName")}
          type="text"
          id="storeName"
          name="storeName"
          disabled
          className="w-full rounded border border-neutral-300 text-sm focus:border-green-700 focus:ring-green-700 disabled:text-neutral-500"
        />
        <p className="mt-2 text-sm text-[#797979]">Enter store name.</p>
      </label>
      <label htmlFor="bankName" className="block">
        <span className="mb-2 text-sm text-[#333333]">Bank name</span>{" "}
        <CustomSelect
          // control={control}
          name="bankName"
          selectedOption={dropOption}
          setSelectOption={setDropOption}
          placeholder={"Select bank"}
          options={bankOptions || []}
        />
        <p className="mt-2 text-sm text-[#797979]">
          Please fill in the bank name.
        </p>
      </label>
      <label htmlFor="accountNumber" className="block">
        <span className="mb-2 text-sm text-[#333333]">Bank account number</span>{" "}
        <input
          {...register("accountNumber")}
          type="number"
          id="accountNumber"
          name="accountNumber"
          onChange={(e) => onChange(e)}
          value={accNo}
          className={`w-full rounded border border-neutral-300 text-sm focus:border-green-700 focus:ring-green-700 ${""}`}
        />
        <p
          className={`mt-2 text-sm  ${error ? "text-red-600" : "text-[#797979]"}`}
        >
          {error && errorType === "invalid-acc-no"
            ? "Please enter a valid account number"
            : "Please fill in account number"}
        </p>
      </label>
      <label htmlFor="accountName" className="block">
        <span className="mb-2 text-sm text-[#333333]">Account Name</span>{" "}
        <input
          {...register("accountName")}
          type="text"
          id="accountName"
          name="accountName"
          disabled
          className={`w-full rounded border border-neutral-300 text-sm focus:border-green-700 focus:ring-green-700 disabled:text-neutral-600`}
        />
        <p className="mt-2 text-sm text-[#797979]">
          Please fill in account name
        </p>
      </label>

      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-md border border-green-700 px-8 py-2.5 text-sm font-medium text-green-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={() => "clicked"}
          className="rounded-md bg-green-700 px-8 py-2.5 text-sm font-medium text-white"
        >
          Update
        </button>
      </div>
    </form>
  );
};
