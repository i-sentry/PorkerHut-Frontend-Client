import { NavLink } from "react-router-dom";
import React, { useState } from "react";
const ethicalPic = require("../../assets/images/Ethical.png");
const qualityPic = require("../../assets/images/sustainability.png");
const transparencyPic = require("../../assets/images/tranparency.png");

const Story = () => {
  const community =
    "At Porkerhut, we are dedicated to supporting local farmers and communities by sourcing pork from them and educating our customers about our products and the pork industry. We provide information on our website blog page and through our customer service team. We strive to provide our customers with the best pork products on the market.";

  const transparency = ` We pride ourselves on transparency and traceability. We understand
            the importance of knowing where your food comes from and how it was
            produced.  We provide comprehensive information
            about the farms that supply our pork products, giving our customers
            peace of mind that they are making responsible and informed
            purchases.`;
  const sustainability =
    " Sustainability is a vital part of our business ethos. We are dedicated to raising our pigs using humane and environmentally-friendly practices, ensuring the longevity of our operations and the world we live in. All of our pork products are responsibly sourced from farms that employ sustainable farming methods, ensuring that we play our part in creating a sustainable future.";

  return (
    <div className=" xxs:pb-4  lg:mt-10">
      <div className="mb-2 flex items-center justify-center xxs:mt-4 lg:mx-10">
        <h1 className="font-medium text-[#333333] xxs:text-[20px] xxs:leading-[23px] md:text-[40px] lg:text-[40px] lg:leading-[47px]">
          How We Are Different
        </h1>
      </div>
      <div className="mb-16 flex items-center justify-center">
        <div className=" block h-1.5 w-24 bg-[#197B30]"></div>
      </div>
      <div className="grid px-[4%] xxs:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div
          className="flex h-[380px] flex-col items-start justify-end rounded p-4 md:h-[480px]"
          style={{
            backgroundImage: `url(${ethicalPic})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1 className="text-[24px] font-medium leading-[28px] text-[#fff]">
              Sustainability
            </h1>
            <TruncatedText text={sustainability} maxLength={120} />
          </div>
        </div>
        <div
          className="flex h-[380px] flex-col items-start justify-end rounded p-4 md:h-[480px]"
          style={{
            backgroundImage: `url(${qualityPic})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[24px] font-medium leading-[28px] text-[#fff] ">
            Transparency
          </h1>
          <TruncatedText text={transparency} maxLength={120} />
        </div>
        <div
          className="flex h-[380px] flex-col items-start justify-end rounded p-4 md:h-[480px]"
          style={{
            backgroundImage: `url(${transparencyPic})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[24px] font-medium leading-[28px] text-[#fff] ">
            Community
          </h1>

          <TruncatedText text={community} maxLength={120} />
        </div>
      </div>

      <div className="flex items-center justify-center xxs:my-10 lg:my-10 lg:mb-0">
        <NavLink
          to="/about-us"
          className="rounded bg-[#197B30] py-3 px-7 text-[16px] leading-[24px] text-[#fff] shadow-md"
        >
          Read Our Story
        </NavLink>
      </div>
    </div>
  );
};

export default Story;

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

export const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxLength,
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const truncatedText = isTruncated
    ? text.slice(0, maxLength).trim() + "..."
    : text;

  const toggleTruncated = () => setIsTruncated(!isTruncated);

  return (
    <div className="">
      <p className="pt-2 text-[16px]  font-normal leading-[24px] text-[#E6E6E6] ">
        {truncatedText}
        {text.length > maxLength && (
          <span
            onClick={toggleTruncated}
            className="cursor-pointer text-sm text-[#7ff39a] hover:opacity-100"
          >
            {" "}
            {isTruncated ? " See More " : ""}
          </span>
        )}
      </p>
    </div>
  );
};
