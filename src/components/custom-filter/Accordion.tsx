import React from "react";

interface AccordionProps {
  items: React.ReactNode[] ;
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return <div className="my-4">{items}</div>;
};

export default Accordion;
