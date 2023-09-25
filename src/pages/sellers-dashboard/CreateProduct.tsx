import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import data from "../../utils/data";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";

function CreateProduct() {
  const navigate = useNavigate();
  const allCategories = useGetAllCategories();
  const [open, setOpen] = useState(0);
  const [category, setCategory] = useState(true);
  const [recent, setRecent] = useState(false);

  const handleNavigation = (category: any, subcategory: any) => {
    navigate(
      `/vendor/create-product?cate=${encodeURIComponent(
        category
      )}&sub=${encodeURIComponent(subcategory)}`
    );
  };
  const { data: catagories, isLoading } = allCategories;

 
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
  const cap = (arg: string) => {
    return arg
      .toLowerCase()
      .split(" ")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  if (isLoading === true) {
    return <Loader />;
  }
  return (
    <div className="xxs:px-0  md:px-0 bg-[#F4F4F4] rounded-[8px]">
      {catagories?.data.map((item: any, index: any) => {
        console.log(item, "kk");
        return (
          <Accordion key={index} open={open === index + 1}>
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="text-[16px] leading-normal font-normal px-5 py-5"
            >
              {cap(item?.name)} {/* Display the category name */}
            </AccordionHeader>
            <AccordionBody
              style={{
                display: "flex",
                background: "#333333",
                flexDirection: "column",
                color: "white",
              }}
            >
              <div className="px-8 flex flex-col gap-2">
                {item.subcategories.map((subCategory: any, subIndex: any) => {
                  const cateName = cap(subCategory.name);

                  return (
                    <button
                      className="flex justify-start text-[16px] leading-normal hover:underline font-light"
                      onClick={() =>
                        handleNavigation(item?._id, subCategory?._id)
                      }
                      key={subIndex}
                      // data-category={item.category.name}
                      // data-subcategory={subCategory.name}
                    >
                      {cateName}
                    </button>
                  );
                })}
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
}

export default CreateProduct;

const Loader = () => (
  <div className="overflow-hidden relative w-full">
    <div className="skeleton-loader h-20"></div>
    {/* <div className="header-loader"></div>
    <div className="text-loader"></div>
    <div className="text-loader"></div>
    <div className="btn-loader"></div> */}
  </div>
);
