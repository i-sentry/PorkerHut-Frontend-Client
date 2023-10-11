import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import MultiRangeSlider from "../../components/accordion-component/MultiSlider";
import { productData } from "../../utils/productData";

interface IconProps {
  id: number;
  open: number;
}

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
}

const Icon: React.FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

const ProductFilter = ({ menuItem, setData }: iProps) => {
  // State to keep track of open Accordion
  const [open, setOpen] = useState(0);
  // const [color, setColor] = useState("#197B30");

  // Handle to toggle Accordion open state
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const filter = (cate: any) => {
    const newItems = productData.filter((newVal: any) => {
      return newVal.category === cate;
    });
    setData(newItems);
  };
  const [selected, setSelected] = React.useState(null);

  console.log(selected);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelected(value === selected ? null : value);
  };

  const handleClick = (event: any) => {
    handleChange(event);
    filter(event.target.nextSibling.textContent);
    console.log(event.target.defaultValue, "event");
    if (selected !== null) {
      setData(productData);
    }
  };

  return (

      <div className=" h-full">
        <h1>Filters</h1>

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-base font-medium"
          >
            Location
          </AccordionHeader>
          <AccordionBody>
            <div>
              <div>
                <input type="checkbox" id="1" value={1} />
                <label className="ml-2 text-base font-normal" htmlFor="1">
                  Abuja
                </label>
              </div>
              <div>
                <input type="checkbox" id="2" value={2} />
                <label className="ml-2 text-base font-normal" htmlFor="2">
                  Lagos
                </label>
              </div>
              <div>
                <input type="checkbox" id="3" value={3} />
                <label className="ml-2 text-base font-normal" htmlFor="3">
                  Osun
                </label>
              </div>
              <div>
                <input type="checkbox" id="" value={4} />
                <label className="ml-2 text-base font-normal" htmlFor="4">
                  Ekiti
                </label>
              </div>
              <div>
                <input type="checkbox" id="1" value={5} />
                <label className="ml-2 text-base font-normal" htmlFor="5">
                  Port Harcourt
                </label>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-base font-medium"
          >
            Price
          </AccordionHeader>
          <AccordionBody>

            <div className="mt-12 mb-20">
            <MultiRangeSlider min={0} max={2000} />
          </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-base font-medium"
          >
            Type
          </AccordionHeader>
          <AccordionBody>
            <div className="mt-20">
              <div>
                <input type="checkbox" id="1" value={1} />
                <label className="ml-2 text-base font-normal" htmlFor="1">
                  Berkshire
                </label>
              </div>
              <div>
                <input type="checkbox" id="2" value={2} />
                <label className="ml-2 text-base font-normal" htmlFor="2">
                  Chester White
                </label>
              </div>
              <div>
                <input type="checkbox" id="3" value={3} />
                <label className="ml-2 text-base font-normal" htmlFor="3">
                  Duroc
                </label>
              </div>
              <div>
                <input type="checkbox" id="" value={4} />
                <label className="ml-2 text-base font-normal" htmlFor="4">
                  Hampshire
                </label>
              </div>
              <div>
                <input type="checkbox" id="1" value={5} />
                <label className="ml-2 text-base font-normal" htmlFor="5">
                  Landrace
                </label>
              </div>
              <div>
                <input type="checkbox" id="1" value={6} />
                <label className="ml-2 text-base font-normal" htmlFor="5">
                  Landrace
                </label>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

  );
};

export default ProductFilter;
