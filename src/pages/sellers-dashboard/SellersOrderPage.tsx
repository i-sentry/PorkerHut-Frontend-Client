import _ from "lodash";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import { Carousel } from "./SellersAccount";
import { useShowModal } from "../../store/overlay";
import OrderSideModal from "./OrderSideModal";
import { useGetVendorOrders } from "../../services/hooks/orders";
import { useEffect, useState } from "react";
import { CgSpinner, CgSpinnerAlt } from "react-icons/cg";
import moment from "moment";
import { Tooltip } from "../../components/utility/ToolTip";
import logo from "../../assets/images/porkerlogo.png";
import { MdProductionQuantityLimits } from "react-icons/md";

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "completed":
      return <span className="text-[#22C55E]">Completed</span>;

    case "failed":
      return <span className=" text-[#F91919]">Failed</span>;
    case "pending":
      return <span className=" text-[#F29339]">Pending</span>;
    case "returned":
      return <span className=" text-[#198df9]">Returned</span>;
    case "returned Failed":
      return <span className=" text-[#F91919]">Returned Failed</span>;
    default:
      return (
        <span className="text-sm font-normal text-[#202223] ">{data}</span>
      );
  }
};

export const ProductNameColumn = ({ data }: any) => {
  const adata = data?.cell?.value;
  const lowerData = adata?.toLowerCase();
  const productName = _.startCase(lowerData);
  return (
    <div className="flex items-center gap-2">
      <span className="whitespace-nowrap text-[16px] font-normal leading-[19px]  text-[#333333]">
        {productName}
      </span>
    </div>
  );
};

const SellersOrderPage = () => {
  const [vendorOrders, setVendorOrders] = useState<any[]>([]);
  const [orderInfo, setOrderInfo] = useState<any>({});
  const [pending, setPending] = useState<number>(0);
  const [completed, setCompleted] = useState<number>(0);
  const [failed, setFailed] = useState<number>(0);
  const [returned, setReturned] = useState<number>(0);

  const openModal = useShowModal((state) => state.openModal);
  const store = JSON.parse(localStorage.getItem("vendor") as string);
  const { data, isLoading } = useGetVendorOrders(store?.vendor?._id);
  const orders = data?.data?.orders;

  useEffect(() => {
    if (!isLoading)
      setVendorOrders(
        orders
          ?.slice()
          ?.sort(
            (a: any, b: any) =>
              new Date(b?.orderDate).getTime() -
              new Date(a?.orderDate).getTime(),
          ),
      );
  }, [isLoading, orders]);

  const aa = orders
    ?.slice()
    ?.sort(
      (a: any, b: any) =>
        new Date(b?.orderDate).getTime() - new Date(a?.orderDate).getTime(),
    );

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Order Number",
      // accessor: "_id",
      accessor: (row: any) => (
        <Tooltip message={row?._id}>
          <span className="cursor-pointer">{row?._id.slice(0, 10)}...</span>
        </Tooltip>
      ),
    },
    {
      Header: "Confirmation Date",
      accessor: (row: any) => {
        const date = moment(new Date(row?.orderDate)).format("DD MMMM YYYY");
        return date;
      },
    },
    {
      Header: "Update Price",
      accessor: (row: any) => `₦${row?.totalAmount.toLocaleString()}`,
    },
    {
      Header: "Price",
      accessor: (row) =>
        // @ts-ignore
        `₦${row.productDetails[0]?.price.toLocaleString()}`,
    },
    {
      Header: "Quality",
      accessor: (row: any) => row?.productDetails?.length,
    },
    {
      Header: "Status",
      accessor: (row: any) => {
        switch (row?.status?.toLowerCase()) {
          case "completed":
            return <span className="text-[#22C55E]">Completed</span>;

          case "failed":
            return <span className=" text-[#F91919]">Failed</span>;
          case "pending":
            return <span className=" text-[#F29339]">Pending</span>;
          case "returned":
            return <span className=" text-[#198df9]">Returned</span>;
          case "returned Failed":
            return <span className=" text-[#F91919]">Returned Failed</span>;
          default:
            return (
              <span className="text-sm font-normal text-[#202223] ">
                {row?.status}
              </span>
            );
        }
      },
    },
    {
      Header: "View more",
      Cell: ({ row }: any) => {
        const toggleOpenModal = useShowModal((state) => state.toggleOpenModal);
        const id = row?.original;

        return (
          <span
            onClick={() => {
              toggleOpenModal(true);
              setOrderInfo({ ...id });
            }}
            className="cursor-pointer hover:text-[#0eb6683] hover:underline"
          >
            View
          </span>
        );
      },
    },
  ];

  return (
    <>
      {openModal && <OrderSideModal orderInfo={orderInfo} />}
      <div className="mt-2 px-4 pb-10">
        {/* MOBILE OVERVIEW ORDERS */}
        <div className=" mx-auto xxs:block md:hidden">
          <Carousel
            cards={[
              <MonthSelector
                data={vendorOrders}
                loading={isLoading}
                setPending={setPending}
                setCompleted={setCompleted}
                setFailed={setFailed}
                setReturned={setReturned}
              />,
              <NewCard
                loading={isLoading}
                orderLength={pending}
                orderType={"Pending Orders"}
              />,
              <NewCard
                loading={isLoading}
                orderLength={completed}
                orderType={"Completed Orders"}
              />,
              <NewCard
                loading={isLoading}
                orderLength={failed}
                orderType={"Failed Orders"}
              />,
              <NewCard
                loading={isLoading}
                orderLength={returned}
                orderType={"Returned Orders"}
              />,
            ]}
          />
        </div>

        {/* DESKTOP OVERVIEW ORDERS */}
        <div className="item-center hidden md:flex">
          <MonthSelector
            data={vendorOrders}
            loading={isLoading}
            setPending={setPending}
            setCompleted={setCompleted}
            setFailed={setFailed}
            setReturned={setReturned}
          />
          <NewCard
            loading={isLoading}
            orderLength={pending}
            orderType={"Pending Orders"}
          />
          <NewCard
            loading={isLoading}
            orderLength={pending}
            orderType="Ready to Go"
          />

          <NewCard
            loading={isLoading}
            orderLength={completed}
            orderType={"Completed Orders"}
          />
          <NewCard
            loading={isLoading}
            orderLength={failed}
            orderType={"Failed Orders"}
          />
          <NewCard
            loading={isLoading}
            orderLength={returned}
            orderType={"Returned Orders"}
          />
        </div>

        <div className="mb-8 xxs:mt-16 md:mt-6">
          <h1 className="my-4 text-[24px] font-normal leading-[28px]">
            Overview
          </h1>
        </div>
        {isLoading && (
          <div className="flex h-screen flex-col items-center justify-center bg-white py-16">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt="loaderLogo"
                className="h-20 w-20 animate-pulse"
              />
              <p className="text-[14px] leading-[24px] text-[#333333]">
                Fetching Data...
              </p>
            </div>
          </div>
        )}
        {!isLoading && vendorOrders?.length > 0 && (
          <div className="hide-scroll-bar">
            <AdminTable
              // @ts-ignore
              Tcolumns={Tcolumns}
              tabs={[
                "All",
                "Pending",
                "Ready to Go",
                "Completed",
                "Failed",
                "Returned",
              ]}
              TData={vendorOrders}
              placeholder={"Search product name, store names, category...."}
              showIcon={true}
              showCheckbox={true}
              showDropDown={true}
            />
          </div>
        )}

        {!isLoading && vendorOrders?.length < 1 && (
          <div className="flex items-center justify-center bg-neutral-100 py-10 px-4 text-neutral-500">
            <MdProductionQuantityLimits size={32} className="mb-1" />
            No orders yet...
          </div>
        )}
      </div>
    </>
  );
};

export default SellersOrderPage;

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
  data: any[];
  loading: boolean;
  setPending: any;
  setCompleted: any;
  setFailed: any;
  setReturned: any;
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

  useEffect(() => {
    setPending(getOrderStatusLength(filteredData, "pending"));
    setCompleted(getOrderStatusLength(filteredData, "completed"));
    setFailed(getOrderStatusLength(filteredData, "failed"));
    setReturned(getOrderStatusLength(filteredData, "returned"));
  }, [filteredData, setCompleted, setFailed, setPending, setReturned]);

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
              {mon}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

const NewCard = ({ loading, orderLength, orderType }: any) => {
  const getStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending orders":
      case "return orders":
        return "text-[#202223]";
      case "ready to go":
        return "text-[#F29339]";
      case "completed orders":
        return "text-[#22C55E]";
      case "failed orders":
        return "text-[#F91919]";
      case "returned failed orders":
        return "text-[#f91919]";
      default:
        return "text-[#202223]";
    }
  };

  return (
    <div className="flex h-[150px] flex-grow flex-col items-center justify-center border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4] py-9 px-3 md:h-auto md:py-5">
      <h1
        className={`mb-2 text-center text-2xl font-medium capitalize md:text-lg ${getStatus(orderType)}`}
      >
        {orderType}
      </h1>
      <span
        className={`flex items-center justify-center text-2xl font-medium leading-[23.44px] md:text-lg  ${getStatus(orderType)}`}
      >
        (
        {loading ? (
          <CgSpinnerAlt size={20} className="animate-spin" />
        ) : (
          orderLength || 0
        )}
        )
      </span>
    </div>
  );
};
