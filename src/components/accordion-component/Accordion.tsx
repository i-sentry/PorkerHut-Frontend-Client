import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { productData } from "../../utils/productData";
import { useGetAllProducts } from "../../services/hooks/users/products";

interface IconProps {
  id: number;
  open: number;
}

interface iProps {
  setData: React.SetStateAction<any>;
  menuItem: any;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

const Filter = ({ menuItem, setData }: iProps) => {
  // State to keep track of open Accordion
  const [open, setOpen] = useState(0);
  const [selected, setSelected] = React.useState(null);
  const [ , setSelectedItems] = useState<string[]>([]);
  const { data: getAllProducts } = useGetAllProducts();

  // Handle to toggle Accordion open state
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const filter = (cate: any) => {
    const newItems = getAllProducts?.data.filter((newVal: any) => {
      return newVal.category === cate;
    });
    setData(newItems);
  };

  console.log({ menuItem });

  const handleSelectedItem = (value: string) => {
    setSelectedItems((prevSelectedItems) => {
      const itemIndex = prevSelectedItems.indexOf(value);

      if (itemIndex > -1) {
        return prevSelectedItems.filter((item) => item !== value);
      } else {
        return [...prevSelectedItems, value];
      }
    });
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelected(value === selected ? null : value);
    handleSelectedItem(value);
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
    <>
      <Fragment>
        {menuItem?.map((menu: any, index: number) => (
          <Accordion
            open={open === index}
            icon={<Icon id={index} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(index)}
              className="text-[16px] leading-[19px] font-medium"
            >
              {menu?.name}
            </AccordionHeader>
            <AccordionBody>
              <div className="flex flex-col gap-2 ">
                {menu?.subcategories?.length > 0 ? (
                  <>
                    {menu?.subcategories?.map((sub: any, index: number) => (
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={index.toString()}
                          value={sub?._id}
                          onClick={handleClick}
                        />
                        <label
                          className="ml-2 text-base font-normal"
                          htmlFor={index.toString()}
                        >
                          {sub?.name}
                        </label>
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </AccordionBody>
          </Accordion>
        ))}


      </Fragment>
    </>
  );
};

export default Filter;
