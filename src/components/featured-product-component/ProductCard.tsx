import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/features/product/productSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RatingWidget from "../RatingWidget";
// import { useParams } from "react-router-dom";
import noImage from "../../assets/imgn.png"
import { toast } from "react-toastify";
import { CgUnavailable } from "react-icons/cg";

interface ProductLocationState {
  item: any;
}

const ProductCard = ({ item }: ProductLocationState) => {
  console.log({ item },"item");
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const isOutOfStock = item?.pricing?.quantity < 1;

  const handleClick = () => {
    dispatch(addProductToCart({ id: item?._id}));
    toast.success(`${item?.information?.productName} has been added to cart`);
  };

  const handleCardClick = () => {
    navigate(`/product/${item?._id}`, { state: { item: true } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className=" flex flex-col z-10   lg:p-3 p-0 transform  hover:shadow-xl  cursor:pointer rounded-sm ">
      <div className="w-full md:h-[380px] xxs:h-52 flex item-center justify-center relative group rounded-md">


<img
          onClick={handleCardClick}
          src={item?.images?.[0] || noImage}
          alt=""
          className={cn(
            "w-full h-full object-cover hover:cursor-pointer rounded-sm duration-700 ease-in-out group-hover:opacity-75 ",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoad={handleLoading}
          loading="lazy"
        />

        <div
          onClick={isOutOfStock ? () => {} : handleClick}
          className={`flex items-center justify-center absolute w-full xxs:h-12 lg:h-14 ${
            isOutOfStock ? 'bg-[#BB0101]' : 'bg-[#197B30]'
          } xxs:bottom-0 lg:bottom-[-72px] lg:group-hover:bottom-0 duration-700 cursor-pointer ${
            isOutOfStock ? '' : 'active:opacity-50 active:scale-90 transition-all'
          }`}

      >

          <span className="text-white  xxs:text-[11px] xxs:leading-[14px] md:text-base rounded-b-md font-normal ">
            {isOutOfStock? <div className="flex items-center gap-2"><CgUnavailable size={16} color="white"/><p>Out Of Stock</p></div> : "Add to cart"}
          </span>
        </div>
      </div>
      <div className="z-10 bg-white xxs:px-2 lg:px-0">
        <div className="lg:flex items-center justify-between py-1 xxs:hidden">
          <NavLink
            to={`/store-page/${item?._id}`}
            className="text-[#A2A2A2] whitespace-normal text-[12px] leading-[14px] font-medium"
          >
            {item?.vendor?.sellerAccountInformation?.shopName || "Test Shop"}
          </NavLink>
          <span className="text-[#A2A2A2] whitespace-normal text-[12px] leading-[14px] font-medium">
            {item?.vendor?.businessInformation?.city || "Abuja"}
          </span>
        </div>
        <div className="flex items-center justify-between py-1">
          <h1
            onClick={handleCardClick}
            className="  whitespace-normal sm:text-[16px] sm:leading-[19px] font-medium  cursor-pointer lg:text-[#197b30] hover:underline active:scale-90 transition-all ease-in-out  xxs:text-[#333333] xxs:leading-[15px] xxs:text-[13px]"
          >
            {item?.information?.productName ||  "100% Healthy Pork Lap"}
          </h1>
          <span className="hidden text-[#333333] whitespace-normal text-[16px] leading-[19px] font-normal  lg:block">
            {item?.details?.productWeight || "80"}g
          </span>
        </div>
        <span className="whitespace-nowrap lg:text-2xl tracking-wider font-normal lg:hidden block text-[#333333] xxs:text-lg">
          ₦{item?.pricing?.productPrice || "3000"}
        </span>

        <NavLink
          to={`/store-page/${item._id}`}
          className="text-xs text-[#A2A2A2] whitespace-normal lg:hidden xxs:block "
        >
          {item?.vendor?.sellerAccountInformation?.shopName || "Test Shop" }
        </NavLink>
        <div className="flex items-center justify-between py-1">
          <RatingWidget
            onChange={(value) => console.log(value)}
            defaultValue={3}
          />
          <span className="text-[#333333] whitespace-normal text-[16px] leading-[19px]  font-normal xxs:hidden lg:block">
            ₦{item?.pricing?.productPrice || "3000"}
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
