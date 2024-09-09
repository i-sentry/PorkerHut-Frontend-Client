/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, Fragment, useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import StarRating from "./ProductDetailRating";
import RatingCard from "./RatingCard";
import ProductsBreadCrumbs from "../../story-components/ProductsBreadCrumbs";
import { Link, useLocation, useParams } from "react-router-dom";
import { addProductToCart } from "../../../redux/features/product/productSlice";
import AppLayout from "../../utility/AppLayout";
import { useDispatch } from "react-redux";
import { productData } from "../../../utils/productData";
import { chunkArray } from "../../../helper/chunck";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";
import { useGetSingleProduct } from "../../../services/hooks/Vendor/products";
// import RatingWidget from "../../RatingWidget";
import { IUser } from "../../order-component/OrderCart";
import {
  useDeleteFavorite,
  useFavoriteProduct,
  useGetAllProducts,
  useGetFavProduct,
  useGetRatingDetails,
} from "../../../services/hooks/users/products";
import { CgSpinner } from "react-icons/cg";
import { toast } from "react-toastify";
import RatingStars from "../../RatingStars";
import _ from "lodash";

const ProductDetails = () => {
  const location = useLocation();
  const item = location?.state?.item;
  const { id } = useParams();
  // @ts-ignore
  const [productID, setProductID] = useState<string | undefined>(id);
  const [data, setData] = useState<any>({});
  const [ratingCard, setRatingCard] = useState<any>([]);
  useEffect(() => setProductID(id), [id]);

  const {
    data: singleProduct,
    isLoading: loading,
    refetch,
  } = useGetSingleProduct(productID as string);
  const { data: allProducts } = useGetAllProducts();
  const { data: ratingDetails } = useGetRatingDetails(id as string);
  const allProductRatings = ratingDetails?.data?.ratingStatistics[0];

  useEffect(() => {
    setData(allProductRatings);
  }, [allProductRatings]);
  useEffect(() => {
    setRatingCard(allProductRatings?.ratings);
  }, [allProductRatings?.ratings]);

  const StoredUser = JSON.parse(localStorage.getItem("user") as string);
  const checkIsFav = useGetFavProduct(StoredUser?._id, id);
  const navigate = useNavigate();
  const addFav = useFavoriteProduct();
  const [isFavorite, setFavorite] = useState(false);
  const [user, setUser] = useState<IUser>();
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const deleteFav = useDeleteFavorite(user?._id, id);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const avgRating = singleProduct?.data?.avgRating;
  const [userRating, setUserRating] = useState(avgRating as number);

  useEffect(() => {
    // setTemp(false);
    //@ts-ignore
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser !== null) {
      setUser(storedUser);
    } else {
      //@ts-ignore
      setUser(null);
    }
  }, []);

  const filteredApprovedProduct = allProducts?.data?.filter(
    (product: any) =>
      product?.approvalStatus === "approved" &&
      product?._id !== singleProduct?.data._id,
  );

  const relatedProducts = filteredApprovedProduct?.filter(
    (product: any) =>
      product?.information?.subcategory?.name ===
      singleProduct?.data?.information?.subcategory?.name,
  );

  useEffect(
    () => setFavorite(checkIsFav?.data?.data?.isFavorite),
    [checkIsFav?.data?.data?.isFavorite],
  );

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };

  const handleClick = () => {
    dispatch(addProductToCart({ id: singleProduct?.data?._id }));
  };

  const handleNavigate = () => {
    dispatch(addProductToCart({ id: singleProduct?.data?._id }));
    navigate("/my-cart");
  };

  const toggleFavorite = () => {
    setIsLoading(true);
    addFav
      .mutateAsync({ userId: user?._id, productId: id })
      .then(() => {
        setFavorite((prevFavorite) => !prevFavorite);
        setIsLoading(false);
        toast.success(
          `${_.capitalize(singleProduct?.data?.information?.productName)} has been added to favorite`,
        );
      })
      .catch(() => {
        setIsLoading(false);
        toast.error(`Could not complete this action`);
      });
  };

  const removeFav = () => {
    setIsLoading(true);
    deleteFav
      .mutateAsync({})
      .then(() => {
        setFavorite((prevFavorite) => !prevFavorite);
        setIsLoading(false);
        toast.success(
          `${_.capitalize(singleProduct?.data?.information?.productName)} has been removed from favorite`,
        );
      })
      .catch(() => {
        setIsLoading(false);
        toast.error(`Could not complete this action`);
      });
  };

  return (
    <AppLayout>
      <div className="mt-14 bg-[#EEEEEE] px-4 lg:pt-5">
        <ProductsBreadCrumbs
          items={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Products",
              link: "/products",
            },
            {
              name: "Product Details",
              link: "#",
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-6 px-4 pt-2 pb-14 md:bg-[#EEEEEE]">
        {loading && <SkeletonLoader />}

        {!loading && (
          <div className="bg-white py-8 md:flex md:gap-5 md:rounded-sm md:px-6">
            <div className="flex xxs:flex-col-reverse md:w-[65%] md:flex-1 md:flex-row md:gap-2">
              <div className="xxs:mt-3 xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 md:mt-0 md:flex-col md:justify-start">
                {singleProduct?.data?.images.map(
                  (image: any, index: number) => (
                    <img
                      src={image}
                      key={index}
                      alt="ProductImg"
                      onClick={(e) => setSelectedImg(index)}
                      className="h-20 w-[75px] cursor-pointer rounded-sm object-cover"
                    />
                  ),
                )}
              </div>

              <div className="md:flex-[5]">
                <img
                  src={singleProduct?.data?.images[selectedImg]}
                  alt="img4"
                  className=" w-full rounded-sm object-cover  xxs:h-[300px] md:h-[400px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 xxs:mt-4 md:mt-0 md:w-[35%] md:flex-1">
              <div className="flex flex-wrap items-center justify-between">
                <h1 className="text-xl font-semibold capitalize">
                  {singleProduct?.data?.information?.productName}
                </h1>
                {isLoading ? (
                  <CgSpinner size={23} className="animate-spin" />
                ) : (
                  <>
                    {isFavorite ? (
                      <span
                        onClick={removeFav}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-orange-400 text-white"
                      >
                        <MdFavorite size={23} />
                      </span>
                    ) : (
                      <span
                        onClick={toggleFavorite}
                        className="cursor-pointer hover:text-orange-400"
                      >
                        <MdFavoriteBorder size={23} />
                      </span>
                    )}
                  </>
                )}
                <div className="w-full">
                  <RatingStars maxRating={5} iconSize={36} canRate={false} />
                </div>
              </div>
              <span className=" text-base font-medium">
                ₦{singleProduct?.data?.pricing?.productPrice.toLocaleString()}
              </span>

              <span className="text-sm font-normal text-[#797979]">
                Weight:&nbsp;
                <span className="text-sm font-medium text-black">
                  {singleProduct?.data?.details?.productWeight}kg
                </span>
              </span>
              <span className="text-sm font-normal text-[#797979]">
                Category:&nbsp;
                <span className="text-sm font-medium capitalize text-black">
                  {singleProduct?.data?.information?.category?.name}
                </span>
              </span>

              <span className="text-sm font-normal text-[#797979]">
                Availability:&nbsp;
                <span className="text-sm font-medium text-black">
                  {/* 100% Available */}
                  {singleProduct?.data?.pricing?.quantity > 0
                    ? "100% Available"
                    : "Out of stock"}
                </span>
              </span>
              <div className="flex flex-col">
                <h1 className="block text-sm font-normal text-[#797979]">
                  Quantity
                </h1>

                <div className="flex items-center">
                  <button
                    className="h-10 w-10 border"
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  <span className="flex h-10 w-10 items-center justify-center border">
                    {quantity}
                  </span>
                  <button
                    className="h-10 w-10 border"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="gap-6  xxs:mt-4 md:mt-2 md:flex md:px-0">
                <button
                  onClick={
                    singleProduct?.data?.pricing?.quantity > 0
                      ? handleClick
                      : () => null
                  }
                  className={`rounded-sm font-medium text-white shadow-md xxs:mb-4 xxs:h-14 xxs:w-full md:h-10 md:w-[200px] ${singleProduct?.data?.pricing?.quantity > 0 ? "bg-[#197b30]" : "cursor-not-allowed bg-red-600"}`}
                >
                  {singleProduct?.data?.pricing?.quantity > 0
                    ? "Add to Cart"
                    : "Out of Stock"}
                </button>
                <button
                  onClick={handleNavigate}
                  disabled={singleProduct?.data?.pricing?.quantity < 1}
                  className={`rounded-sm border border-[#197B30] font-medium text-[#197B30] shadow-md xxs:h-14 xxs:w-full md:h-10 md:w-[200px] ${singleProduct?.data?.pricing?.quantity > 0 ? "opacity-100" : "opacity-40"}`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-sm bg-white xxs:p-3 md:p-4">
          <Fragment>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-base font-medium"
              >
                Product Description
              </AccordionHeader>
              <AccordionBody>
                <div className=" xxs:px-4 md:px-0">
                  {singleProduct?.data?.details?.productDescription}
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-base font-medium"
              >
                Product Details
              </AccordionHeader>
              <AccordionBody>
                <div className=" xxs:px-4 md:px-0">
                  {singleProduct?.data?.details?.productDescription}
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-base font-medium"
              >
                Delivery Info
              </AccordionHeader>
              <AccordionBody>
                <div className=" xxs:px-4 md:px-0">
                  {singleProduct?.data?.details?.deliveryDetails}
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-base font-medium"
              >
                Product Reviews
              </AccordionHeader>
              <AccordionBody>
                {!data && (
                  <div className="">
                    No reviews have been added yet for this product. Check out
                    other{" "}
                    <Link
                      to="/products"
                      className="font-medium capitalize text-green-500 underline"
                    >
                      products
                    </Link>
                  </div>
                )}
                {data && (
                  <div>
                    <StarRating
                      rating={0}
                      data={data}
                      dataCard={ratingCard}
                      setData={setRatingCard}
                    />

                    <div>
                      <RatingCard id={productID} data={ratingCard} />
                    </div>
                  </div>
                )}
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>

        <div className="more-items mt-6 bg-white">
          <h1 className="hidden py-6 px-4 text-[18px] font-semibold text-[#333333] md:block">
            Related Products
          </h1>

          <div className="grid w-full grid-cols-2 xxs:gap-4 xxs:px-3 md:grid-cols-4 md:px-0 ">
            {relatedProducts?.length >= 1 &&
              chunkArray(relatedProducts, 8)[1 - 1]?.map(
                (item: any, index: number) => (
                  <ProductCard
                    item={item}
                    key={index}
                    related={true}
                    refetch={refetch}
                  />
                ),
              )}

            {relatedProducts?.length < 1 && (
              <p className="mb-4 px-4 text-gray-500">No Related Products yet</p>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProductDetails;

const SkeletonLoader = () => {
  return (
    // <div className="animate-pulse bg-gray-400 rounded-sm w-full h-[400px] relative "></div>
    <div className="relative grid w-full gap-4 overflow-hidden bg-white p-6 px-0 md:grid-cols-2 md:px-4">
      <div className="flex flex-col-reverse gap-3 md:flex-row">
        <div className="mx-auto flex w-10/12 gap-3 md:mx-0 md:w-[25%] md:flex-col">
          <div className="skeleton-loader h-[100px_!important]"></div>
          <div className="skeleton-loader h-[100px_!important]"></div>
          <div className="skeleton-loader h-[100px_!important]"></div>
        </div>
        <div className="skeleton-loader h-[350px_!important] w-[73%]"></div>
      </div>
      {/* <div className="skeleton-loader"></div> */}
      <div className="mt-6 flex w-full flex-col items-start md:mt-0">
        <div className="w-full space-y-3">
          <div className="text-loader h-[30px_!important]"></div>
          <div className="text-loader h-[30px_!important]"></div>
        </div>
        <div className="w-full space-y-4">
          <div className="text-loader"></div>
          <div className="text-loader"></div>
          <div className="text-loader"></div>
          <div className="text-loader"></div>
        </div>
      </div>
    </div>
  );
};
