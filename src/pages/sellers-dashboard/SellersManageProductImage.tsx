
import { BsSearch } from "react-icons/bs";
import SellerProductImageTable, { Modal } from "./SellerProductImageTable";
import { useState } from "react";

const SellersManageProductImage = () => {
  const [showModal, setShowModal] = useState(false)

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
        <div className="flex md:justify-end">
          <label htmlFor="search" className="relative inline-block w-[350px]">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search name or product ID...."
              className="form-input w-full rounded-md bg-neutral-200 px-4 focus:border-green-500 focus:ring-green-500"
            />
            <BsSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
          </label>
        </div>
        <p className="mt-2 text-green-700">
          <strong>Note:</strong> You can only update a product images at a time
        </p>
      </div>

      <div className="mt-3">
        <SellerProductImageTable toggleModal={toggleModal} />
      </div>
      <Modal onClose={toggleModal} isOpen={showModal} />
    </div>
  );
};

export default SellersManageProductImage;
