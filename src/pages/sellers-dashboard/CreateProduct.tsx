import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ProductAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" xxs:px-4 md:px-0">
      <div className="md:flex md:items-center md:justify-between ">
        <div className="">
          <div className="mb-10">
            <h1 className=" text-xl font-medium">Create Products</h1>
            <span className="text-xs text-[#A2A2A2]">
              Please select a primary category for your product
            </span>
          </div>

          <div className="mb-8 flex gap-10 xxs:hidden md:flex">
            <button className="border-2 rounded-md px-8 py-2 border-[#197B30] text-[#197B30] text-sm">
              Browse Categories
            </button>
            <button className="text-sm underline">
              Recently Used Categories
            </button>
          </div>
        </div>

        <div className="xxs:mb-10 md:mb-0">
          <div className="relative flex items-center justify-center md:px-5 ">
            <div className="text-[#1F1F1F] absolute top-1/2 -translate-y-1/2 md:left-[350px] xxs:left-[300px] h-9 bg-[#F4F4F4] w-10 flex items-center justify-center rounded-r-lg">
              <HiOutlineSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Order  number, item name or other criteria"
              className="text-sm focus:outline-none active:outline-none h-9 w-[350px] bg-[#F4F4F4] rounded-l-lg pl-4 rounded-r-lg"
            />
          </div>
        </div>
      </div>

      <Accordion open={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-base px-8 font-normal bg-[#F4F4F4] rounded-t-xl"
        >
          Pork
        </AccordionHeader>
        <AccordionBody
          style={{
            display: "flex",
            background: "#333333",
            flexDirection: "Column",
            color: "white",
          }}
        >
          <div className="px-8 flex flex-col gap-2">
            <Link to="/vendor/create-product/stepper" className="underline">
              Bacon
            </Link>
            <span className="underline">Pork Belly</span>
            <span className="underline">Pork Shoulder</span>
            <span className="underline">Pork Tenderloin</span>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-base px-8 font-normal bg-[#F4F4F4]"
        >
          Farm Feeds
        </AccordionHeader>
        <AccordionBody
          style={{
            display: "flex",
            background: "#333333",
            flexDirection: "Column",
            color: "white",
          }}
        >
          <div className="px-8 flex flex-col gap-2">
            <span className="underline">Bacon</span>
            <span className="underline">Pork Belly</span>
            <span className="underline">Pork Shoulder</span>
            <span className="underline">Pork Tenderloin</span>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-base px-8 font-normal bg-[#F4F4F4] rounded-b-xl"
        >
          Livestocks
        </AccordionHeader>
        <AccordionBody
          style={{
            display: "flex",
            background: "#333333",
            flexDirection: "Column",
            color: "white",
          }}
        >
          <div className="px-8 flex flex-col gap-2">
            <span className="underline">Bacon</span>
            <span className="underline">Pork Belly</span>
            <span className="underline">Pork Shoulder</span>
            <span className="underline">Pork Tenderloin</span>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
