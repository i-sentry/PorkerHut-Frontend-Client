import React from "react";
import NavBar from "../components/nav-component/NavBar";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import Feed from "../assets/images/Feed.png";
import SeedsImg from "../assets/images/SeedsImg.png";
import DriedPorkImg from "../assets/images/DriedPorkImg.png";
import RawPorkImg from "../assets/images/RawPorkImg.png";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { productData } from "../utils/productData";
import Footer from "../components/footer-component/Footer";
import ProductCard from "../components/featured-product-component/ProductCard";
import Cards from "../components/card/Cards";
import { cartData } from "../components/CartData/cartData";
import { useSelector } from 'react-redux'
import { RootState } from "../redux/store";
import CartCard from "../components/CartCard";

export {};
const CartPage = () => {
  const cart = useSelector((state: RootState) => state.product.cart)

  const cartTotal = Object.values(cart).reduce((acc, current) => {
    return acc + (parseFloat(current.price) * (current.quantity as number))
  }, 0)

  return (
    <>
      <div className="  bg-[#F5F5F5]">
        <nav className="mb-20">
          <NavBar />
        </nav>

        <div className=" bg-[#F5F5F5]">
          <div className="">
            <div className="px-8">
              <ProductsBreadCrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "Cart",
                    link: "/cart",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className=" p-8 text-2xl font-semibold text-[#333333]">
            Cart({Object.values(cart).length})
          </h1>
          <p className="ml-8 md:text-[16px] text-[#BDBDBD] ">Product</p>
          <div className=" flex justify-between">
            <h1 className=" p-8 text-base font-semibold text-[#333333]">
              Subtotal
            </h1>
            <h1 className="items-end p-8 text-base font-semibold text-[#333333]">
              ₦{cartTotal.toLocaleString()}
            </h1>
          </div>
          <div className=" p-5 md:hidden ">
            <button className=" border border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] w-full rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center">
              Checkout(₦{cartTotal.toLocaleString()})
            </button>
          </div>
        </div>
      </div>
      
      {Object.values(cart).map((item, idx) => <CartCard item={item} key={idx} />)}
      
      <div>
        <h1 className="text-[18px] text-[#333333] font-semibold ml-10">
          Shop More Items
        </h1>
      </div>
      <div className="grid grid-cols-2">
        {cartData.map(item => (

        <Cards item={item} key={item.id} />
        ))}
      </div>
      {/* <div className=" p-5 ml-6 grid grid-cols-2 gap-5 w-full h-full">
        <div className=" card">
          <div>
            <img style={{ width: 170, height: 200 }} src={RawPorkImg} alt="" />
          </div>
          <div className=" mt-2">
            <p className=" text-[13px] leading-4 text-[#333333]">
              100% Healthy-Fed Pork Lap
            </p>
            <p className=" text-[18px] leading-4 text-[#333333] font-semibold mt-1">
              ₦3,000
            </p>
            <p className=" text-[10px] text-[#A2A2A2] mt-1">
              Williams Ochoto Farms
            </p>
          </div>
        </div>
        <div className=" card">
          <div>
            <img style={{ width: 170, height: 200 }} src={DriedPorkImg} alt="" />
          </div>
          <div className=" mt-2">
            <p className=" text-[13px] leading-4 text-[#333333]">
              100% Healthy-Fed Pork Lap
            </p>
            <p className=" text-[18px] leading-4 text-[#333333] font-semibold mt-1">
              ₦3,000
            </p>
            <p className=" text-[10px] text-[#A2A2A2] mt-1">
              Williams Ochoto Farms
            </p>
          </div>
        </div>
      </div>
      <div className=" p-5 ml-6 grid grid-cols-2 gap-5 w-full h-full">
        <div className=" card">
          <div>
            <img style={{ width: 170, height: 200 }} src={SeedsImg} alt="" />
          </div>
          <div className=" mt-2">
            <p className=" text-[13px] leading-4 text-[#333333]">
              100% Healthy-Fed Pork Lap
            </p>
            <p className=" text-[18px] leading-4 text-[#333333] font-semibold mt-1">
              ₦3,000
            </p>
            <p className=" text-[10px] text-[#A2A2A2] mt-1">
              Williams Ochoto Farms
            </p>
          </div>
        </div>
        <div className=" card">
          <div>
            <img style={{ width: 170, height: 200 }} src={Feed} alt="" />
          </div>
          <div className=" mt-2">
            <p className=" text-[13px] leading-4 text-[#333333]">
              100% Healthy-Fed Pork Lap
            </p>
            <p className=" text-[18px] leading-4 text-[#333333] font-semibold mt-1">
              ₦3,000
            </p>
            <p className=" text-[10px] text-[#A2A2A2] mt-1">
              Williams Ochoto Farms
            </p>
          </div>
        </div>
      </div> */}

      <div className=" p-5 md:hidden ">
        <button className=" border border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] w-full rounded-[4px] text-[#197B30] bg-[#fff] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center">
          Continue Shopping
        </button>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
