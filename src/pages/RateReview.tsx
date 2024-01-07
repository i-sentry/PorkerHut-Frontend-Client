import Footer from "../components/footer-component/Footer";
import NavBar from "../components/nav-component/NavBar";
import Product from "../assets/images/productimg1.png";
import { BsStar } from "react-icons/bs";
import { useState } from "react";

const RateReview = () => {
  return (
    <>
      <NavBar />
      <section className="max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px] container flex-col justify-[start_!important]  px-4 mx-auto pt-24 py-16">
        {/* PAGE TITLE */}
        <h1 className="relative text-zinc-800 w-full text-xl font-semibold flex flex-col gap-2 mb-10 text-center mx-auto justify-center items-center  after:w-[100px] after:inline-block after:h-1.5 after:bg-green-700  after:mt-2 md:text-[32px]">
          Rate & Review
        </h1>
        <div className="w-full lg:flex lg:justify-between lg:items-start">
          {/* PRODUCT IMAGES */}
          <div className="w-full mb-8 md:flex md:flex-row-reverse md:gap-4 md:w-10/12 md:mx-auto lg:items-start lg:w-1/2 lg:m-0 ">
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
          </div>

          {/* PRODUCT DETAILS */}
          <div className="w-full md:w-10/12 md:mx-auto lg:w-[calc(50%_-_30px)] lg:m-0">
            <div className="flex justify-between">
              <h2 className="text-zinc-800 text-lg font-semibold md:text-2xl">
                100% Healthy - Fed Pork Lap
              </h2>
              <span className="text-zinc-800 text-opacity-80 text-lg font-medium lg:text-xl">
                ₦30,000
              </span>
            </div>
            <RatingStar maxRating={5} />
            {/* FORM */}
            <div className="w-full mt-8">
              <form id="rating">
                <label htmlFor="name" className="w-full block mb-6">
                  <span className="text-zinc-800 text-sm font-normal mb-2 inline-block">
                    Your Name
                  </span>
                  <select
                    name="name"
                    id="name"
                    className="form-select rounded border border-zinc-300 text-zinc-800 text-sm font-normal w-full px-4 py-3"
                  >
                    <option value="name">Williams Nado</option>
                    <option value="anonymous">Anonymous</option>
                  </select>
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
                  ></textarea>
                </label>
                <div className="mt-8 flex justify-center gap-3 lg:justify-end">
                  <button className="text-red-700 text-sm font-semibold px-8 py-3 bg-white rounded border border-red-700 inline-flex justify-start items-start">
                    Cancel
                  </button>
                  <button
                    className="py-3 px-8 text-white text-sm font-semibold bg-green-700 rounded justify-center items-center inline-flex"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
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
