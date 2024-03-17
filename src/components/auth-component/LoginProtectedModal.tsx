import React from "react";
import { BsX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginProtectedModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <span
            onClick={onClose}
            className="absolute top-20 right-7 cursor-pointer text-white"
          >
            <BsX size={36} />
          </span>

          <div className="relative z-50 max-w-md rounded-lg bg-white p-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold">Login Required</h2>
            <p className="mb-6 text-gray-600">
              You must be logged in to perform this action.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/login?q=customer&billing=true");
                  onClose();
                }}
                className="mr-4 rounded bg-[#197B30] px-4 py-2 text-white focus:outline-none"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/sign-up?q=billing");
                  onClose();
                }}
                className="rounded border border-[#197B30] bg-gray-50 px-4 py-2 font-medium text-[#197B30] focus:outline-none"
              >
                Sign Up
              </button>

              {/* <button
                onClick={onClose}
                className="rounded bg-gray-300 px-4 py-2 text-[#a10] focus:outline-none"
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginProtectedModal;
