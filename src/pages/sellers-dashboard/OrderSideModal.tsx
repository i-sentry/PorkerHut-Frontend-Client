import React from "react";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";
import { useShowModal } from "../../store/overlay";

const OrderSideModal = ({ orderInfo }: any) => {
  const toggleOpenModal = useShowModal((state) => state.toggleOpenModal);
  console.log(orderInfo, "orderInfo");

  const closeModal = () => {
    toggleOpenModal(false);
  };
  return (
    <>
      <div
        onClick={closeModal}
        className="modal  fixed top-0 left-0 z-50 h-full w-full items-center justify-center transition-opacity duration-300 "
      >
        <div className="modal_overlay  flex h-full cursor-pointer bg-[#13111173]  xxs:justify-center xxs:p-5 md:justify-end md:p-0">
          <div className="relative flex max-h-full  w-full max-w-sm flex-col overflow-auto  bg-white p-5 xxs:rounded-md md:h-full  md:max-w-sm md:rounded-l-md md:px-7 ">
            <>
              <div className="flex items-end justify-end pb-3">
                <Tooltip message="close">
                  <div
                    onClick={closeModal}
                    className="close  flex h-10 w-10 items-center justify-center  rounded-full
                    p-3 hover:rounded-full hover:bg-[#F7FBFB] hover:text-center "
                  >
                    <span className="transition duration-150  ease-in-out hover:rotate-90 hover:transform">
                      <IoMdClose size={29} className="" />
                    </span>
                  </div>
                </Tooltip>
              </div>

              <div>
                <h3 className="font-bold">
                  Customer Details Product Order Notes Price Quantity Status
                </h3>
                <p>
                  {orderInfo.firstName} {orderInfo.lastName}
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSideModal;
