import React, { useEffect, useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import {
  MdOutlinePersonPinCircle,
  MdOutlineStorefront,
  MdPersonOutline,
} from "react-icons/md";
import productImg from "../../assets/images/productimg1.png";
import OrderModal from "../../components/modal-component/OrderModal";
import { useNavigate, useParams } from "react-router-dom";

import { IOrderData } from "../../components/vendors-component/MyOrderSection";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";
import { OrderData } from "../admin-dashboard/Order";
import AppLayout from "../../components/utility/AppLayout";

const MyOrderDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnclose = () => setShowModal(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const [order, setOrder] = useState<IOrderData>({
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

  useEffect(() => {
    const filteredOrder = OrderData.find((ord: IOrderData) => ord.id === id);
    //@ts-ignore
    setOrder(filteredOrder);
  }, [id]);

  return (
    <AppLayout>
      <div className="m-auto my-24 ">
        <div className="flex items-center flex-col justify-center py-10 relative">
          <h2 className="md:text-[40px] md:leading-[47px] xxs:text-lg font-medium text-[#333333]">
            My Orders
          </h2>

          <div className="h-1.5 w-16 bg-[#197B30] mt-1"></div>
          <div
            onClick={() => {
              navigate("/my__orders");
            }}
            className="hover:rotate-[-60%] hover:transform absolute right-20 cursor:pointer transition duration-150 ease-in-out"
          >
            <Tooltip message="close">
              <IoMdClose size={20} />
            </Tooltip>
          </div>
        </div>
        <div className="flex gap-6 px-14">
          <div
            className="w-1/4 h-40 rounded-lg"
            style={{
              backgroundImage: `url('${productImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-1/2 bg-[#F4F4F4] border border-[#D9D9D9]  rounded-lg pl-4 pr-8 pt-4 shadow-sm">
            <div className="flex flex-col gap-[48px]">
              <div className="">
                <div className="flex gap-2">
                  <MdPersonOutline size={20} />
                  <span className=" text-[16px] leading-[19px] text-[#333333] font-normal">
                    William Nado
                  </span>
                </div>
                <div className="">
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] pr-2">
                    Order Date:
                  </span>
                  <span className="text-[#333333] text-[14px] leading-[16px] pr-2">
                    {" "}
                    {order?.order_date}
                  </span>{" "}
                </div>
              </div>

              <div className="flex justify-between">
                <div className="">
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal pr-2 block">
                    Phone
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.id}
                  </span>
                </div>
                <div className="">
                  <div className="text-xs">
                    <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal pr-2 block">
                      Email
                    </span>
                    <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                      {order?.store_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-40 border border-[#D9D9D9] rounded-lg flex flex-col gap-[54px] bg-[#F4F4F4] shadow-sm">
            <div className="flex items-center justify-between pt-4 px-4">
              <div className="flex gap-2">
                <MdOutlinePersonPinCircle size={20} />
              </div>
              <button
                className="underline text-[16px] leading-[19px] font-normal text-[#333333] cursor-pointer hover:text-[#197b30]"
                onClick={() => setShowModal(true)}
              >
                Track Order
              </button>
            </div>
            <div className="flex justify-between px-4">
              <div className="">
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Billing Address
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.location}
                </span>
              </div>
              <div className="">
                <div className="">
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                    Home Address
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  mt-8 px-14 gap-6">
          <div className="w-1/2 border border-[#D9D9D9] bg-[#F4F4F4] h-40 rounded-lg flex flex-col gap-[72px]">
            <div className="flex justify-between items-center pt-4 px-4">
              <MdOutlineStorefront size={20} />
              <span className="text-sm">Abuja</span>
            </div>
            <div className="flex items-center justify-between pl-4 pr-8">
              <div>
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Store Name
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.store_name}
                </span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Order ID
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.id}
                </span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal  block">
                  Product Name
                </span>
                <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                  {order?.product_name}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 border border-[#D9D9D9] h-40 rounded-lg bg-[#F4F4F4]">
            <div className=" flex flex-col gap-[70px]">
              <div className="flex justify-between items-center pt-4 px-4">
                <IoBasketOutline size={20} />
                <span className="text-[#22C55E] text-[16px] leading-[19px] font-normal">
                  {order?.order_status}
                </span>
              </div>
              <div className="flex items-center justify-between pl-4 pr-8">
                <div>
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal block">
                    Price
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.price}
                  </span>
                </div>
                <div>
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal block">
                    Quantity
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.quantity}
                  </span>
                </div>
                <div>
                  <span className="text-[#A2A2A2] text-[14px] leading-[16px] font-normal block">
                    Order Total
                  </span>
                  <span className="text-[16px] leading-[19px] font-normal text-[#333333]">
                    {order?.order_total}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() =>
                      navigate(`/my__orders/${order.id}/${order?.order_id}`)
                    }
                    className="underline text-[16px] leading-[19px] font-normal text-[#333333] cursor-pointer hover:text-[#197b30]"
                  >
                    Return Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderModal onClose={handleOnclose} visible={showModal} />
    </AppLayout>
  );
};

export default MyOrderDetails;
