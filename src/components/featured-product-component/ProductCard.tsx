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
  };


  return (
    <div className=" flex flex-col shadow-lg rounded-md  p-3 transform  hover:shadow-xl  cursor:pointer">
      <div className="w-full md:h-[302px] flex item-center justify-center relative group">
        <img src={item?.img} alt="" className="w-full h-full object-cover" />

        <div
          onClick={handleClick}
          className=" flex items-center justify-center absolute w-full xxs:h-12 md:h-14 bg-[#197B30] xxs:bottom-0 md:bottom-[-72px] md:group-hover:bottom-0 duration-700 cursor-pointer active:opacity-50 active:scale-90 transition-all"
        >
          <span className="text-white  xxs:text-sm">ADD TO CART</span>
        </div>
      </div>
      <div className="z-10 bg-white">
        <div className="flex items-center justify-between py-1 ">
          <h2 className="text-sm text-[#A2A2A2] whitespace-normal">
            {item?.title}
          </h2>
          <span className="text-sm text-[#A2A2A2] ">
            {item?.product?.location}
          </span>
        </div>
        <div className="flex items-center justify-between py-1">
          <h1
            onClick={handleCardClick}
            className=" text-base font-medium cursor-pointer text-[#197b30] hover:underline active:scale-90 transition-all ease-in-out"
          >
            {item?.product?.productName}
          </h1>
          <span className=" text-sm font-normal  block">
            {item?.product?.weight}
          </span>
        </div>
        <span className="whitespace-nowrap text-2xl tracking-wider font-normal md:hidden block text-[#333333] ">
          ₦{item?.price}
        </span>
        <h2 className="text-sm text-[#A2A2A2] whitespace-normal md:hidden xxs:block">
          {item?.title}
        </h2>
        <div className="flex items-center justify-between py-1">
          {/* <div className="flex text-yellow-500 cursor-pointer">
            {[...Array(5)].map((start, i) => {
              const ratingValue = i + 1;
              return (
                <label className="">
                  <input
                    type="radio"
                    name="rating"
                    className="hidden"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <AiFillStar
                    size={20}
                    color={
                      ratingValue <= (hover || rating) ? "#fe6600" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}
          </div> */}
          <RatingWidget
            onChange={(value) => console.log(value)}
            defaultValue={2}
          />
          <span className="whitespace-nowrap text-sm font-normal xxs:hidden md:block">
            ₦{item?.price}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
