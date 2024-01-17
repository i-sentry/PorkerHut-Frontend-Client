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
      <div className="flex justify-between items-center">
        <div className="text-[16px]  leading-normal text-[#333] font-semibold">
          {title}
        </div>
        <button
          className={`transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={handleToggleAccordion}
        >
          <PiCaretUp />
        </button>
      </div>
      {isOpen && <div className="ml-4">{children}</div>}
    </div>
  );
};

export default AccordionItem;
