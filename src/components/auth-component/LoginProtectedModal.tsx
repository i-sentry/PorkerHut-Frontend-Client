import React from "react";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginProtectedModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="relative z-50 bg-white p-8 rounded-lg max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">
              You must be logged in to perform this action.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/login?q=customer");
                  onClose()
                }}
                className="bg-[#197B30] text-white px-4 py-2 rounded mr-4 focus:outline-none"
              >
                Login
              </button>

              <button
                onClick={onClose}
                className="bg-gray-300 text-[#a10] px-4 py-2 rounded focus:outline-none"
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

export default LoginProtectedModal;
