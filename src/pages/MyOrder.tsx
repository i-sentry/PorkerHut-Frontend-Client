import React, { Fragment, useState } from "react";
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
    case "returned Failed":
      return <span className=" text-[#F91919]">Returned Failed</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};

export const ProductNameColumn = ({ data }: any) => {
  // console.log(data?.data, "data product");
  // console.log(data, "new data");
  const adata = data?.cell?.value;
  // console.log(adata, "Adata");

  const lowerData = adata?.toLowerCase();

  const productName = _.startCase(lowerData);
  return (
    <div className="flex items-center gap-2">
      <figure className="h-9 w-9 rounded-full border">
        <img
          src={data?.data[0]?.productDetails[0]?.productID.images[0]}
          alt="product"
          className="rounded-full object-cover w-full h-full"
        />
      </figure>
      <span className="font-light text-sm whitespace-nowrap  text-[#333333]">
        {productName}
      </span>
    </div>
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

    accessor: (row, index) =>
      // @ts-ignore
      row.productDetails[0]?.productID.information.productName,
    Cell: (props: any) => <ProductNameColumn data={props} />,
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
      <span className="text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {formattedDate}
      </span>
      <span className="text-neutral-400 text-sm font-light capitalize mt-1">
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
      <span className=" text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {storeName}
      </span>
      <span className="text-neutral-400 text-sm font-light capitalize mt-1">
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
  const getAllOrders = useGetCustomersOrder(user._id as string);
  console.log(getAllOrders, "Get All orders");

  const allOrders = getAllOrders?.data?.orders;
  const navigate = useNavigate();

  const handleViewOrder = (id: any) => {
    navigate(`/my__orders/${id}`, {
      replace: true,
    });
  };

  // console.log(user, user._id, typeof user._id, "User");
  console.log(allOrders, "All orders now");

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
            className="flex items-center gap-3 text-sm underline text-[#333333] active:scale-90 transition-all ease-in-out cursor-pointer hover:text-[#0eb683] "
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
      queryKey.some((key: any) => b[key]?.toLowerCase().includes(searchValue))
    ) || [];
  console.log(filteredData);

  return (
    // <h1>Hello</h1>
    <AppLayout>
      <div className=" lg:px-12 xxs:px-4 mt-16 bg-neutral-100 lg:bg-white ">
        <div className="xxs:hidden lg:flex items-center flex-col justify-center py-10">
          <h2 className="text-[40px] leading-[47px] font-medium">My Orders</h2>

          <div className="h-1.5 w-24 bg-[#197B30] mt-1"></div>
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
            <div className="flex flex-col items-center justify-center mt-40">
              <CgSpinnerAlt size={80} className="animate-spin" />
              <p className="mt-4">Fetching data...</p>
            </div>
          )}
        </div>
        {/* mobile */}
        <div className="lg:hidden flex flex-col py-10">
          <div className=" flex items-center w-full">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative rounded-full  w-full bg-[#F4F4F4]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 "
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
                className="bg-[#F4F4F4] border border-gray-300 text-[#333333] text-[14px] leading-[16px] focus:ring-[#197B30] rounded-full  focus:border-[#197B30] block  pl-10 p-3  w-full"
                placeholder="Search product name or store names"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="tabs flex gap-4 pt-8 pb-3 overflow-auto lg:bg-[#fff] hide-scrollbar">
            {t.map((tab: string, index: React.Key | null | undefined) => (
              <TabSelector
                key={index}
                className={`cursor-pointer relative underline bg-transparent text-[16px] leading-[19px] font-normal text-center p-2 px-5 text-[#5c6f7f]${
                  selectedTab === tab
                    ? " text-[#197B30] no-underline border border-[#197B30] rounded-[8px] shadow-lg transition-all ease-in-out duration-100"
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
            {allOrders?.map((data: any, index: number) => (
              <AccordionSection
                key={index}
                title={
                  <div className="flex justify-between w-full h-full">
                    <div className="flex gap-2">
                      <figure className="h-9 w-9 rounded-full border">
                        <img
                          src={data?.productDetails[0].productID.images[0]}
                          alt="product"
                          className="rounded-full object-cover w-full h-full"
                        />
                      </figure>
                      <div>
                        <ul
                          className="cursor-pointer"
                          onClick={() => handleViewOrder(data?._id)}
                        >
                          <li className="text-[14px] leading-[16px] font-medium text-[#333333]">
                            {
                              data?.productDetails[0].productID.information
                                .productName
                            }
                            (1kg)
                          </li>
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333] mt-1 mb-2">
                            ₦{data?.productDetails[0].price.toLocaleString()}
                          </li>
                          <li
                            className={`text-[14px] leading-[16px] font-normal ${getOrderStatus(
                              data?.status
                            )}`}
                          >
                            {data?.status}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <>
                      <div>
                        <ul className="text-right flex flex-col justify-between h-full">
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                            {/* {data?.order_date}
                            {[0].orderDate} */}
                            {moment(data?.orderDate).format("DD MMM YYYY")}
                          </li>
                          <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
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
                <div className="flex  justify-between w-full h-full mt-5">
                  <div className="flex gap-2">
                    <div className="">
                      <ul className="flex flex-col justify-between gap-4 text-left">
                        <li className="text-zinc-800 text-sm font-medium">
                          Order ID
                        </li>
                        <li className="text-zinc-800 text-sm font-medium">
                          Location
                        </li>
                        <li className="text-zinc-800 text-sm font-medium ">
                          Total
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <ul className="text-right flex flex-col justify-between h-full gap-4">
                        <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                          {data?._id}
                        </li>
                        <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                          {
                            data?.productDetails[0].vendor.businessInformation
                              .city
                          }
                        </li>
                        <li className="text-[14px] leading-[16px] font-normal text-[#333333]">
                          ₦{data?.totalAmount.toLocaleString()}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionSection>
            ))}
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
    <div className="p-4 w-full rounded-lg bg-[#fff] mt-3">
      <div className=" w-full h-full">
        <div className=" w-full h-full">{title}</div>
      </div>
      <button
        onClick={onToggle}
        className="py-0.5 transition duration-500 active:scale-90 w-full m-auto text-center flex items-center justify-center"
      >
        {!isExpanded && <IoChevronDown size={20} color="#197B30" />}
      </button>
      <div
        className={
          (isExpanded ? "flex flex-col" : "hidden") +
          " transition-all duration-700 ease-in-out w-full h-full pt-5"
        }
      >
        <div className=" w-full h-full">{children}</div>
        <button
          onClick={onToggle}
          className="py-0.5 transition duration-500 active:scale-90 w-full m-auto text-center flex items-center justify-center"
        >
          {isExpanded && <IoChevronUp size={20} color="#197B30" />}
        </button>
      </div>
    </div>
  );
};
