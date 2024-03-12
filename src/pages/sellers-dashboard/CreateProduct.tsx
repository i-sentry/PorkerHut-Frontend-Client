import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";
import { useNavigate } from "react-router-dom";
import { useProtectedInfo } from "../../store";
import PendingApproval from "../../components/PendingApproval";

function CreateProduct() {
  const navigate = useNavigate();
  const allCategories = useGetAllCategories();
  const [open, setOpen] = useState(0);
  const showModal = useProtectedInfo((state) => state.isAuthenticated);
  const setShowModal = useProtectedInfo((state) => state.setIsAuthenticated);
  const { vendor } = JSON.parse(localStorage.getItem("vendor") as string);

  console.log(vendor, "vendors", vendor?.storeStatus);

  const handleNavigation = (category: any, subcategory: any) => {
    navigate(
      `/vendor/create-product?cate=${encodeURIComponent(
        category,
      )}&sub=${encodeURIComponent(subcategory)}`,
    );
  };
  const { data: catagories, isLoading } = allCategories;

  const handleOpen = (value: any) => {
    if (vendor?.storeStatus === "pending") {
      setShowModal(true);
    } else {
      setOpen(open === value ? 0 : value);
    }
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
      <PendingApproval isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="rounded-[8px]  bg-[#F4F4F4] xxs:px-0 md:px-0">
        {catagories?.data.map((item: any, index: any) => {
          console.log(item, "kk");
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
                  {item.subcategories.map((subCategory: any, subIndex: any) => {
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
                  })}
                </div>
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}

export default CreateProduct;

const Loader = () => (
  <div className="relative w-full overflow-hidden">
    <div className="skeleton-loader h-20"></div>
    {/* <div className="header-loader"></div>
    <div className="text-loader"></div>
    <div className="text-loader"></div>
    <div className="btn-loader"></div> */}
  </div>
);
