// import { Column } from "react-table";
import _ from "lodash";

import AdminTable from "../../components/admin-dashboard-components/AdminTable";
// import Table from "../../components/Table/Table";

import mockData from "../../utils/json/mockData.json";
import { column } from "../../components/Table/column";
import { Carousel } from "./SellersAccount";
import { useShowModal } from "../../store/overlay";
import OrderSideModal from "./OrderSideModal";
import { useGetVendorOrders } from "../../services/hooks/orders";
import { useEffect, useState } from "react";

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
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
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
      <span className="text-[16px] leading-[19px] font-normal whitespace-nowrap  text-[#333333]">
        {productName}
      </span>
    </div>
  );
};
export const OrderData = [
  {
    id: "1",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "2",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Failed",
  },
  {
    id: "3",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "4",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "5",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "21 September 2022",
    order_id: "21 September 2022",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Completed",
  },
  {
    id: "6",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Failed",
  },
  {
    id: "7",
    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Pending",
  },
  {
    id: "8",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Returned",
  },
  {
    id: "9",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Failed",
  },
  {
    id: "10",

    location: "Abuja",
    time: "20:40pm",
    product_name: "100%  Healthy-Fed Pork Lap",
    store_name: "Porker Hut",
    order_date: "2023-01-13T19:30:00Z",
    order_id: "2023-01-13T19:30:00Z",
    price: "32,500",
    quantity: "4",
    order_total: "30,000",
    order_status: "Completed",
  },
];

const orderData = [
  {
    id: "1",
    title: "Today",
  },
  {
    id: "2",
    title: "Pending Order",
    figure: "200",
  },
  {
    id: "3",
    title: "Ready to Go",
    figure: "300",
  },
  {
    id: "4",
    title: "Fufilled Orders",
    figure: "1000",
  },
  {
    id: "5",
    title: "Failed Orders",
    figure: "50",
  },
];

const SellersOrderPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [vendorOrders, setVendorOrders] = useState<any[]>([]);
  const openModal = useShowModal((state) => state.openModal);
  const store = JSON.parse(localStorage.getItem("vendor") as string);
  const { data, isLoading } = useGetVendorOrders(store?.vendor?._id);
  const orders = data?.data?.orders;

  useEffect(() => setVendorOrders(orders), [orders]);
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

  const color = (val: { title: string; figure?: string | undefined }) => {
    switch (val?.title) {
      case "Pending Order":
        return (
          <>
            <h1 className="text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className="  text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      case "Ready to Go":
        return (
          <>
            <h1 className=" text-[#F29339] text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className="text-[#F29339] text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      case "Fufilled Orders":
        return (
          <>
            <h1 className="text-[#22C55E] text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className=" text-[#22C55E]  text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      case "Failed Orders":
        return (
          <>
            <h1 className=" text-[#F91919] text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className="text-[#F91919] text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              ({val?.figure})
            </span>
          </>
        );
      default:
        return (
          <>
            <h1 className=" text-[20px] leading-[23.44px] font-medium">
              {val?.title}
            </h1>
            <span className=" text-[20px] leading-[23.44px] font-medium flex items-center justify-center">
              {val?.figure}
            </span>
          </>
        );
    }
  };

  const card = orderData.map(
    (val: { title: string; figure?: string | undefined }) => (
      <div className="bg-[#F4F4F4] h-full flex flex-col items-center justify-center flex-1 border-[#D9D9D9] md:border-r-[1px] xxs:h-[124px]">
        <div>{color(val)}</div>
      </div>
    )
  );

  return (
    <>
      {openModal && <OrderSideModal />}
      <div className="pb-10 xxs:px-4 md:px-0">
        <h1 className="xxs:hidden block text-[36px] leading-[42px] font-medium mb-6 ">
          Orders
        </h1>
        <div className="md:flex h-20 items-center justify-center xxs: hidden">
          {orderData.map(
            (val: { title: string; figure?: string | undefined }) => (
              <div className="bg-[#F4F4F4] h-full flex flex-col items-center justify-center flex-1 border-[#D9D9D9] border-r-[1px]">
                <div>{color(val)}</div>
              </div>
            )
          )}
        </div>

        <div className=" mx-auto md:hidden xxs:block">
          <Carousel cards={card} />
        </div>

        <div className="md:mt-6 xxs:mt-16 mb-8">
          <h1 className="my-4 text-[24px] leading-[28px] font-normal">
            Overview
          </h1>
        </div>

        <div className="hide-scroll-bar">
          <AdminTable
            // @ts-ignore
            Tcolumns={column}
            tabs={["All", "Pending", "Completed", "Failed", "Returned"]}
            TData={mockData}
            placeholder={"Search product name, store names, category...."}
            showIcon={true}
            showCheckbox={true}
            showDropDown={true}
          />
        </div>
      </div>
    </>
  );
};

export default SellersOrderPage;
