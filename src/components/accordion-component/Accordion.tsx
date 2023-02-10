import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { TbCurrencyNaira } from "react-icons/tb";
import MultiSlider from "./MultiSlider";
import MultiRangeSlider from "./MultiSlider";

interface IconProps {
  id: number;
  open: number;
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

const Filter: React.FC = () => {
  // State to keep track of open Accordion
  const [open, setOpen] = useState(0);
  const [color, setColor] = useState("#197B30");

  // Handle to toggle Accordion open state
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <h1>Filters</h1>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-base font-medium"
        >
          Pig
        </AccordionHeader>
        <AccordionBody>
          <div>
            <div className="mb-3">
              <input type="checkbox" id="1" value={1} />
              <label className="ml-2 text-base" htmlFor="1">
                Berkshire
              </label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="2" value={2} />
              <label className="ml-2 text-base" htmlFor="2">
                Chester White
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="3" value={3} />
              <label className="ml-2 text-base" htmlFor="3">
                Duroc
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="" value={4} />
              <label className="ml-2 text-base" htmlFor="4">
                Hampshire
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="1" value={5} />
              <label className="ml-2 text-base" htmlFor="5">
                Landrace
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="1" value={6} />
              <label className="ml-2 text-base" htmlFor="5">
                Landrace
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
          Animal Feed
        </AccordionHeader>
        <AccordionBody>
          <div>
            <div className="mb-3">
              <input type="checkbox" id="1" value={1} />
              <label className="ml-2 text-base" htmlFor="1">
                Berkshire
              </label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="2" value={2} />
              <label className="ml-2 text-base" htmlFor="2">
                Chester White
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="3" value={3} />
              <label className="ml-2 text-base" htmlFor="3">
                Duroc
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="" value={4} />
              <label className="ml-2 text-base" htmlFor="4">
                Hampshire
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="1" value={5} />
              <label className="ml-2 text-base" htmlFor="5">
                Landrace
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="1" value={6} />
              <label className="ml-2 text-base" htmlFor="5">
                Landrace
              </label>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-base font-medium"
        >
          Livestock
        </AccordionHeader>
        <AccordionBody>
          <div>
            <div className="mb-3">
              <input type="checkbox" id="1" value={1} />
              <label className="ml-2 text-base" htmlFor="1">
                Berkshire
              </label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="2" value={2} />
              <label className="ml-2 text-base" htmlFor="2">
                Chester White
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="3" value={3} />
              <label className="ml-2 text-base" htmlFor="3">
                Duroc
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="" value={4} />
              <label className="ml-2 text-base" htmlFor="4">
                Hampshire
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="1" value={5} />
              <label className="ml-2 text-base" htmlFor="5">
                Landrace
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="1" value={6} />
              <label className="ml-2 text-base" htmlFor="5">
                Landrace
              </label>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-base font-medium"
        >
          Location
        </AccordionHeader>
        <AccordionBody>
          <div>
            <div className="mb-3">
              <input type="checkbox" id="1" value={1} />
              <label className="ml-2 text-base" htmlFor="1">
                Abuja
              </label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="2" value={2} />
              <label className="ml-2 text-base" htmlFor="2">
                Lagos
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="3" value={3} />
              <label className="ml-2 text-base" htmlFor="3">
                Osun
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="" value={4} />
              <label className="ml-2 text-base" htmlFor="4">
                Ekiti
              </label>
            </div>
            <div>
              <input className="mb-3" type="checkbox" id="1" value={5} />
              <label className="ml-2 text-base" htmlFor="5">
                Port Harcourt
              </label>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="text-base font-medium"
        >
          Price
        </AccordionHeader>
        <AccordionBody>
          <MultiRangeSlider min={0} max={2000} />
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default Filter;

