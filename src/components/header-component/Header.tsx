import FeaturedProduct from "../featured-product-component/best-selling-product/FeaturedProduct";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Header = () => {
  return (
    <div className="my-10 p-3 px-0">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-[#333333] xxs:text-[20px] md:text-[40px] lg:text-[40px]">
          Featured Products
        </h1>
      </div>
      <div className="flex items-center justify-center xxs:mb-6 lg:mb-16">
        <div className=" block h-1.5 w-24 bg-[#197B30]"></div>
      </div>
      <FeaturedProduct />

      <Link
        to="/products"
        className="my-10 flex items-center justify-center hover:text-[#197b30]"
      >
        <span className="mr-2 whitespace-normal text-[16px] font-medium leading-[19px] text-[#333333] underline  hover:text-[#197b30]">
          SEE ALL
        </span>
        <AiOutlineRight />
      </Link>
    </div>
  );
};

export default Header;
