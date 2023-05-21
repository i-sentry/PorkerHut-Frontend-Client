import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoHome, IoLogIn } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import tick from "../../assets/images/success_tick.png";
import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import { useCategoryModal } from "../../store/overlay";
import { categories } from "../../pages/admin-dashboard/Category";

interface ISubcategory {
  id: string;
  name: string;
}

interface ICategory {
  id: string;
  name: string;
  subCategories: ISubcategory[];
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const CustomCatModal = () => {
  const modalRef = React.useRef(null);
  const navigate = useNavigate();
  const showModal = useCategoryModal((state) => state.showModal);
  const setShowModal = useCategoryModal((state) => state.setShowModal);
  const selectedCategoryId = useCategoryModal(
    (state) => state.selectedCategoryId
  );
  console.log(categories);

  const getCategory = (
    arr: ISubcategory[],
    id: string
  ): ISubcategory | null => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return arr[i];
      }
    }
    return null; // Return null if no matching object is found
  };

  const cate = getCategory(categories, selectedCategoryId);

  console.log(cate);
  //   const handleOverLayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //     if (e.target === modalRef.current) {
  //       onClose();
  //     }
  //   };
  const isOpen = true;

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
  if (cate) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="confirmation_modal backdrop-blur-sm bg-[#060606b6] fixed w-full h-full top-0 left-0 justify-center  items-center z-50 "
          >
            <motion.div
              variants={modal}
              className="max-w-xl m-auto bg-white rounded-md  relative shadow-md"
            >
              <form>
                <div className="bg-[#F4F4F4]  flex items-center justify-between px-8 py-3 rounded-t-md">
                  <div
                    onClick={() => navigate("/admin")}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <img
                      src={PorkerLogo}
                      alt=""
                      className="md:cursor-pointer h-9"
                    />
                    <h1 className="porker sm:text-xl font-bold text-[#197B30] whitespace-nowrap  font-Roboto-slab select-none text-lg">
                      Porker Hut
                    </h1>
                  </div>
                  <div
                    onClick={() => setShowModal(false)}
                    className="cursor-pointer text-[#A2A2A2] hover:text-[#000]"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="px-8 mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="subcategory"
                      className="text-[#333333] text-[20px] leading-[23px]  "
                    >
                      Add subcategory for {cate?.name}
                    </label>
                    <input
                      name="subcategory"
                      type="text"
                      id="subcategory"
                      className="block w-full mt-2 px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:border-[#197B30] focus:ring-[#197B30] placeholder:text-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] "
                      placeholder={`Enter ${cate?.name.toLowerCase()} subcategory name`}
                    />
                  </div>
                  {/* <p className="  ">Add subcategory for Fashion</p> */}
                  <div className="flex justify-end items-center space-x-6 pb-8 mt-16">
                    <div
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className="flex items-center border border-[#F91919] bg-[#fff] text-[#F91919] py-3 px-8 rounded-md cursor-pointer"
                    >
                      <span>Cancel</span>
                    </div>
                    <div
                      typeof="submit"
                      onClick={() => {
                        // onClose(false);
                      }}
                      className="flex items-center border border-[#197b30] bg-[#197b30] text-white py-3 px-10 rounded-md cursor-pointer"
                    >
                      <span>Add</span>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return null;
  }
};

export default CustomCatModal;
