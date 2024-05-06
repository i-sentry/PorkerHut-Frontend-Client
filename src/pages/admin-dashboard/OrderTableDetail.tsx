import React, { useEffect, useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import {
  MdOutlinePersonPinCircle,
  MdOutlineStorefront,
  MdPersonOutline,
} from "react-icons/md";
import OrderModal from "../../components/modal-component/OrderModal";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";
import { OrderData } from "./Order";
import { useGetOrdersById } from "../../services/hooks/orders";
import moment from "moment";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";

export interface IOrderData {
  id: string;
  img: string;
  location: string;
  time: string;
  product_name: string;
  store_name: string;
  order_date: string;
  order_id: string;
  price: string;
  quantity: string;
  order_total: string;
  order_status: string;
}

const OrderTableDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnclose = () => setShowModal(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetOrdersById(id as string);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const order = data?.data?.order;
  const selectedProduct = order?.productDetails[selectedProductIndex];

  const [orderData, setOrderData] = useState<IOrderData>({
    id: "",
    img: "",
    location: "",
    time: "",
    product_name: "",
    store_name: "",
    order_date: "",
    order_id: "",
    price: "",
    quantity: "",
    order_total: "",
    order_status: "",
  });
  const orderStatus = (data: string) => {
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
  useEffect(() => {
    const filteredOrder = OrderData.find((ord: IOrderData) => ord.id === id);
    //@ts-ignore
    setOrderData(filteredOrder);
  }, [id]);

  const handleViewOrder = (index: any) => {
    setSelectedProductIndex(index);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // navigate(`/my__orders/${id}`, {
    //   replace: true,
    // });
  };

  const productImg = selectedProduct?.productID?.images[0];
  const [showInfo, setShowInfo] = useState(false);

  const handleRate = (id: any) => {
    window.scroll(0, 0);
    navigate(`/rate_review/${id}`, {
      replace: true,
    });
  };

  // ORDER STATUS COLOR
  const getOrderStatus = (status: any) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "text-orange-400";
      case "completed":
        return "text-green-500";
      case "failed":
        return "text-red-600";
      case "returned":
        return "text-[#198df9]";
      case "returned failed":
        return "text-red-600";
      default:
        return "gray";
    }
  };

  const orderStatuss = order?.status;
  const statusOrder = getOrderStatus(orderStatuss);

  // OTHER ITEMS IN AN OTHER
  const status = order?.status;
  const _id = order?._id;
  const orderDate = order?.orderDate;
  const otherItems = order?.productDetails?.map((item: any) => ({
    ...item,
    status,
    orderDate,
    _id,
  }));

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Product Name",
      accessor: (row: any) => {
        return (
          <div className="justify-left flex flex-wrap items-center gap-2">
            <img
              src={row?.productID?.images[0]}
              className="h-10 w-10 rounded-full object-cover"
              alt="product thumbnail"
            />
            <span className="capitalize">
              {row?.productID?.information?.productName}
            </span>
          </div>
        );
      },
    },
    {
      Header: "Store Name",
      accessor: (row: any) => {
        return (
          <div className="justify-left flex flex-col items-start gap-2">
            <span className="capitalize">
              {row?.vendor?.sellerAccountInformation?.shopName}
            </span>
            <span className="block capitalize text-neutral-300">
              {row?.vendor.businessInformation?.city}
            </span>
          </div>
        );
      },
    },

    {
      Header: "Order Date",
      accessor: (row: any) => {
        return (
          <div className="justify-left flex flex-col items-start gap-2">
            {moment(row?.orderDate).format("DD MMMM YYYY")}
            <span className="block text-neutral-300">
              {moment(row?.orderDate).format("h:mmA").toLowerCase()}
            </span>
          </div>
        );
      },
    },

    {
      Header: "Order ID",
      accessor: (row: any) => <span>{row?._id}</span>,
    },
    {
      Header: "Price",
      accessor: (row: any) => <span>₦{row?.price.toLocaleString()}</span>,
    },
    {
      Header: "Quantity",
      accessor: (row: any) => <span>{row?.quantity}</span>,
    },

    {
      Header: "Order Total",
      accessor: (row: any) => <span>₦{row?.totalPrice.toLocaleString()}</span>,
    },
    {
      Header: "Status",
      accessor: (row: any) => (
        <span className={`text-sm capitalize ${statusOrder}`}>
          {row?.status}
        </span>
      ),
    },
    {
      Header: " ",
      accessor: (row: any) => (
        <span
          onClick={() => {
            navigate(`/admin/order`);
          }}
          className="cursor-pointer text-sm font-normal text-zinc-800 underline"
        >
          Cancel
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="py-10 px-9">
        <div className="relative mb-4">
          <h2 className="text-2xl font-medium"> Orders</h2>

          <span className="text-sm font-normal text-[#A2A2A2]">
            All Information available
          </span>
          <div
            onClick={() => {
              navigate("/admin/order");
            }}
            className="absolute right-2 bottom-2 transition  duration-150 ease-in-out hover:rotate-[-60%] hover:transform "
          >
            <Tooltip message="close" className="items-start">
              <IoMdClose color="#333333" size={20} className="cursor:pointer" />
            </Tooltip>
          </div>
        </div>

        {isLoading && <Loader />}

        {order && (
          <>
            <div className="hidden flex-wrap justify-between gap-5 lg:flex">
              <div
                className="h-[200px] w-1/4 rounded-lg"
                style={{
                  backgroundImage: `url('${productImg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="flex min-h-[200px] flex-col justify-between rounded-lg border  border-neutral-200 bg-neutral-50 p-4 lg:w-[calc(75%_-_20px)] xxl:w-[calc(75%_/_2_-_20px)]">
                <div className="relative grid grid-cols-2 justify-between">
                  <div className="flex items-start gap-1">
                    <MdPersonOutline size={20} className="mt-1" />
                    <div className="">
                      <span className="block text-base font-normal text-zinc-800">
                        {order?.customer?.firstName}&nbsp;
                        {order?.customer?.lastName}
                      </span>
                      <span className="pr-2 text-[14px] leading-[16px] text-[#A2A2A2]">
                        Order Date: &nbsp;
                        <span className="text-[#333333]">
                          {moment(order?.orderDate).format("DD MMM YYYY")}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-normal text-neutral-400">
                      Email
                    </span>
                    <span className="block text-base text-zinc-800">
                      {order?.customer.email}
                    </span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 items-end justify-between">
                  <div>
                    <span className="text-sm font-normal text-neutral-400">
                      Phone
                    </span>
                    <span className="block text-base text-zinc-800">
                      {order?.billingInformation?.phoneNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-normal text-neutral-400">
                      Billing Address
                    </span>
                    <span className="block text-base text-zinc-800">
                      <Tooltip
                        message={order?.billingInformation.address}
                        className="items-start"
                      >
                        {order?.billingInformation.address?.slice(0, 40)}...
                      </Tooltip>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-neutral-50  p-4 lg:min-h-[100px] lg:w-full xxl:min-h-[200px] xxl:w-[calc(75%_/_2_-_20px)]">
                <div className="">
                  <span className="text-sm text-neutral-400">Order Note</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quas enim ut doloribus et minus, voluptas numquam
                    blanditiis asperiores dolor tempora officiis maxime
                    voluptates quia maiores quam, ducimus explicabo molestias!
                  </p>
                </div>
              </div>
              <div className="flex min-h-[200px] flex-col justify-between rounded-lg border  border-neutral-200 bg-neutral-50 p-4 lg:w-[calc(50%_-_10px)] xl:w-[calc(50%_-_10px)]">
                <div className="flex justify-between">
                  <MdOutlineStorefront size={20} />
                  <span className="text-sm text-neutral-400">Abuja</span>
                </div>
                <div className="mt-16 flex justify-between">
                  <div>
                    <div className="text-sm text-neutral-400">Store Name</div>
                    <span className="text-base text-zinc-800">
                      {
                        selectedProduct?.vendor.sellerAccountInformation
                          .shopName
                      }
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Order ID</div>
                    <span
                      className="text-base text-zinc-800"
                      title={order?._id}
                    >
                      {order?._id.slice(-7)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Product Name</div>
                    <span className="text-base text-zinc-800">
                      {selectedProduct?.productID.information.productName}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[200px] flex-col justify-between rounded-lg border  border-neutral-200 bg-neutral-50 p-4 lg:w-[calc(50%_-_10px)] xl:w-[calc(50%_-_10px)]">
                <div className="flex justify-between">
                  <IoBasketOutline size={20} />
                  <span className={`text-sm capitalize ${statusOrder}`}>
                    {order?.status}
                  </span>
                </div>
                <div className="mt-16 flex items-end justify-between">
                  <div>
                    <div className="text-sm text-neutral-400">Price</div>
                    <span className="text-base text-zinc-800">
                      ₦{selectedProduct?.price.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Quantity</div>
                    <span className="text-base text-zinc-800">
                      {selectedProduct?.quantity}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Order Total</div>
                    <span className="text-base text-zinc-800">
                      ₦{order?.totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 hidden lg:block">
              {/* <h3 className="mb-6 font-['Roboto'] text-2xl font-semibold tracking-wide text-zinc-800">
                Other Items In Your Order
              </h3> */}
              <div className="hide-scroll-bar w-full overflow-auto">
                <AdminTable
                  tabs={[]}
                  placeholder={
                    "Search product name, store names, category.... "
                  }
                  showDropDown={true}
                  showCheckbox={true}
                  Tcolumns={Tcolumns}
                  TData={otherItems}
                  dropDownOption={[
                    {
                      value: "please_select_an_action",
                      label: "Please select an action",
                    },
                    { value: "active", label: "Activate" },
                    { value: "deactivate", label: "Deactivate" },
                  ]}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <OrderModal onClose={handleOnclose} visible={showModal} />
    </>
  );
};

export default OrderTableDetail;

const Loader = () => {
  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr_2fr] gap-5">
        <div className="skeleton-loader h-[200px]"></div>
        <div className="skeleton-loader h-[200px]"></div>
        <div className="skeleton-loader h-[200px]"></div>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_1fr] gap-5">
        <div className="skeleton-loader h-[200px]"></div>
        <div className="skeleton-loader h-[200px]"></div>
      </div>
    </div>
  );
};
