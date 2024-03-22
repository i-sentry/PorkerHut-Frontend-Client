// import { Column } from "react-table";
import _ from "lodash";

import AdminTable from "../../components/admin-dashboard-components/AdminTable";
// import Table from "../../components/Table/Table";
import { Column } from "react-table";

// import mockData from "../../utils/json/mockData.json";
// import { column } from "../../components/Table/column";
import { Carousel } from "./SellersAccount";
import { useShowModal } from "../../store/overlay";
import OrderSideModal from "./OrderSideModal";
import { useGetVendorOrders } from "../../services/hooks/orders";
import { useEffect, useState } from "react";
// import Popover from "../../components/utility/PopOver";
import { CgSpinner, CgSpinnerAlt } from "react-icons/cg";
import moment from "moment";
import { Tooltip } from "../../components/utility/ToolTip";

// type OrderDataProps = {
//   id: string;
//   title?: string;
//   figure?: string;
// };

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
  console.log(data?.row?.original?.img, "data");
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
// export const OrderData = [
//   {
//     id: "1",
//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "21 September 2022",
//     order_id: "21 September 2022",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Pending",
//   },
//   {
//     id: "2",
//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "21 September 2022",
//     order_id: "21 September 2022",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Failed",
//   },
//   {
//     id: "3",
//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "21 September 2022",
//     order_id: "21 September 2022",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Pending",
//   },
//   {
//     id: "4",
//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "2023-01-13T19:30:00Z",
//     order_id: "2023-01-13T19:30:00Z",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Pending",
//   },
//   {
//     id: "5",

//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "21 September 2022",
//     order_id: "21 September 2022",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Completed",
//   },
//   {
//     id: "6",

//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "2023-01-13T19:30:00Z",
//     order_id: "2023-01-13T19:30:00Z",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Failed",
//   },
//   {
//     id: "7",
//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "2023-01-13T19:30:00Z",
//     order_id: "2023-01-13T19:30:00Z",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Pending",
//   },
//   {
//     id: "8",

//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "2023-01-13T19:30:00Z",
//     order_id: "2023-01-13T19:30:00Z",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Returned",
//   },
//   {
//     id: "9",

//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "2023-01-13T19:30:00Z",
//     order_id: "2023-01-13T19:30:00Z",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Failed",
//   },
//   {
//     id: "10",

//     location: "Abuja",
//     time: "20:40pm",
//     product_name: "100%  Healthy-Fed Pork Lap",
//     store_name: "Porker Hut",
//     order_date: "2023-01-13T19:30:00Z",
//     order_id: "2023-01-13T19:30:00Z",
//     price: "32,500",
//     quantity: "4",
//     order_total: "30,000",
//     order_status: "Completed",
//   },
// ];

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
    if (!isLoading) setVendorOrders(orders);
  }, [isLoading, orders]);

  console.log(orders, isLoading, "is load data");

  // const color3 = () => {
  //   const pending = vendorOrders?.filter(
  //     (order) => order?.status === "pending"
  //   ).length;
  //   const completed = vendorOrders?.filter(
  //     (order) => order?.status === "pending"
  //   ).length;
  //   console.log(pending, "pending");
  // };
  // color3();

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
        // console.log(id, row, "original");

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

  console.log(orderInfo, "orderinfos");

  /*   const color = (val: { title: string; figure?: string | undefined }) => {
    switch (val?.title) {
      case "Pending Order":
        return (
          <>
            <h1 className="text-[20px] font-medium leading-[23.44px]">
              {val?.title}
            </h1>
            <span className="  flex items-center justify-center text-[20px] font-medium leading-[23.44px]">
              ({val?.figure})
            </span>
          </>
        );
      case "Ready to Go":
        return (
          <>
            <h1 className=" text-[20px] font-medium leading-[23.44px] text-[#F29339]">
              {val?.title}
            </h1>
            <span className="flex items-center justify-center text-[20px] font-medium leading-[23.44px] text-[#F29339]">
              ({val?.figure})
            </span>
          </>
        );
      case "Fufilled Orders":
        return (
          <>
            <h1 className="text-[20px] font-medium leading-[23.44px] text-[#22C55E]">
              {val?.title}
            </h1>
            <span className=" flex  items-center justify-center text-[20px] font-medium leading-[23.44px] text-[#22C55E]">
              ({val?.figure})
            </span>
          </>
        );
      case "Failed Orders":
        return (
          <>
            <h1 className=" text-[20px] font-medium leading-[23.44px] text-[#F91919]">
              {val?.title}
            </h1>
            <span className="flex items-center justify-center text-[20px] font-medium leading-[23.44px] text-[#F91919]">
              ({val?.figure})
            </span>
          </>
        );
      default:
        return (
          <>
            <h1 className=" text-[20px] font-medium leading-[23.44px]">
              {val?.title}
            </h1>
            <span className=" flex items-center justify-center text-[20px] font-medium leading-[23.44px]">
              {val?.figure}
            </span>
          </>
        );
    }
  }; */

  // const orderData = [
  //   {
  //     id: "1",
  //     title: "Today",
  //   },
  //   {
  //     id: "2",
  //     title: "Pending Order",
  //     figure: "200",
  //   },
  //   {
  //     id: "3",
  //     title: "Ready to Go",
  //     figure: "300",
  //   },
  //   {
  //     id: "4",
  //     title: "Fufilled Orders",
  //     figure: "1000",
  //   },
  //   {
  //     id: "5",
  //     title: "Failed Orders",
  //     figure: "50",
  //   },
  // ];

  // const card = orderData.map(
  //   (val: { title: string; figure?: string | undefined }) => (
  //     <div className="flex h-full flex-1 flex-col items-center justify-center border-[#D9D9D9] bg-[#F4F4F4] xxs:h-[124px] md:border-r-[1px]">
  //       <div>{color(val)}</div>
  //     </div>
  //   ),
  // );

  return (
    <>
      {openModal && <OrderSideModal orderInfo={orderInfo} />}
      <div className="mt-2 px-4 pb-10">
        {/* <h1 className="xxs:hidden block text-[36px] leading-[42px] font-medium mb-6 ">
          Orders
        </h1> */}
        {/* <div className=" hidden h-20 items-center justify-center">
          {orderData.map(
            (val: { title: string; figure?: string | undefined }) => (
              <div className="flex h-full flex-1 flex-col items-center justify-center border-r-[1px] border-[#D9D9D9] bg-[#F4F4F4]">
                <div>{color(val)}</div>
              </div>
            ),
          )}
        </div> */}
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
        {vendorOrders?.length > 0 ? (
          <div className="hide-scroll-bar">
            <AdminTable
              // @ts-ignore
              Tcolumns={Tcolumns}
              tabs={["All", "Pending", "Completed", "Failed", "Returned"]}
              TData={vendorOrders}
              placeholder={"Search product name, store names, category...."}
              showIcon={true}
              showCheckbox={true}
              showDropDown={true}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center pt-16">
            <CgSpinner size={72} className="animate-spin" />
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
          {/* <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option> */}
        </select>
      </label>
    </div>
  );
};

const NewCard = ({ loading, orderLength, orderType }: any) => {
  const getStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending orders":
        return "text-[#F29339]";
      case "completed orders":
        return "text-[#22C55E]";
      case "failed orders":
        return "text-[#F91919]";
      case "returned orders":
        return "text-[#198df9]";
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
          orderLength
        )}
        )
      </span>
    </div>
  );
};
