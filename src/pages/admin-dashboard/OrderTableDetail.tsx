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
import { OrderData } from "../MyOrder";
import { IOrderData } from "../../components/sellers-order-page-component/MyOrderSection";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";

const OrderTableDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnclose = () => setShowModal(false);

  const { id } = useParams();

  const navigate = useNavigate();

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

  useEffect(() => {
    const filteredOrder = OrderData.find((ord: IOrderData) => ord.id === id);
    //@ts-ignore
    setOrderData(filteredOrder);
  }, [id]);

  return (
    <>
      <div className="m-auto ml-10 mt-4 mb-8 mr-4">
        <div className="mb-10 relative">
          <h2 className="text-xl font-medium"> Orders</h2>

          <span className="text-[#A2A2A2] text-sm">
            All Information available
          </span>
          <div
            onClick={() => {
              navigate("/admin-dashboard/admin-order");
            }}
            className="hover:rotate-[-60%] hover:transform absolute right-2 cursor:pointer transition duration-150 ease-in-out"
          >
            <Tooltip message="close">
              <IoMdClose />
            </Tooltip>
          </div>
        </div>
        <div className="flex gap-6">
          <div
            className="w-1/4 h-40 rounded-lg"
            style={{
              backgroundImage: `url('${productImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-1/2 bg-[#D9D9D9]  rounded-lg pl-4 pr-8 pt-4">
            <div className="flex flex-col gap-[48px]">
              <div className="">
                <div className="flex gap-2">
                  <MdPersonOutline size={20} />
                  <span className=" text-sm">William Nado</span>
                </div>
                <span className="text-xs">
                  <span className="text-[#A2A2A2] text-xs pr-2">
                    Order Date:
                  </span>
                  {orderData?.order_date}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="">
                  <span className="text-[#A2A2A2] text-xs pr-2 block">
                    Phone
                  </span>
                  <span className="text-xs">{orderData?.id}</span>
                </div>
                <div className="">
                  <span className="text-xs">
                    <span className="text-[#A2A2A2] text-xs pr-2 block">
                      Email
                    </span>
                    {orderData?.store_name}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-40 bg-[#D9D9D9] rounded-lg flex flex-col gap-[54px]">
            <div className="flex flex-col pt-4 px-4">
              <div className="">
                <span className="text-sm text-[#A2A2A2]">Order Note</span>
              </div>

              <div className="text-sm">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus recusandae nemo qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur a repudiandae quis amet temporibus accusamus corporis impedit soluta fugiat.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  mt-4 gap-6">
          <div className="w-1/2 bg-[#D9D9D9] h-40 rounded-lg flex flex-col gap-[72px]">
            <div className="flex justify-between items-center pt-4 px-4">
              <MdOutlineStorefront size={20} />
              <span className="text-sm">Abuja</span>
            </div>
            <div className="flex items-center justify-between pl-4 pr-8">
              <div>
                <span className="text-[#A2A2A2] text-xs block">Store Name</span>
                <span className="text-xs">{orderData?.store_name}</span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-xs block">Order ID</span>
                <span className="text-xs">{orderData?.id}</span>
              </div>
              <div>
                <span className="text-[#A2A2A2] text-xs block">
                  Product Name
                </span>
                <span className="text-xs">{orderData?.product_name} </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-[#D9D9D9] h-40 rounded-lg">
            <div className=" flex flex-col gap-[70px]">
              <div className="flex justify-between items-center pt-4 px-4">
                <IoBasketOutline size={20} />
                <span className="text-sm">Completed</span>
              </div>
              <div className="flex items-center justify-between pl-4 pr-8">
                <div>
                  <span className="text-[#A2A2A2] text-xs block">Price</span>
                  <span className="text-xs">{orderData?.price}</span>
                </div>
                <div>
                  <span className="text-[#A2A2A2] text-xs block">Quantity</span>
                  <span className="text-xs">{orderData?.quantity}</span>
                </div>
                <div>
                  <span className="text-[#A2A2A2] text-xs block">
                    Order Total
                  </span>
                  <span className="text-xs">{orderData?.order_total}</span>
                </div>
                <div>
                  <button className="text-xs underline">Return Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderModal onClose={handleOnclose} visible={showModal} />
    </>
  );
};

export default OrderTableDetail;
