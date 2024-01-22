import Footer from "../components/footer-component/Footer";
import NavBar from "../components/nav-component/NavBar";
import Product from "../assets/images/productimg1.png";
import { BsStar } from "react-icons/bs";
import { useState } from "react";
import {
  useCreateRating,
  useGetSingleProduct,
} from "../services/hooks/users/products";
import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../components/utility/AppLayout";
import ProductsBreadCrumbs from "../components/story-components/ProductsBreadCrumbs";
import CustomSelect from "../components/utility/CustomSelect";
import { SelectOptionType } from "./VetPartnerMobileFormA";
import RatingWidget from "../components/RatingWidget";

const RateReview = () => {
  const { id } = useParams();
  // @ts-ignore
  const { data: singleProduct } = useGetSingleProduct(id);
  const [selectedImg, setSelectedImg] = useState(0);
  const [ratingNum, setRatingNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ratingComment, setRatingComment] = useState("");
  const [userName, setuserName] = useState<SelectOptionType>(null);
  const userdata = JSON.parse(localStorage.getItem("user") as string);
  const _name = `${userdata?.firstName} ${userdata?.lastName}`;
  const createRating = useCreateRating();
const navigate = useNavigate()
  console.log(_name, "_name");
  console.log(singleProduct);
  console.log(userdata);

  const initiateCreateRating = () => {
    setLoading(true);
    createRating
      .mutateAsync({
        productId: id as string,
        userId: userdata._id,
        ratingValue: ratingNum,
        comment: ratingComment,
      })
      .then(() => {
            setLoading(false);
      })
      .catch(() => {
         setLoading(false);
      });
  };

  const user = [
    { id: 1, value: "Anonymous", label: "Anonymous" },
    userdata && { id: 2, value: `${_name}`, label: `${_name}` },
  ];
  return (
    <AppLayout>
      <section className="max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px] container flex-col justify-[start_!important]  px-4 mx-auto pt-24 py-16">
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
        <h1 className="relative text-zinc-800 w-full text-xl font-semibold flex flex-col gap-2 mb-10 text-center mx-auto justify-center items-center  after:w-[100px] after:inline-block after:h-1.5 after:bg-green-700  after:mt-2 md:text-[32px]">
          Rate & Review
        </h1>
        <div className="w-full flex justify-between items-start">
          {/* PRODUCT IMAGES */}
          {/* <div className="w-full mb-8 md:flex md:flex-row-reverse md:gap-4 md:w-10/12 md:mx-auto lg:items-start lg:w-1/2 lg:m-0 ">
            <div className="w-full mb-4 lg:mb-0 lg:h-[427px]">
              <img
                src={Product}
                className="w-full h-[340px] object-cover object-bottom rounded overflow-hidden lg:h-full"
                alt="product-thumbnail"
              />
            </div>
            <div className="flex justify-center items-center gap-4 md:flex-col">
              <img
                src={Product}
                className="w-[60px] h-[60px] object-cover lg:w-[100px] lg:h-[100px] rounded"
                alt="product-thumbnail"
              />
              <img
                src={Product}
                className="w-[60px] h-[60px] object-cover lg:w-[100px] lg:h-[100px] rounded"
                alt="product-thumbnail"
              />
              <img
                src={Product}
                className="w-[60px] h-[60px] object-cover lg:w-[100px] lg:h-[100px] rounded"
                alt="product-thumbnail"
              />
            </div>
          </div> */}

          <div className="w-full mb-8 md:flex md:flex-row md:gap-4 md:w-10/12 md:mx-auto lg:items-start lg:w-1/2 lg:m-0 ">
            <div className="md:flex-col md:justify-start xxs:flex xxs:items-center xxs:justify-center xxs:gap-3 xxs:mt-3 md:mt-0">
              {singleProduct?.data?.images.map((image: any, index: number) => (
                <img
                  src={image}
                  alt="ProductImg"
                  onClick={(e) => setSelectedImg(index)}
                  className="object-cover cursor-pointer w-[75px] h-20 rounded-sm"
                />
              ))}
            </div>

            <div className="md:flex-[5]">
              <img
                src={singleProduct?.data?.images[selectedImg]}
                alt="img4"
                className=" object-cover md:h-[400px] xxs:h-[300px]  w-full rounded-sm"
              />
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="w-full md:w-10/12 md:mx-auto lg:w-[calc(50%_-_30px)] lg:m-0">
            <div className="flex justify-between">
              <h2 className="text-zinc-800 text-lg font-semibold md:text-2xl">
                {singleProduct?.data?.information?.productName}
              </h2>
              <span className="text-zinc-800 text-opacity-80 text-lg font-medium lg:text-xl">
                ₦ {singleProduct?.data?.pricing?.productPrice}
              </span>
            </div>
            <RatingStar maxRating={5} />
            <RatingWidget
              onChange={(value) => console.log(value)}
              defaultValue={0}
            />
            {/* FORM */}
            <div className="w-full mt-8">
              <form id="rating">
                <label htmlFor="name" className="w-full block mb-6">
                  <span className="text-zinc-800 text-sm font-normal mb-2 inline-block">
                    Your Name
                  </span>
                  <CustomSelect
                    selectedOption={userName}
                    setSelectOption={setuserName}
                    placeholder={"-Choose an option-"}
                    options={user || []}
                  />
                </label>
                <label htmlFor="review" className="w-full block">
                  <span className="text-zinc-800 text-sm font-normal mb-2 inline-block">
                    Detailed Review
                  </span>
                  <textarea
                    name="review"
                    id="review"
                    className="form-textarea rounded border border-zinc-300 text-zinc-800 text-sm font-normal w-full h-[120px] resize-none px-4 py-3 pt-4"
                    placeholder="Type here"
                    onChange={(e) => setRatingComment(e.target.value)}
                  ></textarea>
                </label>
                <div className="mt-8 flex justify-center gap-3 lg:justify-end">
                  <button
                    onClick={() => navigate(-1)}
                    className="text-[#a10] text-sm font-semibold px-8 py-3 bg-white rounded border border-[#a10] inline-flex justify-start items-start"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={initiateCreateRating}
                    className="py-3 px-8 text-white text-sm font-semibold bg-green-700 rounded justify-center items-center inline-flex"
                    type="submit"
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5  text-white"
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
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default RateReview;

const RatingStar = ({ maxRating }: any) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex gap-1 mt-3">
      {Array.from({ length: maxRating }, (_: any, i: any) => (
        <BsStar
          size={24}
          key={i}
          className={`cursor-pointer lg:w-8 lg:h-8 ${
            i < rating ? "fill-orange-500" : "fill-neutral-500"
          }`}
          onClick={() => handleStarClick(i + 1)}
        />
      ))}
    </div>
  );
};
