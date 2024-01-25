// import React, { useState } from "react";
// import { AiFillStar } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import RatingStars from "../RatingStars";
import { addProductToCart } from "../../redux/features/product/productSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { CgUnavailable } from "react-icons/cg";

// type Product = {
//   location: string;
//   name: string;
//   weight: string;
//   productName: string;
// };

// type Item = {
//   id: string;
//   title: string;
//   type?: string;
//   category: string;
//   price: string;
//   product: Product;
//   img: string;
//   desc: string;
// };

// type FavouriteProductCardProps = {
//   item: Item;
// };

// const FavouriteProductCard = ({ item }: FavouriteProductCardProps) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const handleClick = () => {};

//   return (
//     <div>
//       <div className=" flex flex-col shadow-lg rounded-md ease-in-out p-3 transform hover:translate-y-2 hover:shadow-xl transition duration-300 cursor:pointer">
//         <div className="w-full md:h-[302px] flex item-center justify-center relative group">
//           <img
//             src={item.img}
//             alt="product"
//             className="w-full h-full object-cover"
//           />

//           <div
//             onClick={handleClick}
//             className=" flex items-center justify-center absolute w-full h-14 md:bg-[#197B30] md:bottom-[-72px] md:group-hover:bottom-0 duration-700 cursor-pointer"
//           >
//             <h1 className="text-white xxs:hidden md:block">ADD TO CART</h1>
//           </div>
//         </div>
//         <div className="z-10 bg-white">
//           <div className="flex items-center justify-between py-1">
//             <h2 className="text-sm text-[#A2A2A2]">{item?.title}</h2>
//             <span className="text-sm text-[#A2A2A2]">
//               {item?.product?.location}
//             </span>
//           </div>
//           <div className="flex items-center justify-between py-1">
//             <h1 className="whitespace-nowrap text-sm font-semibold">
//               {item?.product?.productName}
//             </h1>
//             <span className="whitespace-nowrap text-sm font-semibold">
//               {item?.product?.weight}
//             </span>
//           </div>
//           <div className="flex items-center justify-between py-1">
//             <div className="flex text-yellow-500 cursor-pointer">
//               {[...Array(5)].map((start, i) => {
//                 const ratingValue = i + 1;
//                 return (
//                   <label className="">
//                     <input
//                       type="radio"
//                       name="rating"
//                       className="hidden"
//                       value={ratingValue}
//                       onClick={() => setRating(ratingValue)}
//                     />
//                     <AiFillStar
//                       size={20}
//                       color={
//                         ratingValue <= (hover || rating) ? "#fe6600" : "#e4e5e9"
//                       }
//                       onMouseEnter={() => setHover(ratingValue)}
//                       onMouseLeave={() => setHover(0)}
//                     />
//                   </label>
//                 );
//               })}
//             </div>
//             <span className="whitespace-nowrap text-sm font-semibold">
//               ₦{item?.price}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const FavouriteProductCard = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOutOfStock = item?.product?.pricing?.quantity < 1;
  console.log(isOutOfStock, item, "itemssss");

  const handleCardClick = () => {
    navigate(`/product/${item?.product?._id}`, { state: { item: true } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    dispatch(addProductToCart({ id: item?.product?._id }));
    toast.success(
      `${item?.product?.information?.productName} has been added to cart`
    );
  };

  return (
    <div className="w-full cursor-pointer">
      <div className="h-[300px] overflow-hidden md:rounded relative group">
        <img
          src={item?.product?.images[0] || ""}
          className="w-full h-full object-cover"
          alt="product-img"
        />
        {/* <button
          onClick={handleClick}
          className="w-full absolute bottom-0 left-0 z-10 text-white text-[11px] text-center p-4 font-normal bg-green-700 md:-bottom-full md:group-hover:bottom-0 duration-500"
        >
          Add to cart
        </button> */}

        <div
          onClick={isOutOfStock ? () => {} : handleClick}
          className={`flex items-center justify-center absolute w-full xxs:h-12 lg:h-14 ${
            isOutOfStock ? "bg-[#BB0101]" : "bg-[#197B30]"
          } xxs:bottom-0 lg:bottom-[-72px] lg:group-hover:bottom-0 duration-700 cursor-pointer ${
            isOutOfStock
              ? ""
              : "active:opacity-50 active:scale-90 transition-all"
          }`}
        >
          <span className="text-white  xxs:text-[11px] xxs:leading-[14px] md:text-base rounded-b-md font-normal ">
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
      <div className="flex justify-between mt-3">
        <ul>
          <li className="text-neutral-400 text-xs font-medium">
            {item?.product?.vendor?.sellerAccountInformation?.shopName}
          </li>
          <li
            onClick={handleCardClick}
            className="text-zinc-800 text-base font-medium cursor-pointer capitalize"
          >
            {item?.product?.information?.productName || ""}
          </li>
          <li>
            <RatingStars maxRating={5} iconSize={24} />
          </li>
        </ul>
        <ul className="text-right">
          <li className="text-neutral-400 text-xs font-medium">
            {item?.product?.vendor?.businessInformation?.city}
          </li>
          <li className="text-zinc-800 text-base font-medium">
            {item?.product?.details?.productWeight || ""}kg
          </li>
          <li>
            ₦{item?.product?.pricing?.productPrice.toLocaleString() || ""}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FavouriteProductCard;
