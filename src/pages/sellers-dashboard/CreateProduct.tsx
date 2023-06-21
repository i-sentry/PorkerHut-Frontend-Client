import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import data from "../../utils/data";

function CreateProduct() {
  const navigate = useNavigate()

   const [open, setOpen] = useState(0);
   const [category, setCategory] = useState(true);
  const [recent, setRecent] = useState(false);
 
const handleNavigation = (category: any, subcategory: any) => {
  navigate(
    `/vendor/create-product/stepper?category=${encodeURIComponent(
      category
    )}&subcategory=${encodeURIComponent(subcategory)}`
  );
};



   

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
     <div className="xxs:px-4 md:px-0 bg-[#F4F4F4] rounded-xl">
       {data.map((item: any, index: any) => (
         <Accordion key={index} open={open === index + 1}>
           <AccordionHeader
             onClick={() => handleOpen(index + 1)}
             className="text-[16px] leading-[19px] font-medium px-8"
           >
             {item.category.name} {/* Display the category name */}
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
               {item.category.subCategory.map(
                 (subCategory: any, subIndex: any) => (
                   <button
                     className="flex justify-start"
                     onClick={() =>
                       handleNavigation(item.category.name, subCategory.name)
                     }
                     key={subIndex}
                     data-category={item.category.name}
                     data-subcategory={subCategory.name}
                   >
                     {subCategory.name} {/* Display the subcategory name */}
                   </button>
                 )
               )}
             </div>
           </AccordionBody>
         </Accordion>
       ))}
     </div>
   );
 }

export default CreateProduct;