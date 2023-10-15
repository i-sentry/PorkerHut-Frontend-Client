import React from "react";
import { MdOutlineCancel } from "react-icons/md";

type ModalProps = {
  isVisible: boolean;
  onClose: any;
};

const CartMobileModal = ({ isVisible, onClose }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 w-full h-full  bg-black bg-opacity-25  flex items-center z-50 py-60 px-5"
      onClick={handleClose}

    >
      <div className="w-full h-full"

      >
        <div className="bg-white  rounded px-4 py-4">
          <div className="flex items-center justify-between text-[#797979]">
            <h1 className="text-[#797979]">Order Notes</h1>
            <MdOutlineCancel size={20}
             onClick={onClose}

            />
          </div>
          <div className="mt-2">
            <form action="" className="">
              <textarea

                id="order-notes"
                placeholder="Type here"
                className=" h-16 outline-none border rounded px-5 py-4 mt-2 w-full"
              ></textarea>
              <div className="mt-4">
                <button className="bg-[#197B30] h-16 text-white rounded  hover:bg-[#197B39] w-full">
                  Add note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMobileModal;
