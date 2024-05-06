import React from "react";
import { IoMdClose } from "react-icons/io";
import { Tooltip } from "../../components/utility/ToolTip";
import { useShowModal } from "../../store/overlay";

const OrderSideModal = ({ orderInfo }: any) => {
  const toggleOpenModal = useShowModal((state) => state.toggleOpenModal);

  const closeModal = () => {
    toggleOpenModal(false);
  };

  const getStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "text-[#F29339]";
      case "completed":
        return "text-[#22C55E]";
      case "failed":
        return "text-[#F91919]";
      case "returned":
        return "text-[#198df9]";
      case "returned failed":
        return "text-[#f91919]";
      default:
        return "text-[#202223]";
    }
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="modal  fixed top-0 left-0 z-50 h-full w-full items-center justify-center transition-opacity duration-300 "
      >
        <div className="modal_overlay  flex h-full cursor-pointer bg-[#13111173]  xxs:justify-center xxs:p-5 md:justify-end md:p-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full  w-full max-w-sm cursor-auto flex-col overflow-auto  bg-white p-5 xxs:rounded-md md:h-full  md:max-w-sm md:rounded-l-md md:px-7 "
          >
            <>
              <div className="fixed top-16 right-5 flex items-end justify-end pb-3">
                <Tooltip message="close">
                  <div
                    onClick={closeModal}
                    className="close flex h-10  w-10 items-center justify-center
                    bg-white p-3"
                  >
                    <span className="transition duration-150  ease-in-out hover:rotate-90 hover:transform">
                      <IoMdClose size={29} className="" />
                    </span>
                  </div>
                </Tooltip>
              </div>

              <div className="mt-16 flex flex-col gap-8">
                <h3 className="text-xl font-bold uppercase text-green-700">
                  Order Details
                </h3>

                <div className="">
                  <h3 className="text-lg font-bold">Customer</h3>
                  <p className="capitalize">
                    {orderInfo?.billingInformation?.firstName}{" "}
                    {orderInfo?.billingInformation?.lastName} -{" "}
                    {orderInfo?.billingInformation?.address}
                  </p>
                  <p className="mt-1 font-semibold">
                    {orderInfo?.billingInformation?.phoneNumber}
                  </p>
                </div>

                <div className="">
                  <h3 className="text-lg font-bold">Products</h3>
                  <p>
                    {orderInfo?.productDetails?.map(
                      (product: any, index: number) => (
                        <span key={index} className="block capitalize">
                          - {product?.productID?.information?.productName}
                        </span>
                      ),
                    )}
                  </p>
                </div>
                <div className="">
                  <h3 className="text-lg font-bold"> Order Notes</h3>
                  <p>{orderInfo?.orderNotes || "Needed from Backend"}</p>
                </div>
                <div className="">
                  <h3 className="text-lg font-bold">Price</h3>
                  <p>₦{orderInfo?.totalAmount.toLocaleString()}</p>
                </div>
                <div className="">
                  <h3 className="text-lg font-bold">Quantity</h3>
                  <p>{orderInfo?.productDetails.length}</p>
                </div>
                <div className="">
                  <h3 className="text-lg font-bold">Status</h3>
                  <p className={`capitalize ${getStatus(orderInfo?.status)}`}>
                    {orderInfo?.status}
                  </p>
                </div>

                <div>
                  <h3 className="mb-5 text-lg font-bold">Product Images</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {orderInfo?.productDetails?.map(
                      (product: any, index: number) => (
                        <img
                          key={index}
                          className="h-[100px] w-full object-cover"
                          src={product?.productID.images[index]}
                          alt={product?.productID?.information?.productName}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSideModal;
