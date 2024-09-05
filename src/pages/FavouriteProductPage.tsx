import React, { useState, useEffect } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
// import ProductCard from "../components/featured-product-component/ProductCard";
import { chunkArray } from "../helper/chunck";
// import { productData } from "../utils/productData";
import AppLayout from "../components/utility/AppLayout";
import { useGetUserFavProduct } from "../services/hooks/users/products";
import FavouriteProductCard from "../components/favourite-product-card/FavouriteProductCard";
import NoFavorite from "../components/favourite-product-card/NoFavorite";
import { useAppDispatch } from "../redux/hook";
import { fetchProduct } from "../redux/features/product/productSlice";

const FavouriteProductPage = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any[]>([]);
  let itemsPerPage = 8;
  let currentPage = 1;
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  const user = JSON.parse(localStorage.getItem("user") as string);
  const { data: userFavs, isLoading } = useGetUserFavProduct(
    user._id as string,
  );

  const allFav = userFavs?.data?.favoriteProducts;

  useEffect(() => setData(allFav), [allFav]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <AppLayout>
      <section className="px-4 pb-16">
        <div className="mt-24">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-zinc-800 lg:text-[40px]">
              My Favorite
            </h1>
          </div>
          <div className="mt-3 mb-8 flex items-center justify-center">
            <div className=" block h-1 w-20 bg-[#197B30]"></div>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        )}

        {data?.length === 0 && <NoFavorite />}

        {data && (
          <div className="grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
              (item: any, index: number) => {
                return <FavouriteProductCard item={item} key={index} />;
              },
            )}
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-1 bg-white px-4 py-3 xxs:pt-8 sm:px-6">
          <button
            onClick={() =>
              currentPageIndex !== 1
                ? setCurrentPageIndex(currentPageIndex - 1)
                : null
            }
            className={
              (currentPageIndex === 1 ? "no-item" : "") +
              ` rounded-l-md border-2  border-[#A2A2A2] p-1  hover:bg-[#A2A2A2] hover:text-white ${
                data?.length === 0 && "hidden"
              }`
            }
          >
            <RxCaretLeft size={16} />
          </button>
          <div className="pagination flex items-center gap-1">
            {chunkArray(data, itemsPerPage).map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setCurrentPageIndex(index + 1)}
                  className={` border-2   border-[#A2A2A2]  ${
                    currentPageIndex === index + 1
                      ? "active-page-index flex-1 rounded-md  border-[#197B30] p-[1px] px-2 text-[#197B30]"
                      : "flex-1 rounded-md border-[#A2A2A2] p-[1px] px-2 text-[#A2A2A2] hover:bg-slate-100"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={() =>
              currentPageIndex !== chunkArray(data, itemsPerPage)?.length
                ? setCurrentPageIndex(currentPageIndex + 1)
                : null
            }
            className={
              (currentPageIndex === chunkArray(data, itemsPerPage)?.length
                ? "no-items"
                : "") +
              ` rounded-r-md border-2  border-[#A2A2A2] p-1 hover:bg-[#A2A2A2] hover:text-white ${
                data?.length === 0 && "hidden"
              }`
            }
          >
            <RxCaretRight size={16} />
          </button>
        </div>

        {/* {data?.length ? (
        <>
          <div className="grid md:grid-cols-4 xxs:gap-5 md:px-10 xxs:px-4 xxs:grid-cols-2">
            {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
              (item: any, index: number) => {
                return <ProductCard item={item} key={index} />;
              }
            )}
          </div>
          <div className="flex items-center justify-center gap-1 bg-white px-4 py-3 sm:px-6 xxs:pt-8">
            <button
              onClick={() =>
                currentPageIndex !== 1
                  ? setCurrentPageIndex(currentPageIndex - 1)
                  : null
              }
              className={
                (currentPageIndex === 1 ? "no-item" : "") +
                " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white  rounded-l-md p-1"
              }
            >
              <RxCaretLeft size={16} />
            </button>
            <div className="pagination flex gap-1 items-center">
              {chunkArray(data, itemsPerPage).map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPageIndex(index + 1)}
                    className={` border-2   border-[#A2A2A2]  ${
                      currentPageIndex === index + 1
                        ? "active-page-index px-2 p-[1px]  flex-1 rounded-md text-[#197B30] border-[#197B30]"
                        : "border-[#A2A2A2] text-[#A2A2A2] flex-1 p-[1px] px-2 hover:bg-slate-100 rounded-md"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                currentPageIndex !== chunkArray(data, itemsPerPage).length
                  ? setCurrentPageIndex(currentPageIndex + 1)
                  : null
              }
              className={
                (currentPageIndex === chunkArray(data, itemsPerPage).length
                  ? "no-items"
                  : "") +
                " border-2 border-[#A2A2A2]  hover:bg-[#A2A2A2] hover:text-white p-1 rounded-r-md"
              }
            >
              <RxCaretRight size={16} />
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-90%">
          <div className="border-2 border-dashed border-gray-400 rounded-lg p-8">
            <div>Empty state</div>
          </div>
        </div>
      )} */}
      </section>
    </AppLayout>
  );
};

export default FavouriteProductPage;

const SkeletonLoader = () => {
  return (
    // <div className="animate-pulse bg-gray-400 rounded-sm w-full h-[400px] relative "></div>
    <div className="relative w-full overflow-hidden">
      <div className="skeleton-loader"></div>
      <div className="flex w-full items-center justify-between">
        <div className="w-full">
          <div className="text-loader"></div>
          <div className="text-loader"></div>
        </div>
        <div className="w-full">
          <div className="text-loader"></div>
          <div className="text-loader"></div>
        </div>
      </div>
    </div>
  );
};
