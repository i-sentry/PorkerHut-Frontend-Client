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
      className="fixed inset-0 z-50 flex  h-full w-full  items-center bg-black bg-opacity-25 py-60 px-5"
      onClick={handleClose}
    >
      <div className="h-full w-full">
        <div className="rounded  bg-white px-4 py-4">
          <div className="flex items-center justify-between text-[#797979]">
            <h1 className="text-[#797979]">Order Notes</h1>
            <MdOutlineCancel
              size={20}
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
          <div className="mt-4">
            <form className="">
              <textarea
                id="order-notes"
                placeholder="Type here"
                className=" mt-2 h-[100px] w-full rounded border px-5 py-4 outline-none"
              ></textarea>
              <div className="mt-4">
                <button className="h-16 w-full rounded bg-[#197B30]  text-white hover:bg-[#197B39]">
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
