import { Link, useNavigate } from "react-router-dom";
import RatingStars from "../RatingStars";
import { addProductToCart } from "../../redux/features/product/productSlice";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { CgUnavailable } from "react-icons/cg";

const FavouriteProductCard = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOutOfStock = item?.product?.pricing?.quantity < 1;

  const handleCardClick = () => {
    navigate(`/product/${item?.product?._id}`, { state: { item: true } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    console.log("clicked");
    dispatch(addProductToCart({ id: item?.product?._id }));
    // toast.success(
    //   `${item?.product?.information?.productName} has been added to cart`
    // );
  };

  return (
    <div className="w-full">
      <div className="group relative h-[300px] overflow-hidden md:rounded">
        <Link to={`/product/${item?.product?._id}`}>
          <img
            src={item?.product?.images[0] || ""}
            className="h-full w-full object-cover"
            alt="product-img"
          />
        </Link>

        {/* <button
          onClick={handleClick}
          className="w-full absolute bottom-0 left-0 z-10 text-white text-[11px] text-center p-4 font-normal bg-green-700 md:-bottom-full md:group-hover:bottom-0 duration-500"
        >
          Add to cart
        </button> */}

        <div
          onClick={isOutOfStock ? () => {} : handleClick}
          className={`absolute flex w-full items-center justify-center xxs:h-12 lg:h-14 ${
            isOutOfStock ? "bg-[#BB0101]" : "bg-[#197B30]"
          } cursor-pointer duration-700 xxs:bottom-0 lg:bottom-[-72px] lg:group-hover:bottom-0 ${
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
      <div className="mt-3 flex justify-between">
        <ul>
          <li className="text-xs font-medium text-neutral-400">
            <Link to={`/store-page/${item?.product?.vendor?._id}`}>
              {item?.product?.vendor?.sellerAccountInformation?.shopName}
            </Link>
          </li>
          <li
            onClick={handleCardClick}
            className="cursor-pointer text-base font-medium capitalize text-zinc-800"
          >
            {item?.product?.information?.productName || ""}
          </li>
          <li>
            <RatingStars maxRating={5} iconSize={24} canRate={false} />
          </li>
        </ul>
        <ul className="text-right">
          <li className="text-xs font-medium text-neutral-400">
            {item?.product?.vendor?.businessInformation?.city}
          </li>
          <li className="text-base font-medium text-zinc-800">
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
