import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PorkerLogo from "../../assets/images/porker.png";
import { useCategoryModal } from "../../store/overlay";
// import { categories } from "../../pages/admin-dashboard/Category";
import { useNavigate } from "react-router-dom";

interface ISubcategory {
  id: string;
  name: string;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const CustomCatModal = ({ category, setCateInfo, cateInfo }: any) => {
  const setShowModal = useCategoryModal((state) => state.setShowModal);
  const selectedCategoryId = useCategoryModal(
    (state) => state.selectedCategoryId,
  );
  const navigate = useNavigate();
  const [subcategory, setSubcategory] = useState("");

  const getCategory = (arr: any[], id: string): ISubcategory | null => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === id) {
        return arr[i];
      }
    }
    return null; // Return null if no matching object is found
  };

  const selectedCat = category?.find(
    (cat: any) => cat._id === selectedCategoryId,
  );

  const cate = getCategory(category, selectedCategoryId);

  console.log(cate, selectedCat, "ccjjcjcjcjc");
  //   const handleOverLayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //     if (e.target === modalRef.current) {
  //       onClose();
  //     }
  //   };
  const isOpen = true;

  const modal = {
    hidden: {
      y: "10px",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const handleAdd = () => {
    const catName = String(cate?.name);
    setCateInfo((prev: any) => !prev);
    navigate(
      `/admin/manage+category?cateInfo=${encodeURIComponent(cateInfo)}&cat=${encodeURIComponent(catName)}&sub=${encodeURIComponent(subcategory)}`,
    );
    setShowModal(false);
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
            className="confirmation_modal fixed top-0 left-0 z-[80] flex h-full w-full items-center justify-center  bg-[#060606b6] backdrop-blur-sm "
          >
            <motion.div
              variants={modal}
              className="relative w-[500px] rounded-md  bg-white shadow-md"
            >
              <form>
                <div className="flex items-center justify-between rounded-t-md bg-[#F4F4F4] px-8 py-3">
                  <div
                    onClick={() => navigate("/admin")}
                    className="flex cursor-pointer select-none items-center gap-2"
                  >
                    <img
                      src={PorkerLogo}
                      alt=""
                      className="h-9 md:cursor-pointer"
                    />
                    <h1 className="porker select-none whitespace-nowrap font-Roboto-slab text-lg  font-bold text-[#197B30] sm:text-xl">
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
                <div className="mt-4 px-8">
                  <div className="w-full">
                    <label
                      htmlFor="subcategory"
                      className="text-[20px] leading-[23px] text-[#333333]  "
                    >
                      Add subcategory for{" "}
                      <span className="capitalize">{cate?.name}</span>
                    </label>
                    <input
                      name="subcategory"
                      type="text"
                      id="subcategory"
                      value={subcategory}
                      onChange={(e) => setSubcategory(e.target.value)}
                      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A2A2A2] focus:border-[#197B30] focus:ring-[#197B30] "
                      placeholder={`Enter ${cate?.name.toLowerCase()} subcategory name`}
                    />
                  </div>
                  {/* <p className="  ">Add subcategory for Fashion</p> */}
                  <div className="mt-16 flex items-center justify-end space-x-6 pb-8">
                    <div
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className="flex cursor-pointer items-center rounded-md border border-[#F91919] bg-[#fff] py-3 px-8 text-[#F91919]"
                    >
                      <span>Cancel</span>
                    </div>
                    <div
                      typeof="submit"
                      onClick={handleAdd}
                      className="flex cursor-pointer items-center rounded-md border border-[#197b30] bg-[#197b30] py-3 px-10 text-white"
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
