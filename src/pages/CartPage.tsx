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
import CartCard2 from "../components/CartCard2";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate()
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

        <div className=" bg-[#F5F5F5] px-[4%] flex flex-col gap-5">
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

          <div className="cart-items bg-white flex flex-col">
            <div className="header-text">
              <h1 className=" p-8 text-2xl font-semibold text-[#333333]">
                Cart({Object.values(cart).length})
              </h1>

              <div className="product-headers border-b hidden md:flex py-2">
                <p className="ml-8 mr-24 md:text-[16px] text-[#BDBDBD]">Product</p>
                <div className="right flex-1 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/2 lg:ml-auto lg:mr-20 flex justify-between">
                  <p className="w-[136px] md:text-[16px] text-[#BDBDBD]">Quantity</p>
                  <p className="w-[100px] text-center md:text-[16px] text-[#BDBDBD]">Price</p>
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-4 order-2 md:order-none">
              {Object.values(cart).map((item, idx) => <CartCard2 item={item} key={idx} />)}
            </div>
              
            <div className="order-1 md:order-none flex">
              <div className="w-[365px] hidden md:flex" />
              <div className="right flex-1 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/2 lg:ml-auto lg:mr-20">
                <div className=" flex justify-between">
                  <h1 className=" p-8 px-4 text-base font-semibold text-[#333333]">
                    Subtotal
                  </h1>
                  <h1 className="items-end p-8 px-4 text-base font-semibold text-[#333333]">
                    ₦{cartTotal.toLocaleString()}
                  </h1>
                </div>
                <div className=" p-5 flex gap-5">
                  <button className=" border border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] w-full rounded-[4px] text-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center hidden">Continue to Shopping</button>
                  <button className=" border border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] w-full rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center" onClick={() => navigate('/billing')}>
                    Checkout <span className="md:hidden">(₦{cartTotal.toLocaleString()})</span> 
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div className="more-items bg-white mt-16 p-4">
            <h1 className="text-[18px] text-[#333333] font-semibold py-6 md:hidden">
              Shop More Items
            </h1>
            <h1 className="text-[18px] text-[#333333] font-semibold py-6 hidden md:block">
              Related Products
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 w-full">
              {cartData.map(item => (

              <Cards item={item} key={item.id} />
              ))}
            </div>
          </div>
        
        </div>

      </div>


      
      

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
