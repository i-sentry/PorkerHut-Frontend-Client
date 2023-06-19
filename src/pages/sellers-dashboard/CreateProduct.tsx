import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

 function CreateProduct() {
  const [open, setOpen] = useState(0);
  const [category, setCategory] = useState(true);
  const [recent, setRecent] = useState(false);

  const handleCategory = () => {
    setCategory(true);
    setRecent(false);
  };

  const handleRecent = () => {
    setRecent(true);
    setCategory(false);
  };
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" xxs:px-4 md:px-0">
      <Accordion open={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-[16px] leading-[19px] font-medium px-8  bg-[#F4F4F4] rounded-t-xl"
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
          className=" text-[16px] leading-[19px] font-medium px-8 bg-[#F4F4F4]"
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
          className="text-[16px] leading-[19px] font-medium px-8 bg-[#F4F4F4] rounded-b-xl"
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


export default CreateProduct;