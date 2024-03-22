import React from "react";
import Accordion from "../utility/Accordion";
import { useSignUpState } from "../../store/overlay";
import { ToastContainer } from "react-toastify";

const SummaryInfo = () => {
  const isOpen = useSignUpState((state) => state.isOpen);

  console.log(isOpen, "isOpen");
  return (
    <div className="m-auto min-h-[400px] max-w-[600px] rounded-md   bg-[#F4F4F4] p-5">
      <ToastContainer />
      <Accordion />

      {/* {isOpen && <AccountCreationModal isOpen={isOpen} onClose={setIsOpen} />} */}
    </div>
  );
};

export default SummaryInfo;
