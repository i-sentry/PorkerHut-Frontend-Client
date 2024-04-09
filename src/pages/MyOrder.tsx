import React, { Fragment, useMemo, useState } from "react";
// import MyOrderTable from "../components/order-component/MyOrderTable";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Column } from "react-table";
import AppLayout from "../components/utility/AppLayout";
import _ from "lodash";
import { TabSelector } from "../components/utility/TabSelector";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useGetCustomersOrder } from "../services/hooks/orders";
import AdminTable from "../components/admin-dashboard-components/AdminTable";
import { CgSpinnerAlt } from "react-icons/cg";
import { chunkArray } from "../helper/chunck";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
// import { ImSpinner6 } from "react-icons/im";

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
    case "returned failed":
      return <span className=" text-[#F91919]">Returned Failed</span>;
    default:
      return (
        <span className="text-sm font-normal text-[#202223] ">{data}</span>
      );
  }
};

export const ProductNameColumn = ({ data, cellIndex }: any) => {
  // console.log(data?.data, "data product");
  console.log(data, cellIndex, "new data");
  const adata = data?.cell?.value;
  // console.log(adata, "Adata");

  const lowerData = adata?.toLowerCase();

  const productName = _.startCase(lowerData);
  return (
    <>
      <div className="flex items-center gap-2">
        <figure className="h-9 w-9 rounded-full border">
          <img
            src={data?.data[cellIndex]?.productDetails[0]?.productID.images[0]}
            alt="product"
            className="h-full w-full rounded-full object-cover"
          />
        </figure>
        <span className="whitespace-nowrap text-sm font-light  text-[#333333]">
          {productName}
        </span>
      </div>
    </>
  );
};
export const OrderData = [
  {
    id: "1",
    img: "./images/productimg1.png",
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
    id: "2",
    img: "./images/productimg1.png",
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
    id: "3",
    img: "./images/productimg1.png",
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
    id: "4",
    img: "./images/productimg1.png",
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
    id: "5",
    img: "./images/productimg1.png",
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
    id: "6",
    img: "./images/productimg1.png",
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
    img: "./images/productimg1.png",
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
  {
    id: "8",
    img: "./images/productimg1.png",
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
    id: "9",
    img: "./images/productimg1.png",
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
  {
    id: "10",
    img: "./images/productimg1.png",
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

interface IProductDetails {
  productID: {
    _id: string;
    information: {
      productName: string;
    };
    images: string[];
  };
  quantity: number;
  price: number;
  totalPrice: number;
  vendor: {
    sellerAccountInformation: {
      shopName: string;
    };
    businessInformation: {
      address1: string;
      city: string;
    };
    _id: string;
  };
  deliveryOption: string;
  _id: string;
}

interface IOrder {
  _id: string;
  customer: string;
  productDetails: IProductDetails[];
  subtotal: number;
  tax: number;
  totalAmount: number;
  billingInformation: string;
  status: string;
  isPaid: boolean;
  orderDate: string;
  __v: number;
}

const Tcolumns: readonly Column<IOrder>[] = [
  {
    Header: "Product Name",

    accessor: (row) =>
      // @ts-ignore
      row.productDetails[0]?.productID.information.productName,
    Cell: (props: any) => (
      <ProductNameColumn data={props} cellIndex={props.cell.row.index} />
    ),
  },
  {
    Header: "Store Name",
    accessor: (row) =>
      // @ts-ignore
      row.productDetails[0].vendor.sellerAccountInformation.shopName,
    Cell: (data: any) => {
      const d = data.row.original;
      return <StoreNameColumn d={d} />;
    },
  },
  {
    Header: "Order Date",
    accessor: "orderDate",
    Cell: (data) => {
      const d = data?.row.original;

      return <DateColumn d={d} />;
    },
  },
  {
    Header: "Order ID",
    accessor: "_id",
  },

  {
    Header: "Prices",
    accessor: (row) =>
      // @ts-ignore
      row.productDetails[0]?.price,
  },
  {
    Header: "No of Items",
    accessor: (row) => row?.productDetails.length,
  },
  {
    Header: "Order Total",
    accessor: (row) =>
      `₦ ${row.totalAmount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

const DateColumn = ({ d }: any) => {
  // console.log(d.orderDate, "datafhshs");
  const createdAt = d.orderDate;

  // console.log(createdAt, "createdat");

  const formattedDate = moment(createdAt).format("DD MMMM YYYY");
  const formattedTime = moment(createdAt).format("h:mmA").toLowerCase();
  return (
    <div className="flex flex-col items-start">
      <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        {formattedDate}
      </span>
      <span className="mt-1 text-sm font-light capitalize text-neutral-400">
        {formattedTime}
      </span>
    </div>
  );
};

const StoreNameColumn = ({ d }: any) => {
  // const { vendor } = d;
  // console.log(d, "store-colum");

  const storeName =
    d?.productDetails[0].vendor.sellerAccountInformation.shopName;
  const storeCity = d?.productDetails[0].vendor.businessInformation.city;
  return (
    <div className="flex flex-col items-start">
      <span className=" whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        {storeName}
      </span>
      <span className="mt-1 text-sm font-light capitalize text-neutral-400">
        {storeCity}
      </span>
    </div>
  );
};

const getOrderStatus = (status: any) => {
  switch (status) {
    case "pending":
      return "text-orange-400";
    case "completed":
      return "text-green-500";
    case "failed":
      return "text-red-600";
    default:
      return "gray";
  }
};

const MyOrder = () => {
  const [searchValue, setSearchValue] = useState("");
  // const [isOrderExpanded, setIsOrderExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("All");
  const [, setChosenTab] = useState("All");
  const t = ["All", "Pending", "Completed", "Failed"];
  const queryKey = ["location", "product_name", " store_name"];
  // const [open, setOpen] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const user = JSON.parse(localStorage.getItem("user") as string);
  const { data: getAllOrders, isLoading } = useGetCustomersOrder(
    user._id as string,
  );
  console.log(getAllOrders, "Get All orders");

  // const allOrders = getAllOrders?.orders;
  const allOrders = useMemo(
    () => (isLoading ? [] : getAllOrders?.orders),
    [getAllOrders?.orders],
  );
  const navigate = useNavigate();

  const handleViewOrder = (id: any) => {
    window.scroll(0, 0);
    navigate(`/my__orders/${id}`, {
      replace: true,
    });
  };

  // console.log(user, user._id, typeof user._id, "User");
  console.log(allOrders, "All orders now", isLoading);

  const handleToggle = (index: React.SetStateAction<number>) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  // console.log(searchValue, "k");
  // const handleOpen = (value: number) => {
  //   setOpen(open === value ? null : value);
  // };

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  const optionalColumn = {
    id: "expand",

    Header: <div></div>,

    Cell: ({ row }: any) => {
      const navigate = useNavigate();
      // console.log(row?.original, row?.original?._id, "row");

      const handleView = (id: any) => {
        navigate(`/my__orders/${id}`, {
          replace: true,
        });
      };
      return (
        <div>
          <span
            onClick={() => handleView(row?.original?._id)}
            className="flex cursor-pointer items-center gap-3 text-sm text-[#333333] underline transition-all ease-in-out hover:text-[#0eb683] active:scale-90 "
          >
            View
          </span>
        </div>
      );
    },
  };

  //@ts-ignore
  const filteredData =
    allOrders?.filter((b: any) =>
      queryKey.some((key: any) => b[key]?.toLowerCase().includes(searchValue)),
    ) || [];
  console.log(filteredData);

  let itemsPerPage = 4;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);

  return (
    // <h1>Hello</h1>
    <AppLayout>
      <div className=" mt-16 bg-neutral-100 xxs:px-4 lg:bg-white lg:px-12 ">
        <div className="flex-col items-center justify-center py-10 xxs:hidden lg:flex">
          <h2 className="text-[40px] font-medium leading-[47px]">My Orders</h2>

          <div className="mt-1 h-1.5 w-24 bg-[#197B30]"></div>
        </div>
        <div className="xxs:hidden lg:block">
          {allOrders ? (
            <AdminTable
              //@ts-ignore
              Tcolumns={Tcolumns}
              optionalColumn={optionalColumn}
              tabs={["All", "Pending", "Approved", "Rejected"]}
              TData={allOrders}
              placeholder={"Search product name, store names.... "}
              // showFilter={true}
            />
          ) : (
            <div className="mt-40 flex flex-col items-center justify-center">
              <CgSpinnerAlt size={80} className="animate-spin" />
              <p className="mt-4">Fetching data...</p>
            </div>
          )}
        </div>
        {/* mobile */}
        <div className="flex flex-col py-10 lg:hidden">
          <div className=" flex w-full items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full  rounded-full bg-[#F4F4F4]">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="simple-search"
                className="block w-full rounded-full border border-gray-300 bg-[#F4F4F4] p-3 pl-10  text-[14px] leading-[16px]  text-[#333333] focus:border-[#197B30]  focus:ring-[#197B30]"
                placeholder="Search product name or store names"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="tabs hide-scrollbar flex gap-4 overflow-auto pt-8 pb-3 lg:bg-[#fff]">
            {t.map((tab: string, index: React.Key | null | undefined) => (
              <TabSelector
                key={index}
                className={`relative cursor-pointer bg-transparent p-2 px-5 text-center text-[16px] font-normal leading-[19px] underline text-[#5c6f7f]${
                  selectedTab === tab
                    ? " rounded-[8px] border border-[#197B30] text-[#197B30] no-underline shadow-lg transition-all duration-100 ease-in-out"
                    : ""
                }`}
                isActive={selectedTab === tab}
                onClick={() => {
                  setSelectedTab(tab);

                  setChosenTab(tab);
                }}
              >
                {tab}
              </TabSelector>
            ))}
          </div>

          <div className="p-2">
            {/* {allOrders
              ?.filter((b: any) =>
                queryKey.some((key: any) =>
                  b[key]?.toLowerCase().includes(searchValue)
                )
              )
              .map((data: any, index: number) => (
                <AccordionSection
                  key={index}
                  title={
                    <div className="flex  justify-between w-full h-full">
                      <div className="flex gap-2">
                        <figure className="h-9 w-9 rounded-full border">
                          <img
                            src={data?.img}
                            alt="product"
                            className="rounded-full object-cover w-full h-full"
                          />
                        </figure>
                        <div>
                          <ul className="space-y-3">
                            <li className="text-[14px] leading-[16px] font-medium text-[#333333]">
                              {data?.product_name}(1kg){" "}
                            </li>
                            <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                              ₦{data?.price}
                            </li>
                            <li className="text-[14px] leading-[16px] font-normal text-[#22C55E]">
                              {data?.order_status}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <>
                        <div>
                          <ul className="text-right flex flex-col justify-between h-full">
                            <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                              {data?.order_date}
                            </li>
                            <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                              X {data?.quantity}
                            </li>
                          </ul>
                        </div>
                      </>
                    </div>
                  }
                  isExpanded={expandedIndex === index}
                  onToggle={() => handleToggle(index)}
                >
                  <div className="flex  justify-between w-full h-full mt-5">
                    <div className="flex gap-2">
                      <div className="">
                        <ul className="flex flex-col justify-between gap-4 text-left">
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                            Date
                          </li>
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                            Location
                          </li>
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333] ">
                            Total
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <ul className="text-right flex flex-col justify-between h-full gap-4">
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                            {data?.order_date}
                          </li>
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                            {data?.location}
                          </li>
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                            {data?.order_total}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionSection>
              ))} */}

            {chunkArray(allOrders, itemsPerPage)[currentPageIndex - 1]?.map(
              (data: any, index: number) => (
                <AccordionSection
                  key={index}
                  title={
                    <div className=" flex h-full w-full justify-between">
                      <div className="flex gap-2">
                        <figure className="h-9 w-9 rounded-full border">
                          <img
                            src={data?.productDetails[0].productID.images[0]}
                            alt="product"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </figure>
                        <div>
                          <ul
                            className="cursor-pointer"
                            onClick={() => handleViewOrder(data?._id)}
                          >
                            <li className="text-[14px] font-medium leading-[16px] text-[#333333]">
                              {
                                data?.productDetails[0].productID.information
                                  .productName
                              }
                              (1kg)
                            </li>
                            <li className="mt-1 mb-2 text-[14px] font-normal leading-[16px] text-[#333333]">
                              ₦{data?.productDetails[0].price.toLocaleString()}
                            </li>
                            <li
                              className={`text-[14px] font-normal leading-[16px] ${getOrderStatus(
                                data?.status,
                              )}`}
                            >
                              {data?.status}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <>
                        <div>
                          <ul className="flex h-full flex-col justify-between text-right">
                            <li className="text-[14px] font-normal leading-[16px] text-[#333333]">
                              {/* {data?.order_date}
                            {[0].orderDate} */}
                              {moment(data?.orderDate).format("DD MMM YYYY")}
                            </li>
                            <li className="text-[14px] font-normal leading-[16px] text-[#333333]">
                              X {data?.productDetails[0].quantity}
                            </li>
                          </ul>
                        </div>
                      </>
                    </div>
                  }
                  isExpanded={expandedIndex === index}
                  onToggle={() => handleToggle(index)}
                >
                  <div className="mt-5  flex h-full w-full justify-between">
                    <div className="flex gap-2">
                      <div className="">
                        <ul className="flex flex-col justify-between gap-4 text-left">
                          <li className="text-sm font-medium text-zinc-800">
                            Order ID
                          </li>
                          <li className="text-sm font-medium text-zinc-800">
                            Location
                          </li>
                          <li className="text-sm font-medium text-zinc-800 ">
                            Total
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <ul className="flex h-full flex-col justify-between gap-4 text-right">
                          <li className="text-[14px] font-normal leading-[16px] text-[#333333]">
                            {data?._id}
                          </li>
                          <li className="text-[14px] font-normal leading-[16px] text-[#333333]">
                            {
                              data?.productDetails[0].vendor.businessInformation
                                .city
                            }
                          </li>
                          <li className="text-[14px] font-normal leading-[16px] text-[#333333]">
                            ₦{data?.totalAmount.toLocaleString()}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionSection>
              ),
            )}
            <div className="mt-10 flex items-center justify-center    gap-1 bg-white px-4 py-3 sm:px-6">
              <button
                onClick={() =>
                  currentPageIndex !== 1
                    ? setCurrentPageIndex(currentPageIndex - 1)
                    : null
                }
                className={
                  (currentPageIndex === 1 ? "no-item" : "") +
                  " rounded-l-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white "
                }
              >
                <RxCaretLeft size={22} />
              </button>
              <div className="pagination flex items-center gap-1">
                {chunkArray(allOrders, itemsPerPage).map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentPageIndex(index + 1)}
                      className={` border   border-[#A2A2A2]  ${
                        currentPageIndex === index + 1
                          ? "active-page-index    rounded-lg border-[#197B30] bg-[#197b30] text-white"
                          : "rounded-lg border-[#A2A2A2]  text-[#A2A2A2] hover:bg-slate-100"
                      }`}
                    >
                      <span className="px-1.5 text-sm">{index + 1}</span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() =>
                  currentPageIndex !==
                  chunkArray(allOrders, itemsPerPage).length
                    ? setCurrentPageIndex(currentPageIndex + 1)
                    : null
                }
                className={
                  (currentPageIndex ===
                  chunkArray(allOrders, itemsPerPage).length
                    ? "no-items"
                    : "") +
                  " rounded-r-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white"
                }
              >
                <span className="">
                  <RxCaretRight size={22} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyOrder;

interface IAccordionPros {
  title: any;
  children: React.ReactNode;
  onToggle: () => void;
  isExpanded: boolean;
}
const AccordionSection = ({
  title,
  children,
  isExpanded,
  onToggle,
}: IAccordionPros) => {
  return (
    <div className="mt-3 w-full rounded-lg bg-[#fff] p-4">
      <div className=" h-full w-full">
        <div className=" h-full w-full">{title}</div>
      </div>
      <button
        onClick={onToggle}
        className="m-auto flex w-full items-center justify-center py-0.5 text-center transition duration-500 active:scale-90"
      >
        {!isExpanded && <IoChevronDown size={20} color="#197B30" />}
      </button>
      <div
        className={
          (isExpanded ? "flex flex-col" : "hidden") +
          " h-full w-full pt-5 transition-all duration-700 ease-in-out"
        }
      >
        <div className=" h-full w-full">{children}</div>
        <button
          onClick={onToggle}
          className="m-auto flex w-full items-center justify-center py-0.5 text-center transition duration-500 active:scale-90"
        >
          {isExpanded && <IoChevronUp size={20} color="#197B30" />}
        </button>
      </div>
    </div>
  );
};
