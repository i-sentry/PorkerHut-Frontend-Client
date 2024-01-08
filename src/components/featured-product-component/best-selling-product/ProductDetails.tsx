import React, { useState, Fragment } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import StarRating from "./ProductDetailRating";
import RatingCard from "./RatingCard";
import ProductsBreadCrumbs from "../../story-components/ProductsBreadCrumbs";
import { useLocation, useParams } from "react-router-dom";
import { addProductToCart } from "../../../redux/features/product/productSlice";
import AppLayout from "../../utility/AppLayout";
import { useDispatch } from "react-redux";
import { productData } from "../../../utils/productData";
import { chunkArray } from "../../../helper/chunck";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";
import { useGetSingleProduct } from "../../../services/hooks/Vendor/products";
import RatingWidget from "../../RatingWidget";

const ProductDetails = () => {
  const location = useLocation();
  const item = location?.state?.item;
  const { id } = useParams();
  // @ts-ignore
  const { data: singleProduct } = useGetSingleProduct(id);
  const navigate = useNavigate();

  console.log(singleProduct?.data, "Stack");

  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };

  const handleClick = () => {
    dispatch(addProductToCart({ id: singleProduct?.data?._id }));
    console.log(singleProduct?.data?._id);
  };

  const handleNavigate = () => {
    navigate("/my-cart");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div className="md:bg-[#EEEEEE] xxs:bg-white md:px-10 pt-4 flex flex-col gap-6 mt-20 pb-14 ">
        <div className="xxs:hidden md:block">
          <ProductsBreadCrumbs
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Products",
                link: "/products",
              },
              {
                name: "Product Details",
                link: "/product/:id",
              },
            ]}
          />
        </div>

        <div className="md:flex md:px-6 xxs:px-3 md:4 py-8 md:gap-5 bg-white md:rounded-sm">
          <div className="md:w-[65%] flex md:flex-1 md:gap-2 xxs:flex-col-reverse md:flex-row">
            <div className="md:flex-col md:justify-start xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 xxs:mt-3 md:mt-0">
              {singleProduct?.data?.images.map((image: any, index: number) => (
                <img
                  src={image}
                  alt="ProductImg"
                  onClick={(e) => setSelectedImg(index)}
                  className="object-cover cursor-pointer w-[75px] h-20 rounded-sm"
                />
              ))}
            </div>

            <div className="md:flex-[5]">
              <img
                src={singleProduct?.data?.images[selectedImg]}
                alt="img4"
                className=" object-cover md:h-[400px] xxs:h-[300px]  w-full rounded-sm"
              />
            </div>
          </div>
          <div className="md:w-[35%] md:flex-1 flex flex-col gap-3 xxs:mt-4 md:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl">
                {singleProduct?.data?.information?.productName}
              </h1>
              <span className="cursor-pointer hover:text-yellow-500">
                <MdFavoriteBorder />
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <RatingWidget
                onChange={(value) => console.log(value)}
                defaultValue={3}
              />
              {/* <span className="text-[#333333] whitespace-normal text-[16px] leading-[19px]  font-normal xxs:hidden lg:block">
                ₦{item?.pricing?.productPrice || "3000"}
              </span> */}
            </div>

            <span></span>
            <span className=" font-medium text-base">
              N{singleProduct?.data?.pricing?.productPrice}
            </span>

            <span className="font-normal text-sm text-[#797979]">
              Weight:{" "}
              <span className="font-medium text-black text-sm">
                {singleProduct?.data?.details?.productWeight}g
              </span>
            </span>
            <span className="font-normal text-sm text-[#797979]">
              Category:{" "}
              <span className="font-medium text-black text-sm">
                {item?.category}
              </span>
            </span>
            <span className="font-normal text-sm text-[#797979]">
              Product ID:{" "}
              <span className="font-medium text-black text-sm">
                {singleProduct?.data?._id}
              </span>
            </span>
            <span className="font-normal text-sm text-[#797979]">
              Availability:{" "}
              <span className="font-medium text-black text-sm">
                100% Available
                {/* {singleProduct?.data?.pricing?.quantity > 0 ? 100% Available : Out of stock} */}
              </span>
            </span>
            <div className="flex flex-col">
              <h1 className="block font-normal text-base text-[#797979]">
                Quantity
              </h1>

              <div className="flex items-center">
                <button
                  className="border w-10 h-10"
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span className="border w-10 h-10 flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  className="border w-10 h-10"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="md:mt-2  md:flex gap-6 xxs:px-4 md:px-0 xxs:mt-4">
              <button
                onClick={handleClick}
                className="bg-[#197B30] xxs:w-full md:w-[200px] md:h-10 xxs:h-14 text-white rounded-sm font-medium xxs:mb-4 shadow-md"
              >
                Add to Cart
              </button>
              <button
                onClick={handleNavigate}
                className="md:w-[200px] xxs:w-full md:h-10 xxs:h-14 border-[#197B30] border text-[#197B30] rounded-sm font-medium shadow-md"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white md:p-4 xxs:p-3 rounded-sm">
          <Fragment>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="font-medium text-base"
              >
                Product Description
              </AccordionHeader>
              <AccordionBody>
                <div className=" xxs:px-4 md:px-0">
                  {singleProduct?.data?.details?.productDescription}
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-base font-medium"
              >
                Product Details
              </AccordionHeader>
              <AccordionBody>
                <div className=" xxs:px-4 md:px-0">
                  {singleProduct?.data?.details?.productDescription}
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-base font-medium"
              >
                Delivery Info
              </AccordionHeader>
              <AccordionBody>
                <div className=" xxs:px-4 md:px-0">
                  {singleProduct?.data?.details?.deliveryDetails}
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-base font-medium"
              >
                Product Reviews
              </AccordionHeader>
              <AccordionBody>
                <StarRating rating={0} />

                <div>
                  <RatingCard id={item?.id} />
                </div>
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>

        <div className="more-items bg-white mt-6">
          <h1 className="text-[18px] text-[#333333] font-semibold py-6 px-4 hidden md:block">
            Related Products
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 w-full xxs:px-3 md:px-0 xxs:gap-4 ">
            {chunkArray(productData, 8)[1 - 1].map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProductDetails;
