import React, { useContext, useEffect } from "react";
import Accordion from "../utility/Accordion";
import { BsX } from "react-icons/bs";
import { useAppState } from "../../context/SellerInfoContext";

const StoreProfileOverlay = ({ isOpen, setIsOpen, item }: any) => {
  const { state, setState } = useAppState();

  const onClose = () => {
    setIsOpen(false);
    setState({
      sellerAccountInformation: {
        shopName: "",
        entityType: "",
        accountOwnersName: "",
        email: "",
        phoneNumber: "",
        additionalPhoneNumber: "",
        password: "",
      },
      businessInformation: {
        companyRegisteredName: "",
        address1: "",
        address2: "",
        city: "",
        businessOwnerName: "",
        TINRegistrationNumber: "",
        dateOfBirth: "",
        IDType: "",
        CACRegistrationNumber: "",
        VATRegistered: "",
      },
      vendorBankAccount: {
        bankName: "",
        accountName: "",
        accountNumber: "",
      },
    });
  };
  return (
    <div
      className={`fixed top-16 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-5 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative h-[600px] w-1/2 overflow-y-auto pb-20">
        <span
          className="absolute top-8 right-4 z-20 cursor-pointer bg-[#F4F4F4]"
          onClick={onClose}
        >
          <BsX size={32} />
        </span>
        <div className="hide-scroll-bar h-full overflow-auto bg-[#F4F4F4] p-8">
          <Accordion height="h-auto" storeInfo={true} item={item} />

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="cursor-pointer rounded-md border border-red-600 px-6 py-3 text-red-600"
            >
              Cancel
            </button>
            <button className="cursor-pointer rounded-md border border-green-700 bg-green-700 px-6 py-3 text-white">
              Close Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProfileOverlay;
