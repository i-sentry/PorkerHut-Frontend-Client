import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/features/product/productSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RatingWidget from "../RatingWidget";

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
    navigate(`/product/${item?.id}`, { state: { item } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className=" flex flex-col   md:p-3 p-0 transform  hover:shadow-xl  cursor:pointer rounded-sm">
      <div className="w-full md:h-[380px] xxs:h-52 flex item-center justify-center relative group rounded-md">
        <img
          onClick={handleCardClick}
          src={item?.img}
          alt=""
          className="w-full h-full object-cover hover:cursor-pointer rounded-sm"
        />

        <div
          onClick={handleClick}
          className=" flex items-center justify-center absolute w-full xxs:h-12 md:h-14 bg-[#197B30] xxs:bottom-0 md:bottom-[-72px] md:group-hover:bottom-0 duration-700 cursor-pointer active:opacity-50 active:scale-90 transition-all"
        >
          <span className="text-white  xxs:text-sm rounded-b-md">
            ADD TO CART
          </span>
        </div>
      </div>
      <div className="z-10 bg-white xxs:px-2 md:px-0">
        <div className="md:flex items-center justify-between py-1 xxs:hidden">
          <h2 className="text-[#A2A2A2] whitespace-normal text-[12px] leading-[14px] font-medium">
            {item?.title}
          </h2>
          <span className="text-[#A2A2A2] whitespace-normal text-[12px] leading-[14px] font-medium">
            {item?.product?.location}
          </span>
        </div>
        <div className="flex items-center justify-between py-1">
          <h1
            onClick={handleCardClick}
            className="  whitespace-normal sm:text-[16px] sm:leading-[19px] font-medium  cursor-pointer md:text-[#197b30] hover:underline active:scale-90 transition-all ease-in-out  xxs:text-sm"
          >
            {item?.product?.productName}
          </h1>
          <span className="hidden text-[#333333] whitespace-normal text-[16px] leading-[19px] font-normal  md:block">
            {item?.product?.weight}
          </span>
        </div>
        <span className="whitespace-nowrap md:text-2xl tracking-wider font-normal md:hidden block text-[#333333] xxs:text-lg">
          ₦{item?.price}
        </span>
        <h2 className="text-xs text-[#A2A2A2] whitespace-normal md:hidden xxs:block ">
          {item?.title}
        </h2>
        <div className="flex items-center justify-between py-1">
          <RatingWidget
            onChange={(value) => console.log(value)}
            defaultValue={3}
          />
          <span className="text-[#333333] whitespace-normal text-[16px] leading-[19px]  font-normal xxs:hidden md:block">
            ₦{item?.price}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
