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
  console.log(data?.data?.order, "hyunmdhdhf");

  const order = data?.data?.order;
  console.log(order, "new order table");
  const selectedProduct = order?.productDetails[selectedProductIndex];
  console.log(selectedProduct, "selectedProduct");

  // ssusuuss

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

  console.log(otherItems, "otherItems");

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

        {data && (
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
              <div className="flex min-h-[200px] flex-col justify-between rounded-lg border  border-neutral-200 bg-neutral-50 p-4 lg:w-[calc(75%_-_20px)] xl:w-[calc(75%_/_2_-_20px)]">
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
              <div className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-neutral-50  p-4 lg:min-h-[100px] lg:w-full xl:min-h-[200px] xl:w-[calc(75%_/_2_-_20px)]">
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
                  <span className={`text-sm ${statusOrder}`}>
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
              <h3 className="mb-6 font-['Roboto'] text-2xl font-semibold tracking-wide text-zinc-800">
                Other Items In Your Order
              </h3>
              <div className="w-full">
                <table className="w-full border-collapse rounded-2xl border border-zinc-300">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Product Name
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Store Name
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Order Date
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Order ID
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Prices
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        No of items
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left">
                        Status
                      </th>
                      <th className="border border-zinc-300 py-4 px-8 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {otherItems?.map((item: any, index: any) => (
                      <tr key={index}>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          <div className="justify-left flex flex-wrap items-center gap-2">
                            <img
                              src={item?.productID.images[0]}
                              className="h-10 w-10 rounded-full object-cover"
                              alt="product thumbnail"
                            />
                            <span>
                              {item?.productID.information.productName}
                            </span>
                          </div>
                        </td>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          <span>
                            {item?.vendor.sellerAccountInformation.shopName}
                          </span>
                          <span className="block text-neutral-300">
                            {item?.vendor.businessInformation.city}
                          </span>
                        </td>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          {moment(item?.orderDate).format("DD MMMM YYYY")}
                          <span className="block text-neutral-300">
                            {moment(item?.orderDate)
                              .format("h:mmA")
                              .toLowerCase()}
                          </span>
                        </td>
                        <td className="border border-zinc-300 p-3  px-5 text-sm">
                          {item?._id || "-"}
                        </td>
                        <td className="border border-zinc-300 p-3  text-sm">
                          ₦{item?.price.toLocaleString()}
                        </td>
                        <td className="border border-zinc-300 p-3 px-5 text-sm">
                          {item?.quantity}
                        </td>
                        <td
                          className={`border border-zinc-300 p-3 px-5 text-sm ${statusOrder}`}
                        >
                          {item?.status || "-"}
                        </td>
                        <td
                          className={`border border-zinc-300 p-3 px-5 text-sm`}
                        >
                          <span
                            onClick={() => {
                              handleViewOrder(index);
                            }}
                            className="cursor-pointer text-sm font-normal text-zinc-800 underline"
                          >
                            View
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
