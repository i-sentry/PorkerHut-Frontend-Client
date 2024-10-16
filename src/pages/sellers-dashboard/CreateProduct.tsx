import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";
import { useNavigate } from "react-router-dom";
import { TbCategory2 } from "react-icons/tb";

function CreateProduct() {
  const navigate = useNavigate();
  const allCategories = useGetAllCategories();
  const [open, setOpen] = useState(0);

  const handleNavigation = (category: any, subcategory: any) => {
    navigate(
      `/vendor/create-product?cate=${encodeURIComponent(
        category,
      )}&sub=${encodeURIComponent(subcategory)}`,
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
    <>
      <div className="rounded-[8px]  bg-[#F4F4F4] xxs:px-4 md:px-4">
        {!isLoading &&
          catagories?.data?.length > 0 &&
          catagories?.data?.map((item: any, index: any) => {
            return (
              <Accordion key={index} open={open === index + 1}>
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className="px-5 py-5 text-[16px] font-normal leading-normal"
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
                  <div className="flex flex-col gap-2 px-8">
                    {item.subcategories.map(
                      (subCategory: any, subIndex: any) => {
                        const cateName = cap(subCategory.name);

                        return (
                          <button
                            className="flex justify-start text-[16px] font-light leading-normal hover:underline"
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
                      },
                    )}
                  </div>
                </AccordionBody>
              </Accordion>
            );
          })}

        {!isLoading && catagories?.data?.length < 1 && (
          <div className="flex items-center justify-center bg-neutral-100 py-10 px-4 text-neutral-500">
            <TbCategory2 size={32} className="mb-1" />
            No product categories yet...
          </div>
        )}
      </div>
    </>
  );
}

export default CreateProduct;

const Loader = () => (
  <div className="relative w-full overflow-hidden">
    <div className="skeleton-loader h-20"></div>
  </div>
);
