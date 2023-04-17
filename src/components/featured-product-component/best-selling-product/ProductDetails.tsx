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
import { cartData } from "../../CartData/cartData";
import Cards from "../../card/Cards";
import { useLocation } from "react-router-dom";
import { addProductToCart } from "../../../redux/features/product/productSlice";
import AppLayout from "../../utility/AppLayout";

const ProductDetails = () => {
  const location = useLocation();
  const item = location.state.item;
  console.log(item, "IMAGE");

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [open, setOpen] = useState(1);

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  const handleClick = () => {
    dispatch(addProductToCart(item));
  };

  const images = [
    item?.img,
    "../images/Banner.jpg",
    "../images/Banner1.jpg",
    "../images/Banner2.jpg",
  ];
  return (
    <AppLayout>
      <div className="bg-[#EEEEEE] md:px-10 pt-4 flex flex-col gap-6 mt-20 pb-14">
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

        <div className="md:flex xxs:px-6 md:4 py-8 md:gap-10 bg-white rounded-sm">
          <div className="flex md:flex-1">
            <div className="flex-[1]">
              <img
                src={images[0]}
                alt="img1"
                onClick={(e) => setSelectedImg(0)}
                className="object-cover cursor-pointer w-[75px] h-20 mb-3 rounded-sm"
              />
              <img
                src={images[1]}
                alt="img2 rounded"
                onClick={(e) => setSelectedImg(1)}
                className="object-cover cursor-pointer w-[75px] h-20 mb-3 rounded-sm"
              />
              <img
                src={images[2]}
                alt="img3 rounded"
                onClick={(e) => setSelectedImg(2)}
                className="object-cover cursor-pointer w-[75px] h-20 mb-3 rounded-sm"
              />
              <img
                src={images[2]}
                alt=""
                onClick={(e) => setSelectedImg(2)}
                className="object-cover cursor-pointer w-[75px] h-20 rounded"
              />
            </div>

            <div className="md:flex-[5]">
              <img
                src={images[selectedImg]}
                alt="img4"
                className=" object-cover h-[400px] w-full rounded-sm"
              />
            </div>
          </div>
          <div className="md:flex-1 flex flex-col gap-3 md:pr-8 xxs:mt-16 md:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl">{item?.product?.name}</h1>
              <span className="cursor-pointer hover:text-yellow-500">
                <MdFavoriteBorder />
              </span>
            </div>
            <span></span>
            <span className=" font-medium text-base">N{item?.price}</span>
            {/* <span className=" font-normal text-base text-[#797979]">Our shipping fees are flat rates. Regardless of the size and amount of items <br />
            ordered, only one shipping fee applies.</span> */}
            <span className="font-normal text-sm text-[#797979]">
              Weight:{" "}
              <span className="font-medium text-black text-sm">
                {item?.product?.Weight}
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
              <span className="font-medium text-black text-sm">{item?.id}</span>
            </span>
            <span className="font-normal text-sm text-[#797979]">
              Availability:{" "}
              <span className="font-medium text-black text-sm">
                100% Available
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

            <div className="mt-2  md:flex gap-6">
              <button
                onClick={handleClick}
                className="bg-[#197B30] xxs:w-full md:w-[200px] md:h-10 xxs:h-14 text-white rounded-sm font-medium xxs:mb-4 shadow-md"
              >
                Add to Cart
              </button>
              <button className="md:w-[200px] xxs:w-full md:h-10 xxs:h-14 border-[#197B30] border text-[#197B30] rounded-sm font-medium shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-sm">
          <Fragment>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="font-medium text-base"
              >
                Product Description
              </AccordionHeader>
              <AccordionBody>
                Our raw bacon is a versatile ingredient that provides a fresh,
                mild, and savory flavor to any dish. Sourced from
                premium-quality pigs, our raw bacon is made from the belly of
                the pig and has not been cured or smoked, making it perfect for
                those who prefer the natural taste of pork. Whether you're
                making a classic bacon, egg, and cheese sandwich, adding a touch
                of savory flavor to your favorite pasta dish, or simply enjoying
                a slice of bacon as a snack, our raw bacon is the perfect
                addition. Keep in mind that raw bacon must be cooked thoroughly
                before consuming to reduce the risk of foodborne illness. Try it
                today and taste the difference that comes from using
                high-quality, raw bacon.
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
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
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
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
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
                  <RatingCard />
                </div>
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>

        <div className="more-items bg-white mt-6">
          <h1 className="text-[18px] text-[#333333] font-semibold py-6 px-4 hidden md:block">
            Related Products
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {cartData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProductDetails;

function dispatch(arg0: {
  payload: { id: string | number };
  type: "product/addProductToCart";
}) {
  throw new Error("Function not implemented.");
}
