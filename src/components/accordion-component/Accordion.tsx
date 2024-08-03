import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { useGetAllProducts } from "../../services/hooks/users/products";
import _ from "lodash";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";

interface IconProps {
  id: number;
  open: number;
}

interface iProps {
  setData: React.SetStateAction<any>;
  // menuItem: any;
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

const Filter = ({ setData }: iProps) => {
  // State to keep track of open Accordion
  const [open, setOpen] = useState(0);
  const [selected, setSelected] = React.useState(null);
  const [, setSelectedItems] = useState<string[]>([]);
  const { data: getAllProducts } = useGetAllProducts();
  const { data: allCategories, isLoading } = useGetAllCategories();

  //@ts-ignore
  const menuItems = [...new Set(allCategories?.data?.map((d: any) => d?.name))];

  // Handle to toggle Accordion open state
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const filter = (cate: any) => {
    const newItems = getAllProducts?.data.filter((newVal: any) => {
      return newVal?.information?.subcategory?._id === cate;
    });
    setData({ newItems });
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelected(value === selected ? null : value);
    // handleSelectedItem(value);
  };

  const handleClick = (event: any) => {
    const isChecked = event.target.checked;
    const checkboxValue = event.target.value;

    // Do something with isChecked and checkboxValue
    // For example, update state or call a function with these values
    handleChange(event);
    filter(checkboxValue);
    // if (selected !== null) {
    //   setData();
    // }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const checkboxValue = event.target.value;
  };

  return (
    <>
      <Fragment>
        {allCategories?.data?.map((menu: any, index: number) => (
          <Accordion key={index}
            open={open === index}
            icon={<Icon id={index} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(index)}
              className="text-[16px] font-medium leading-[19px]"
            >
              {_.startCase(_.toLower(menu?.name))}
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
                          {_.startCase(_.toLower(sub?.name))}
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
