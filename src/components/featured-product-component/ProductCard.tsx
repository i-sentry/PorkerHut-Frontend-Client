/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/features/product/productSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import RatingWidget from "../RatingWidget";
// import { useParams } from "react-router-dom";
import noImage from "../../assets/imgn.png";
import { toast } from "react-toastify";
import { CgUnavailable } from "react-icons/cg";
import RatingStars from "../RatingStars";

interface ProductLocationState {
  item: any;
}

const ProductCard = ({ item }: ProductLocationState) => {
  // console.log({ item }, "item");
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const isOutOfStock = item?.pricing?.quantity < 1;

  // console.log(item, "itemszz");

  const handleClick = () => {
    dispatch(addProductToCart({ id: item?._id }));
    // toast.success(`${item?.information?.productName} has been added to cart`);
  };

  const handleCardClick = () => {
    navigate(`/product/${item?._id}`, { state: { item: true } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className=" cursor:pointer z-10 flex transform  flex-col overflow-hidden rounded-sm  p-0  hover:shadow-xl lg:p-3 ">
      <div className="item-center group relative flex w-full justify-center overflow-hidden rounded-md xxs:h-52 md:h-[250px]">
        <img
          onClick={handleCardClick}
          src={item?.images?.[0] || noImage}
          alt=""
          className={cn(
            "h-full w-full rounded-sm object-cover duration-700 ease-in-out hover:cursor-pointer group-hover:opacity-75 ",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0",
          )}
          onLoad={handleLoading}
          loading="lazy"
        />

        <div
          onClick={isOutOfStock ? () => {} : handleClick}
          className={`absolute flex w-full items-center justify-center py-3 lg:py-3.5 ${
            isOutOfStock ? "bg-[#BB0101]" : "cursor-pointer bg-[#197B30]"
          } duration-700 xxs:bottom-0 lg:bottom-[-72px] lg:group-hover:bottom-0 ${
            isOutOfStock
              ? ""
              : "transition-all active:scale-90 active:opacity-50"
          }`}
        >
          <span className="rounded-b-md  font-normal text-white xxs:text-[11px] xxs:leading-[14px] md:text-base ">
            {isOutOfStock ? (
              <div className="flex items-center gap-2">
                <CgUnavailable size={16} color="white" />
                <p>Out Of Stock</p>
              </div>
            ) : (
              "Add to cart"
            )}
          </span>
        </div>
      </div>
      <div className="z-10 mt-2 bg-white xxs:px-2 lg:px-0">
        <div className="items-center justify-between py-1 xxs:hidden md:flex">
          <NavLink
            to={`/store-page/${item?.vendor?._id}`}
            className="whitespace-normal text-[12px] font-medium capitalize leading-[14px] text-[#A2A2A2]"
          >
            {item?.vendor?.sellerAccountInformation?.shopName || ""}
          </NavLink>
          <span className="whitespace-normal text-[12px] font-medium capitalize leading-[14px] text-[#A2A2A2]">
            {item?.vendor?.businessInformation?.city || ""}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <h1
            onClick={handleCardClick}
            className="cursor-pointer whitespace-normal font-medium capitalize transition-all  ease-in-out hover:underline active:scale-90 xxs:text-[13px] xxs:leading-[15px] xxs:text-[#333333]  sm:text-[16px] sm:leading-[19px] lg:text-[#197b30]"
          >
            {item?.information?.productName || ""}
          </h1>
          <span className="hidden whitespace-normal text-[16px] font-normal leading-[19px] text-[#333333]  lg:block">
            {item?.details?.productWeight || ""}kg
          </span>
        </div>
        <span className="block whitespace-nowrap font-bold text-[#111111] xxs:text-lg lg:hidden lg:text-2xl">
          ₦{item?.pricing?.productPrice.toLocaleString() || ""}
        </span>

        <NavLink
          to={`/store-page/${item._id}`}
          className="whitespace-normal text-xs capitalize text-[#A2A2A2] xxs:block md:hidden "
        >
          {item?.vendor?.sellerAccountInformation?.shopName || ""}
        </NavLink>
        <div className="flex items-center justify-between py-1">
          <RatingStars maxRating={5} iconSize={20} canRate={false} />
          <span className="whitespace-normal text-[16px] font-normal leading-[19px]  text-[#333333] xxs:hidden lg:block">
            ₦{item?.pricing?.productPrice.toLocaleString() || ""}
          </span>
        </div>
      </div>
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default ProductCard;
