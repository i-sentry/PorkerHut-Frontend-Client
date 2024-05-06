// import Footer from "../components/footer-component/Footer";
// import NavBar from "../components/nav-component/NavBar";
// import Product from "../assets/images/productimg1.png";
// import { BsStar } from "react-icons/bs";
import { useEffect, useState } from "react";
import Logo from "../assets/porker hut 1 1.png";
import {
  useCreateRating,
  useGetRatedProduct,
  useGetSingleProduct,
  useUpdateRating,
} from "../services/hooks/users/products";
import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../components/utility/AppLayout";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import CustomSelect from "../components/utility/CustomSelect";
import { SelectOptionType } from "./VetPartnerMobileFormA";
// import RatingWidget from "../components/RatingWidget";
import RatingStars from "../components/RatingStars";
// import { toast } from "react-toastify";
import RatingSuccess from "./RatingSuccess";

const RateReview = () => {
  const { id } = useParams();
  // @ts-ignore
  const { data: singleProduct, isLoading } = useGetSingleProduct(id);
  const [selectedImg, setSelectedImg] = useState(0);

  const [loading, setLoading] = useState(false);
  const [ratingComment, setRatingComment] = useState("");
  const [userName, setuserName] = useState<SelectOptionType>(null);
  const userdata = JSON.parse(localStorage.getItem("user") as string);
  const _name = `${userdata?.firstName} ${userdata?.lastName}`;
  const avgRating = singleProduct?.data?.avgRating;
  const [userRating, setUserRating] = useState<number>();
  const [modal, setModal] = useState<boolean>(false);

  const { data } = useGetRatedProduct(userdata?._id, id as string);
  const [rated, setRated] = useState<boolean>(false);

  const isRated = data?.data;

  useEffect(() => {
    if (isRated?.message === "Rating found") {
      setRated(true);
    }
  }, [isRated?.message]);

  // const productRated = ;

  const handleRatingChange = (newRating: number) => {
    setUserRating(newRating);
  };

  const createRating = useCreateRating();
  const updateRating = useUpdateRating(isRated?.rating._id);
  const navigate = useNavigate();

  const initiateCreateRating = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (isRated?.message === "Rating found") {
      updateRating
        .mutateAsync({
          ratingValue: userRating as number, //add dynamically
          comment: ratingComment,
        })
        .then(() => {
          setLoading(false);
          setModal(true);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      createRating
        .mutateAsync({
          productId: id as string,
          userId: userdata._id,
          ratingValue: userRating as number, //add dynamically
          comment: ratingComment,
        })
        .then(() => {
          setLoading(false);
          setModal(true);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const user = [
    { id: 1, value: "Anonymous", label: "Anonymous" },
    userdata && { id: 2, value: `${_name}`, label: `${_name}` },
  ];


  return (
    <AppLayout>
      <section className="justify-[start_!important] mx-auto w-full flex-col px-4  py-16 pt-16 lg:max-w-[1024px] lg:pt-24 xl:max-w-[1140px]">
        <div className="hidden ">
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
        <h1 className="relative mx-auto mb-10 flex w-full flex-col items-center justify-center gap-2 text-center text-xl font-semibold text-zinc-800  after:mt-1 after:inline-block after:h-1.5 after:w-[100px]  after:bg-green-700 md:text-[32px]">
          Rate & Review
        </h1>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img src={Logo} alt="Porker Hut" className="animate-pulse" />
            <p className="mt-3 text-xl">Loading...</p>
          </div>
        ) : (
          <div className="flex w-full flex-wrap items-start justify-between">
            {/* PRODUCT IMAGES */}
            <div className="mb-8 flex w-full flex-wrap-reverse md:m-0 md:mx-auto md:w-full md:flex-row md:gap-4 lg:w-1/2 lg:flex-wrap lg:items-start ">
              <div className="w-full xxs:mt-3 xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 md:mt-0 lg:w-auto lg:flex-col lg:justify-start">
                {singleProduct?.data?.images.map(
                  (image: any, index: number) => (
                    <img
                      src={image}
                      alt="ProductImg"
                      onClick={(e) => setSelectedImg(index)}
                      className="h-20 w-[75px] cursor-pointer rounded-sm object-cover"
                    />
                  ),
                )}
              </div>

              <div className="w-full md:flex-[5]">
                <img
                  src={singleProduct?.data?.images[selectedImg]}
                  alt="img4"
                  className=" w-full rounded-sm object-cover  xxs:h-[300px] md:h-[400px]"
                />
              </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div className="mt-10 w-full lg:m-0 lg:w-[calc(50%_-_30px)]">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold capitalize text-zinc-800 md:text-2xl">
                  {singleProduct?.data?.information?.productName}
                </h2>
                <span className="text-lg font-medium text-zinc-800 text-opacity-80 lg:text-xl">
                  ₦{" "}
                  {singleProduct?.data?.pricing?.productPrice.toLocaleString()}
                </span>
              </div>
              <RatingStars
                maxRating={5}
                iconSize={32}
                defaultRating={isRated?.rating?.rating || 0}
                canRate={rated ? false : true}
                onSetRating={handleRatingChange}
              />
              {/* FORM */}
              <div className="relative mt-8 w-full">
                <span
                  onClick={() => setRated(false)}
                  className={`absolute right-0 cursor-pointer text-right text-lg italic tracking-wide underline hover:text-green-700 ${rated ? "block" : "hidden"}`}
                >
                  Edit
                </span>
                <form id="rating" onSubmit={initiateCreateRating}>
                  <label htmlFor="name" className="mb-6 block w-full">
                    <span className="mb-2 inline-block text-sm font-normal text-zinc-800">
                      Your Name
                    </span>
                    <CustomSelect
                      selectedOption={
                        rated
                          ? { value: `${_name}`, label: `${_name}` }
                          : userName
                      }
                      setSelectOption={setuserName}
                      placeholder={"-Choose an option-"}
                      options={user || []}
                      isDisabled={rated ? true : false}
                    />
                  </label>
                  <label htmlFor="review" className="block w-full">
                    <span className="mb-2 inline-block text-sm font-normal text-zinc-800">
                      Detailed Review
                    </span>
                    <textarea
                      name="review"
                      id="review"
                      disabled={rated ? true : false}
                      defaultValue={isRated?.rating.comment || ""}
                      className={`form-textarea h-[120px] w-full resize-none rounded border border-zinc-300 px-4 py-3 pt-4 text-sm font-normal text-zinc-800 focus:border-green-500 focus:shadow-none focus:ring-green-500 ${rated ? "bg-[#f2f2f2]" : "opacity-100"}`}
                      placeholder="Type here"
                      onChange={(e) => setRatingComment(e.target.value)}
                    ></textarea>
                  </label>
                  <div className="mt-8 flex justify-center gap-3 lg:justify-end">
                    <button
                      onClick={() => navigate(-1)}
                      className="inline-flex items-start justify-start rounded border border-[#a10] bg-white px-8 py-3 text-sm font-semibold text-[#a10]"
                    >
                      Cancel
                    </button>
                    <button
                      // onClick={initiateCreateRating}
                      className="inline-flex items-center justify-center rounded bg-green-700 py-3 px-8 text-sm font-semibold text-white"
                      type="submit"
                    >
                      {loading ? (
                        <svg
                          className="h-5 w-5 animate-spin  text-white"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            fill="white"
                          />
                          <path
                            d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                            fill="white"
                          />
                        </svg>
                      ) : isRated?.message === "Rating found" ? (
                        "Update"
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <RatingSuccess modal={modal} setModal={setModal} />
      </section>
    </AppLayout>
  );
};

export default RateReview;

// const RatingStar = ({ maxRating }: any) => {
//   const [rating, setRating] = useState<number>(0);

//   const handleStarClick = (value: number) => {
//     setRating(value);
//   };

//   return (
//     <div className="flex gap-1 mt-3">
//       {Array.from({ length: maxRating }, (_: any, i: any) => (
//         <BsStar
//           size={24}
//           key={i}
//           className={`cursor-pointer lg:w-8 lg:h-8 ${
//             i < rating ? "fill-orange-500" : "fill-neutral-500"
//           }`}
//           onClick={() => handleStarClick(i + 1)}
//         />
//       ))}
//     </div>
//   );
// };
