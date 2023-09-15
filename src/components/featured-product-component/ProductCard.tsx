import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/features/product/productSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RatingWidget from "../RatingWidget";
import { useParams } from "react-router-dom";

interface ProductLocationState {
  item: any;
}

const ProductCard = ({ item }: ProductLocationState) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addProductToCart({ id: item?.id }));
  };

  const handleCardClick = () => {
    navigate(`/product/${item?.id}`, { state: { item: true } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" flex flex-col z-10   lg:p-3 p-0 transform  hover:shadow-xl  cursor:pointer rounded-sm ">
      <div className="w-full md:h-[380px] xxs:h-52 flex item-center justify-center relative group rounded-md">
        <img
          onClick={handleCardClick}
          src={item?.images?.[0] || `https://via.placeholder.com/350x150`}
          alt=""
          className="w-full h-full object-cover hover:cursor-pointer rounded-sm"
        />

        <div
          onClick={handleClick}
          className=" flex items-center justify-center absolute w-full xxs:h-12 lg:h-14 bg-[#197B30] xxs:bottom-0 lg:bottom-[-72px] lg:group-hover:bottom-0 duration-700 cursor-pointer active:opacity-50 active:scale-90 transition-all"
        >
          <span className="text-white  xxs:text-[11px] xxs:leading-[14px] rounded-b-md font-normal">
            Add to cart
          </span>
        </div>
      </div>
      <div className="z-10 bg-white xxs:px-2 lg:px-0">
        <div className="lg:flex items-center justify-between py-1 xxs:hidden">
          <NavLink
            to={`/store-page/${item?._id}`}
            className="text-[#A2A2A2] whitespace-normal text-[12px] leading-[14px] font-medium"
          >
            {item?.vendor?.sellerAccountInformation?.shopName}
          </NavLink>
          <span className="text-[#A2A2A2] whitespace-normal text-[12px] leading-[14px] font-medium">
            {item?.vendor?.businessInformation?.city}
          </span>
        </div>
        <div className="flex items-center justify-between py-1">
          <h1
            onClick={handleCardClick}
            className="  whitespace-normal sm:text-[16px] sm:leading-[19px] font-medium  cursor-pointer lg:text-[#197b30] hover:underline active:scale-90 transition-all ease-in-out  xxs:text-[#333333] xxs:leading-[15px] xxs:text-[13px]"
          >
            {item?.information?.productName}
          </h1>
          <span className="hidden text-[#333333] whitespace-normal text-[16px] leading-[19px] font-normal  lg:block">
            {item?.details?.productWeight}g
          </span>
        </div>
        <span className="whitespace-nowrap lg:text-2xl tracking-wider font-normal lg:hidden block text-[#333333] xxs:text-lg">
          ₦{item?.pricing?.productPrice}
        </span>
        
        <NavLink
          to={`/store-page/${item._id}`}
          className="text-xs text-[#A2A2A2] whitespace-normal lg:hidden xxs:block "
        >
          {item?.vendor?.sellerAccountInformation?.shopName}
        </NavLink>
        <div className="flex items-center justify-between py-1">
          <RatingWidget
            onChange={(value) => console.log(value)}
            defaultValue={3}
          />
          <span className="text-[#333333] whitespace-normal text-[16px] leading-[19px]  font-normal xxs:hidden lg:block">
            ₦{item?.pricing?.productPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
