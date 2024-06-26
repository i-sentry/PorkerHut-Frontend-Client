import React, { useState } from "react";
import { PiCaretUp } from "react-icons/pi";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="border-b py-2">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={handleToggleAccordion}
      >
        <div className="text-[16px]  font-semibold leading-normal text-[#333]">
          {title}
        </div>
        <button
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <PiCaretUp />
        </button>
      </div>
      {isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
};

export default AccordionItem;
