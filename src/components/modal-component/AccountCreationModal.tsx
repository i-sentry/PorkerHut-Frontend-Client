import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoHome, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import tick from "../../assets/images/success_tick.png"

interface ModalProps {
  isOpen: boolean | string;
  onClose: any;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const AccountCreationModal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  const modalRef = React.useRef(null);

//   const handleOverLayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
//     if (e.target === modalRef.current) {
//       onClose();
//     }
//   };


    const modal = {
        hidden: {
            y: "-100vh",
            opacity:0
        },
        visible: {
            y: "250px",
            opacity: 1,
            transition:{ delay:0.5 }
        }
    }

    const image = {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
          y: "-90px",
          x:"180px",
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
          className="confirmation_modal backdrop-blur-sm bg-[#68686837] fixed w-full h-full top-0 left-0 justify-center  items-center z-50 "
        >
          <motion.div
            variants={modal}
            className="max-w-xl m-auto bg-white rounded-md px-8 relative shadow-md"
          >
            <motion.div variants={image} className="absolute  ">
              {" "}
              <img src={tick} alt="success" width={"30%"} />
            </motion.div>

            <h2 className="text-2xl tracking-wider text-[#333333] text-center font-medium pt-16">
              Great!
            </h2>
            <p className="text-[#797979] text-sm text-center tracking-wide ">
              Your Account was created Successfully
            </p>
            <div className="flex justify-center items-center space-x-6 py-8">
              <Link
                onClick={() => {
                  onClose(false);
                }}
                className="flex items-center border border-[#197b30] bg-[#fff] text-[#197b30] p-3 rounded-md"
                to={"/"}
              >
                <IoHome className="mr-2" />
                <span>Home</span>
              </Link>
              <Link
                onClick={() => {
                  onClose(false);
                }}
                className="flex items-center border border-[#197b30] bg-[#197b30] text-white p-3 rounded-md"
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
