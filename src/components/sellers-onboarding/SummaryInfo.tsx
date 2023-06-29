import React, { useState } from "react";
import Accordion from "../utility/Accordion";
import AccountCreationModal from "../modal-component/AccountCreationModal";
import { useSignUpState } from "../../store/overlay";

const SummaryInfo = () => {

    const isOpen = useSignUpState((state) => state.isOpen);
  const setIsOpen = useSignUpState((state) => state.setIsOpen);

  console.log(isOpen, "isOpen");
  return (
    <div className="max-w-[600px] m-auto min-h-[400px] p-5   bg-[#F4F4F4] rounded-md">
      <Accordion />

      {isOpen && <AccountCreationModal isOpen={isOpen} onClose={setIsOpen} />}
    </div>
  );
};

export default SummaryInfo;
