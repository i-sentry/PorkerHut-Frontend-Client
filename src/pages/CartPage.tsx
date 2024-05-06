import React from "react";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import { chunkArray } from "../helper/chunck";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { productData } from "../utils/productData";

import ProductCard from "../components/featured-product-component/ProductCard";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import CartCard2 from "../components/CartCard2";
import { useNavigate } from "react-router-dom";

import AppLayout from "../components/utility/AppLayout";
import CartMobileModal from "../components/CartMobileModal";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import // decrementProductQty,
// deleteProductFromCart,
// incrementProductQty,
// IProduct,
"../redux/features/product/productSlice";
// import { useAppSelector } from "../redux/hook";
import { usePopModal } from "../store/overlay";
// import { IProduct } from "./ProductPage";
import { useGetAllProducts } from "../services/hooks/users/products";

const CartPage = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.product.cart);
  const { data: allProducts } = useGetAllProducts();
  const [showModal, setShowModal] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const isMobileScreen = useMediaQuery("(max-width: 639px)");
  const toggleModal = usePopModal((state) => state.toggleModal);

  const openModal = usePopModal((state) => state.openModal);
  const location = usePopModal((state) => state.location);

  const handleNavigate = () => {
    navigate("/products");
  };

  const cartTotal = Object.values(cart)?.reduce((acc, current) => {
    return (
      acc +
      current?.pricing?.productPrice * (current?.pricing?.quantity as number)
    );
  }, 0);

  const cartTotalQuantity = Object.values(cart).reduce((acc, current) => {
    return acc + (current?.pricing?.quantity as number);
  }, 0);

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

  const cartItems: string[] = [];
  const cartSubCategory: string[] = [];

  Object.values(cart).forEach((item: any) => {
    cartItems.push(item?._id);
    cartSubCategory.push(item?.information?.subcategory?.name);
  });

  const filteredApprovedProduct = allProducts?.data?.filter(
    (product: any, index: number) =>
      product?.approvalStatus === "approved" &&
      !cartItems?.includes(product?._id),
  );

  const relatedProducts = filteredApprovedProduct?.filter((product: any) =>
    cartSubCategory?.includes(product?.information?.subcategory?.name),
  );

  return (
    <AppLayout>
      <CartMobileModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />

      <div className=" flex flex-col px-4 py-5 xxs:mt-8 md:mt-0 md:bg-[#F5F5F5] md:pb-[4%] md:pt-5 lg:px-4 lg:pt-7">
        {Object.values(cart).length > 0 ? (
          <>
            <div className="block px-4 lg:px-0">
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
            <div className="cart-items flex flex-col bg-white">
              <div className="header-text">
                <div className=" xxs:mb-3 xxs:flex xxs:items-center md:mb-0">
                  <h1 className="text-2xl  font-semibold text-[#333333] xxs:p-4 md:p-8">
                    {/* Cart({Object.values(cart).length}) Cart(
                    {totalQuantity}) */}
                    Cart({cartTotalQuantity})
                  </h1>

                  <div className="hidden">
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

                <div className="product-headers hidden  border-b pb-2 md:flex">
                  <p className="ml-8 text-[#BDBDBD] md:w-[300px] md:text-[16px] lg:mr-24 lg:w-auto">
                    Product
                  </p>
                  <div className="right flex flex-1 justify-between lg:ml-auto lg:mr-20 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2">
                    <p className="w-[136px] text-[#BDBDBD] md:text-[16px]">
                      Quantity
                    </p>
                    <p className="w-[100px] text-center text-[#BDBDBD] md:text-[16px]">
                      Price
                    </p>
                  </div>
                </div>
              </div>

              {/* {Object.values(cart).map((item, idx) => ( */}
              <div className=" order-2  flex flex-col gap-4 pt-8 xxs:hidden md:order-none md:flex">
                {/* @ts-ignore */}
                <CartCard2 item={cart} />

                <hr className="mt-4" />
              </div>

              <div className="order-1 flex md:order-none">
                <div className="hidden w-[365px] md:flex" />
                <div className="right flex-1 lg:ml-auto lg:mr-20 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2">
                  <div className=" flex justify-between">
                    <h1 className=" px-4 text-base font-semibold text-[#333333] md:p-8">
                      Subtotal
                    </h1>
                    <h1 className="items-end px-4  text-base font-semibold text-[#333333] md:p-8">
                      ₦{cartTotal.toLocaleString()}
                    </h1>
                  </div>
                  <div className=" flex justify-center gap-5 p-5 ">
                    <button
                      onClick={handleNavigate}
                      className=" hidden w-full select-none items-center whitespace-nowrap rounded-[4px] border border-[#479559] py-4 px-[45px] text-[14px] font-medium tracking-wider text-[#197B30] md:inline-block md:py-3 md:px-6 md:text-[14px]"
                    >
                      Continue to Shopping
                    </button>
                    <button
                      className={`w-full select-none items-center whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#197B30] py-4 px-[45px] text-[14px] font-medium tracking-wider text-[#fff] xxs:z-20 md:z-0 md:inline-block md:py-3 md:px-6 md:text-[14px]  ${
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
              <div className="order-2 flex flex-col gap-6 p-4 md:order-none md:hidden">
                {/* {Object.values(cart).map((item, idx) => ( */}
                <div className="">
                  {/* @ts-ignore */}
                  <CartCard2 item={cart} />

                  <div className="my-6 h-[1px] w-full border border-[#E1E1E1]"></div>
                </div>
                {/* ))} */}
              </div>
            </div>

            <div className="more-items bg-white p-4 xxs:mt-0 md:mt-16">
              <h1 className="py-6 text-[18px] font-semibold text-[#333333] md:hidden">
                Shop More Items
              </h1>
              <h1 className="hidden py-6 text-[18px] font-semibold text-[#333333] md:block">
                Related Products
              </h1>

              <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
                {chunkArray(relatedProducts, 8)?.[1 - 1]?.map(
                  (item: any, index: number) => (
                    <ProductCard item={item} key={index} />
                  ),
                )}
              </div>
            </div>
            <div className=" p-5 md:hidden ">
              <button className=" w-full select-none items-center whitespace-nowrap rounded-[4px] border border-[#479559] bg-[#fff] py-4 px-[45px] text-[14px] font-medium tracking-wider text-[#197B30] md:inline-block md:py-3 md:px-6 md:text-[14px]">
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
            <div className="  h-[500px] rounded-lg border  bg-white">
              {/* <h1 className=" p-8 text-2xl font-semibold text-[#333333]">
                Cart
              </h1> */}
              <div className=" relative m-auto flex h-full flex-col items-center  justify-center text-center">
                <h1 className=" pb-9 text-[32px] font-normal leading-9 text-[#333333]">
                  Your Cart is Empty
                </h1>
                <div className=" absolute top-40  opacity-[0.1] ">
                  <MdOutlineShoppingCart size={100} />
                </div>
                <button
                  onClick={() => {
                    navigate("/products");
                  }}
                  className=" select-none whitespace-nowrap rounded-md border border-[#479559] bg-[#197B30] py-4 px-[45px] text-[8px] font-medium tracking-wider text-[#fff] md:inline-block md:py-3 md:px-8 md:text-[14px]"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {openModal && (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="relative mb-4 w-[680px] rounded-lg bg-zinc-100 p-6 shadow-lg md:p-10">
            <div className="flex items-center ">
              <button
                onClick={() => toggleModal(false)}
                className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                <span className="mt-6 block p-10 text-3xl">×</span>
              </button>
              <h2 className="mb-4 mt-6 text-xl font-semibold">
                Select a Pick-up station close to you
              </h2>
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-600">
                State:
              </label>
              <input
                id="state"
                className="w-full rounded-md border p-4 focus:border-blue-300 focus:outline-none focus:ring"
                value={location}
                disabled={true}
                // onChange={handleStateChange}
              />
            </div>
            <div className="mb-">
              <label htmlFor="city" className="block text-gray-600">
                Address:
              </label>
              <select
                id="city"
                className="w-full rounded-md border p-4 focus:border-blue-300 focus:outline-none focus:ring"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">
                  No 14, Cresent by philip’s junction beside zenith bank off
                  kudirat Lugbe way Abuja - Abuja
                </option>
                {/* Add city options based on the selected state */}
              </select>
              <span className="info-tooltip text-sm font-normal text-neutral-400 opacity-70">
                No 14, Cresent by philip’s junction beside zenith bank off
                kudirat Lugbe way Abuja - Abuja
              </span>
            </div>

            <div className="mt-6 mb-8 flex flex-col justify-between gap-4 text-zinc-800 md:flex-row">
              <div>
                <h2 className="text-sm font-medium text-zinc-800 ">
                  Contact Information
                </h2>
                <p className="text-xs font-normal text-zinc-800">
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

            <div className="mb-4 flex gap-6 md:justify-end">
              <button
                className="mr-2 rounded border border-green-700 px-10 py-2 text-sm font-semibold text-green-700"
                onClick={() => toggleModal(false)}
              >
                Cancel
              </button>
              <button
                className="rounded bg-green-700 px-10 py-2 text-sm font-semibold text-white"
                onClick={() => toggleModal(false)}
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
// function item(value: IProduct, index: number, array: IProduct[]): void {
//   throw new Error("Function not implemented.");
// }
