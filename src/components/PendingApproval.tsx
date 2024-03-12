import React from "react";
import { useNavigate } from "react-router-dom";
import Opps from "../assets/opps.svg";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PendingApproval: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden lg:absolute">
          <div className="fixed inset-0 h-full w-full bg-black opacity-50 lg:absolute"></div>

          <div className="relative z-50 m-4 max-w-md rounded-lg bg-white p-8 text-center">
            <img
              src={Opps}
              alt="sad illustration"
              width={284}
              height={183}
              className="mx-auto mb-3 inline-block scale-90"
            />
            <h2 className="mb-2 text-2xl font-semibold">
              Oops!!! Your Vendor Account is Pending Approval
            </h2>
            <p className="mb-6 text-gray-600">
              You must be approved to create a product. Please kindly wait for
              next 3 business day for approval
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/vendor");
                  onClose();
                }}
                className="mr-4 rounded bg-[#197B30] px-4 py-2 text-white focus:outline-none"
              >
                Go to Home
              </button>

              <button
                onClick={onClose}
                className="rounded bg-gray-300 px-4 py-2 text-[#a10] focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PendingApproval;
