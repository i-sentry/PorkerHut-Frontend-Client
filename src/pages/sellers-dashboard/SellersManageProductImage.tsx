
import SellerProductImageTable, { Modal } from "./SellerProductImageTable";
import { useState } from "react";

const SellersManageProductImage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="mb-10 px-4 pt-6 ">
      <div className="">
        <h1 className="mb-3 text-[#1F1F1F] xxs:text-[20px]  xxs:font-normal  xxs:leading-[23px] md:text-[36px] md:font-medium md:leading-[42px]">
          Manage Products Images
        </h1>
        <div className="mb-4 ">
          <span className="text-[14px] font-normal leading-[16px] text-[#A2A2A2] ">
            Here you can manage your product images
          </span>
        </div>
      </div>

      <div className="mt-3">
        <SellerProductImageTable toggleModal={toggleModal} />
      </div>
      <Modal onClose={toggleModal} isOpen={showModal} />
    </div>
  );
};

export default SellersManageProductImage;
