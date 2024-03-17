import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoHome, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import tick from "../../assets/images/success_tick.png";

interface ModalProps {
  isOpen: boolean | string;
  onClose: any;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const AccountCreationModal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  // const modalRef = React.useRef(null);

  //   const handleOverLayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //     if (e.target === modalRef.current) {
  //       onClose();
  //     }
  //   };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "250px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const image = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "-90px",
      x: "180px",
      opacity: 1,
      transition: { delay: 0.7 },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="confirmation_modal fixed top-0 left-0 z-50 h-full w-full items-center justify-center  bg-[#68686837] backdrop-blur-sm "
        >
          <motion.div
            variants={modal}
            className="relative m-auto max-w-xl rounded-md bg-white px-8 shadow-md"
          >
            <motion.div variants={image} className="absolute  ">
              {" "}
              <img src={tick} alt="success" width={"30%"} />
            </motion.div>

            <h2 className="pt-16 text-center text-2xl font-medium tracking-wider text-[#333333]">
              Great!
            </h2>
            <p className="text-center text-sm tracking-wide text-[#797979] ">
              Your Account was created Successfully
            </p>
            <div className="flex items-center justify-center space-x-6 py-8">
              <Link
                onClick={() => {
                  onClose(false);
                }}
                className="flex items-center rounded-md border border-[#197b30] bg-[#fff] p-3 text-[#197b30]"
                to={"/"}
              >
                <IoHome className="mr-2" />
                <span>Home</span>
              </Link>
              <Link
                onClick={() => {
                  onClose(false);
                }}
                className="flex items-center rounded-md border border-[#197b30] bg-[#197b30] p-3 text-white"
                to={"/login"}
              >
                <IoLogIn className="mr-2" size={20} />
                <span>Proceed to Login</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountCreationModal;
