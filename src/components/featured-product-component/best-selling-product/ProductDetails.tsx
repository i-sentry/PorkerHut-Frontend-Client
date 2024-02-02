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

const ProductDetails = () => {
  const location = useLocation();
  const item = location?.state?.item;
  const { id } = useParams();
  // @ts-ignore
  const [productID, setProductID] = useState<string | undefined>(id);
  const [data, setData] = useState<any>({});
  const [ratingCard, setRatingCard] = useState<any>([]);
  useEffect(() => setProductID(id), [id]);

  const { data: singleProduct, isLoading: loading } = useGetSingleProduct(
    productID as string
  );
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
  console.log(avgRating, "avgRating");
  const [userRating, setUserRating] = useState(avgRating as number);

  console.log(productID, "productID");
  useEffect(() => {
    // setTemp(false);
    //@ts-ignore
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
    if (storedUser !== null) {
      setUser(storedUser);
    } else {
      //@ts-ignore
      setUser(null);
    }
  }, []);

  // console.log(StoredUser, "store user");
  // console.log(allProducts, "All Products");

  const filteredApprovedProduct = allProducts?.data?.filter(
    (product: any) =>
      product?.approvalStatus === "approved" &&
      product?._id !== singleProduct?.data._id
  );

  const relatedProducts = filteredApprovedProduct?.filter(
    (product: any) =>
      product?.information?.subcategory.name ===
      singleProduct?.data?.information?.subcategory?.name
  );

  console.log(singleProduct, relatedProducts, "All Related");

  // let productID;

  // if (!loading) productID = singleProduct?.data?._id;

  // console.log(checkIsFav?.data?.data?.isFavorite, "checkIsFav");

  useEffect(
    () => setFavorite(checkIsFav?.data?.data?.isFavorite),
    [checkIsFav?.data?.data?.isFavorite]
  );

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  console.log(user, "User Now hhhh");
  console.log(user?._id, singleProduct?.data?._id, "UserID & ProductID");

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };

  const handleClick = () => {
    dispatch(addProductToCart({ id: singleProduct?.data?._id }));
    console.log(singleProduct?.data?._id);
  };

  const handleNavigate = () => {
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
          `${singleProduct?.data?.information?.productName} has been added to favorite`
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
          `${singleProduct?.data?.information?.productName} has been removed from favorite`
        );
      })
      .catch(() => {
        setIsLoading(false);
        toast.error(`Could not complete this action`);
      });
  };

  console.log(user, "users");
  console.log(isFavorite, "my favs");

  return (
    <AppLayout>
      <div className="md:bg-[#EEEEEE] xxs:bg-white md:px-10 pt-4 flex flex-col gap-6 mt-20 pb-14 ">
        <div className="xxs:hidden md:block">
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

        {loading && <SkeletonLoader />}

        {!loading && (
          <div className="md:flex md:px-6 xxs:px-3 md:4 py-8 md:gap-5 bg-white md:rounded-sm">
            <div className="md:w-[65%] flex md:flex-1 md:gap-2 xxs:flex-col-reverse md:flex-row">
              <div className="md:flex-col md:justify-start xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 xxs:mt-3 md:mt-0">
                {singleProduct?.data?.images.map(
                  (image: any, index: number) => (
                    <img
                      src={image}
                      key={index}
                      alt="ProductImg"
                      onClick={(e) => setSelectedImg(index)}
                      className="object-cover cursor-pointer w-[75px] h-20 rounded-sm"
                    />
                  )
                )}
              </div>

              <div className="md:flex-[5]">
                <img
                  src={singleProduct?.data?.images[selectedImg]}
                  alt="img4"
                  className=" object-cover md:h-[400px] xxs:h-[300px]  w-full rounded-sm"
                />
              </div>
            </div>
            <div className="md:w-[35%] md:flex-1 flex flex-col gap-3 xxs:mt-4 md:mt-0">
              <div className="flex justify-between flex-wrap items-center">
                <h1 className="font-semibold text-xl">
                  {singleProduct?.data?.information?.productName}
                </h1>
                {isLoading ? (
                  <CgSpinner size={23} className="animate-spin" />
                ) : (
                  <>
                    {isFavorite ? (
                      <span
                        onClick={removeFav}
                        className="cursor-pointer bg-orange-400 rounded-full w-8 h-8 text-white flex justify-center items-center"
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
              <span className=" font-medium text-base">
                ₦{singleProduct?.data?.pricing?.productPrice.toLocaleString()}
              </span>

              <span className="font-normal text-sm text-[#797979]">
                Weight:&nbsp;
                <span className="font-medium text-black text-sm">
                  {singleProduct?.data?.details?.productWeight}g
                </span>
              </span>
              <span className="font-normal text-sm text-[#797979]">
                Category:&nbsp;
                <span className="font-medium text-black text-sm">
                  {singleProduct?.data?.information?.category?.name}
                </span>
              </span>

              <span className="font-normal text-sm text-[#797979]">
                Availability:&nbsp;
                <span className="font-medium text-black text-sm">
                  {/* 100% Available */}
                  {singleProduct?.data?.pricing?.quantity > 0
                    ? "100% Available"
                    : "Out of stock"}
                </span>
              </span>
              <div className="flex flex-col">
                <h1 className="block font-normal text-base text-[#797979]">
                  Quantity
                </h1>

                <div className="flex items-center">
                  <button
                    className="border w-10 h-10"
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  <span className="border w-10 h-10 flex items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    className="border w-10 h-10"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="md:mt-2  md:flex gap-6 xxs:px-4 md:px-0 xxs:mt-4">
                <button
                  onClick={handleClick}
                  className="bg-[#197B30] xxs:w-full md:w-[200px] md:h-10 xxs:h-14 text-white rounded-sm font-medium xxs:mb-4 shadow-md"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleNavigate}
                  className="md:w-[200px] xxs:w-full md:h-10 xxs:h-14 border-[#197B30] border text-[#197B30] rounded-sm font-medium shadow-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white md:p-4 xxs:p-3 rounded-sm">
          <Fragment>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="font-medium text-base"
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
                      className="text-green-500 underline capitalize font-medium"
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

        <div className="more-items bg-white mt-6">
          <h1 className="text-[18px] text-[#333333] font-semibold py-6 px-4 hidden md:block">
            Related Products
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 w-full xxs:px-3 md:px-0 xxs:gap-4 ">
            {relatedProducts?.length >= 1 &&
              chunkArray(relatedProducts, 8)[1 - 1]?.map(
                (item: any, index: number) => (
                  <ProductCard item={item} key={index} />
                )
              )}

            {relatedProducts?.length < 1 && (
              <p className="text-gray-500 px-4 mb-4">No Related Products yet</p>
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
    <div className="overflow-hidden relative w-full bg-white p-6 grid grid-cols-2 gap-4">
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 w-[25%]">
          <div className="skeleton-loader h-[100px_!important]"></div>
          <div className="skeleton-loader h-[100px_!important]"></div>
          <div className="skeleton-loader h-[100px_!important]"></div>
        </div>
        <div className="skeleton-loader w-[73%] h-[350px_!important]"></div>
      </div>
      {/* <div className="skeleton-loader"></div> */}
      <div className="flex flex-col items-start w-full">
        <div className="w-full">
          <div className="text-loader h-[30px_!important]"></div>
          <div className="text-loader h-[30px_!important]"></div>
        </div>
        <div className="w-full">
          <div className="text-loader"></div>
          <div className="text-loader"></div>
        </div>
      </div>
    </div>
  );
};
