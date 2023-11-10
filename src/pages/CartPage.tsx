import React from "react";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import { chunkArray } from "../helper/chunck";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MdOutlineShoppingCart, MdOutlineSpeakerNotes } from "react-icons/md";
import { productData } from "../utils/productData";

import ProductCard from "../components/featured-product-component/ProductCard";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import CartCard2 from "../components/CartCard2";
import { useNavigate } from "react-router-dom";

import AppLayout from "../components/utility/AppLayout";
import CartMobileModal from "../components/CartMobileModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  // decrementProductQty,
  deleteProductFromCart,
  // incrementProductQty,
  // IProduct,
} from "../redux/features/product/productSlice";
// import { useAppSelector } from "../redux/hook";
import { usePopModal } from "../store/overlay";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.product.cart);
  const [showModal, setShowModal] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const totalQuantity = useSelector(
    (state: RootState) => state.product.totalQuantity
  );
  const isMobileScreen = useMediaQuery("(max-width: 639px)");
  const toggleModal = usePopModal((state) => state.toggleModal);
  const openModal = usePopModal((state) => state.openModal);

  const handleNavigate = () => {
    navigate("/products");
  };
  // const products = useAppSelector((state) => state.product);
  const cartTotal = Object.values(cart).reduce((acc, current) => {
    return (
      acc + current.pricing.productPrice * (current.pricing.quantity as number)
    );
  }, 0);
  console.log(Object.values(cart).length, "Object.values(cart).length");
  console.log(cart, "(cart)");

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.2;
      setIsScrolling(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppLayout>
      <CartMobileModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />

      <div className=" md:bg-[#F5F5F5]  lg:px-[4%] md:pb-[4%] md:pt-[7%] flex flex-col xxs:mt-28 md:mt-0">
        {Object.values(cart).length > 0 ? (
          <>
            <div className="xxs:hidden md:block">
              <ProductsBreadCrumbs
                items={[
                  {
                    name: "Home",
                    link: "/",
                  },
                  {
                    name: "Cart",
                    link: "/my-cart",
                  },
                ]}
              />
            </div>
            <div className="cart-items bg-white flex flex-col">
              <div className="header-text">
                <div className=" xxs:flex xxs:items-center xxs:mb-3 md:mb-0">
                  <h1 className="md:p-8  xxs:p-4 text-2xl font-semibold text-[#333333]">
                    Cart({Object.values(cart).length}) Cart({totalQuantity})
                  </h1>

                  <div className="md:hidden">
                    <ProductsBreadCrumbs
                      items={[
                        {
                          name: "Home",
                          link: "/",
                        },
                        {
                          name: "Cart",
                          link: "/my-cart",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="product-headers border-b  hidden md:flex pb-2">
                  <p className="ml-8 mr-24 md:text-[16px] text-[#BDBDBD]">
                    Product
                  </p>
                  <div className="right flex-1 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/2 lg:ml-auto lg:mr-20 flex justify-between">
                    <p className="w-[136px] md:text-[16px] text-[#BDBDBD]">
                      Quantity
                    </p>
                    <p className="w-[100px] text-center md:text-[16px] text-[#BDBDBD]">
                      Price
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {Object.values(cart).map((item, idx) => (
                  <div className=" pt-8  flex flex-col gap-4 order-2 md:order-none xxs:hidden md:flex">
                    <CartCard2 item={item} key={idx} />

                    <hr className="mt-4" />
                  </div>
                ))}
              </div>

              <div className="order-1 md:order-none flex">
                <div className="w-[365px] hidden md:flex" />
                <div className="right flex-1 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/2 lg:ml-auto lg:mr-20">
                  <div className=" flex justify-between">
                    <h1 className=" md:p-8 px-4 text-base font-semibold text-[#333333]">
                      Subtotal
                    </h1>
                    <h1 className="items-end md:p-8  px-4 text-base font-semibold text-[#333333]">
                      ₦{cartTotal.toLocaleString()}
                    </h1>
                  </div>
                  <div className=" p-5 flex gap-5 justify-center ">
                    <button
                      onClick={handleNavigate}
                      className=" border border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] w-full rounded-[4px] text-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center hidden"
                    >
                      Continue to Shopping
                    </button>
                    <button
                      className={`border xxs:z-20 md:z-0 border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] rounded-[4px] text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center w-full  ${
                        isMobileScreen
                          ? isScrolling
                            ? "fixed top-[79px] w-[92%]"
                            : ""
                          : ""
                      }`}
                      onClick={() => navigate("/billing")}
                    >
                      Checkout{" "}
                      <span className="md:hidden">
                        (₦{cartTotal.toLocaleString()})
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 flex flex-col gap-6 order-2 md:order-none md:hidden">
                {Object.values(cart).map((item, idx) => (
                  <div>
                    <CartCard2 item={item} key={idx} />
                    <div className="flex items-center justify-between mt-3 md:hidden text-[#797979]">
                      <div className="flex items-center gap-2">
                        <MdOutlineSpeakerNotes size={24} />
                        <button onClick={() => setShowModal(true)}>
                          Add a note
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          dispatch(deleteProductFromCart({ id: item._id }))
                        }
                      >
                        Remove
                      </button>
                    </div>

                    <div className="w-full h-[1px] border border-[#E1E1E1] my-6"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="more-items bg-white md:mt-16 xxs:mt-0 p-4">
              <h1 className="text-[18px] text-[#333333] font-semibold py-6 md:hidden">
                Shop More Items
              </h1>
              <h1 className="text-[18px] text-[#333333] font-semibold py-6 hidden md:block">
                Related Products
              </h1>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 w-full">
                {chunkArray(productData, 8)[1 - 1].map((item) => (
                  <ProductCard item={item} key={item.id} />
                ))}
              </div>
            </div>
            <div className=" p-5 md:hidden ">
              <button className=" border border-[#479559] md:text-[14px] text-[14px] md:py-3 md:px-6 py-4 px-[45px] w-full rounded-[4px] text-[#197B30] bg-[#fff] md:inline-block select-none tracking-wider font-medium whitespace-nowrap items-center">
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="">
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
            <div className="  bg-white border h-[500px]  rounded-lg">
              {/* <h1 className=" p-8 text-2xl font-semibold text-[#333333]">
                Cart
              </h1> */}
              <div className=" flex flex-col justify-center h-full items-center text-center  relative m-auto">
                <h1 className=" text-[32px] leading-9 text-[#333333] font-normal pb-9">
                  Your Cart is Empty
                </h1>
                <div className=" opacity-[0.1] absolute  top-40 ">
                  <MdOutlineShoppingCart size={100} />
                </div>
                <button
                  onClick={() => {
                    navigate("/products");
                  }}
                  className=" border border-[#479559] md:text-[14px] text-[8px] md:py-3 md:px-8 py-4 px-[45px] rounded-md text-[#fff] bg-[#197B30] md:inline-block select-none tracking-wider font-medium whitespace-nowrap"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-zinc-100 w-[680px] p-6 md:p-10 rounded-lg shadow-lg relative">
            <div className="flex items-center ">
              <button
                onClick={() => toggleModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <span className="text-3xl p-10 mt-6 block">×</span>
              </button>
              <h2 className="text-xl font-semibold mb-4 mt-6">
                Select a Pick-up station close to you
              </h2>
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-600">
                State:
              </label>
              <select
                id="state"
                className="w-full border rounded-md p-4 focus:outline-none focus:ring focus:border-blue-300"
                value={selectedState}
                onChange={handleStateChange}
              >
                <option value="">Select State</option>
                {/* Add state options here */}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-600">
                City:
              </label>
              <select
                id="city"
                className="w-full border rounded-md p-4 focus:outline-none focus:ring focus:border-blue-300"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">Select City</option>
                {/* Add city options based on the selected state */}
              </select>
              <span className="info-tooltip opacity-70 text-neutral-400 text-sm font-normal">
                No 14, Cresent by philip’s junction beside zenith bank off
                kudirat Lugbe way Abuja - Abuja
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between text-zinc-800 mt-6 mb-8">
              <div>
                <h2 className="text-zinc-800 text-sm font-medium ">
                  Contact Information
                </h2>
                <p className="text-zinc-800 text-xs font-normal">
                  Jane Jackson | +2349012345678
                </p>
              </div>

              <div className="text-zinc-800">
                <h2 className=" text-sm font-medium">Opening hours</h2>
                <p className=" text-xs font-normal">
                  Mon-Fri 8am-5pm; Saturday 8am-2pm
                </p>
              </div>
            </div>

            <div className="flex md:justify-end mb-4 gap-6">
              <button
                className="px-10 py-2 text-green-700 text-sm font-semibold rounded border mr-2 border-green-700"
                onClick={() => toggleModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-10 py-2 bg-green-700 rounded text-white text-sm font-semibold"
                onClick={() => {
                  // Handle Select button click
                }}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default CartPage;
