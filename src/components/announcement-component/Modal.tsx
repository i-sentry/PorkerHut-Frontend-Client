import React from "react";
import { HiMinusSm, HiX } from "react-icons/hi";
import { MdOutlineAccessAlarm } from "react-icons/md";

type ModalProps = {
  isVisible: boolean;
  onClose: any;
};

const Modal = ({ isVisible, onClose }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div className="w-[550px] h-full mt-20">
        <div className="bg-white  rounded">
          <div className="flex items-center justify-between px-4 py-3 bg-[#F4F4F4]">
            <h1>New Annoucement</h1>
            <div className="flex items-center gap-3">
              <HiMinusSm className="hover:cursor-pointer" />
              <MdOutlineAccessAlarm className="hover:cursor-pointer" />
              <HiX onClick={() => onClose()} className="hover:cursor-pointer" />
            </div>
          </div>
          <div>
            <form action="" className="mx-2 py-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="px-4 w-full h-10 border-b-2 outline-none font-medium placeholder:text-sm placeholder:font-normal"
              />

              <div className="">
                <div className="rounded bg-white h-80 overflow-hidden">
                  <textarea
                    placeholder="Type message here...."
                    name=""
                    id=""
                    className="w-full appearance-none outline-none focus:outline-none py-2 h-80  px-4 border-none placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="px-4">
                <button className="bg-[#197B30] text-white rounded py-2 px-6 hover:bg-[#197B39]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
