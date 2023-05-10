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
    <div className=" md:mt-10  xxs:pb-4">
      <div className="flex justify-center items-center md:mx-10 xxs:mt-4 mb-2">
        <h1 className="font-medium  md:text-[40px] md:leading-[47px] xxs:text-[20px] xxs:leading-[23px] text-[#333333]">
          How We Are Different
        </h1>
      </div>
      <div className="flex items-center justify-center mb-16">
        <div className=" block h-1.5 w-24 bg-[#197B30]"></div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-12 xxs:gap-5 md:px-14 xxs:px-3">
        <div
          className="p-4 flex flex-col items-start justify-end rounded"
          style={{
            backgroundImage: `url(${ethicalPic})`,
            height: "480px",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1 className="text-[#fff] font-medium text-[24px] leading-[28px] ">
              Sustainability
            </h1>
            <TruncatedText text={sustainability} maxLength={120} />
          </div>
        </div>
        <div
          className="p-4 flex flex-col items-start justify-end rounded"
          style={{
            backgroundImage: `url(${qualityPic})`,
            height: "480px",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[#fff] font-medium text-[24px] leading-[28px] ">
            Transparency
          </h1>
          <TruncatedText text={transparency} maxLength={120} />
        </div>
        <div
          className="p-4 flex flex-col items-start justify-end rounded"
          style={{
            backgroundImage: `url(${transparencyPic})`,
            height: "480px",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[#fff] font-medium text-[24px] leading-[28px] ">
            Community
          </h1>

          <TruncatedText text={community} maxLength={120} />
        </div>
      </div>

      <div className="flex justify-center items-center md:my-10 xxs:my-10 md:mb-0">
        <NavLink
          to="/about-us"
          className="py-3 px-7 bg-[#197B30] text-[#fff] rounded text-[16px] leading-[24px] shadow-md"
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
      <p className="text-[#E6E6E6] pt-2  leading-[24px] font-normal text-justify text-[16px] ">
        {truncatedText}
        {text.length > maxLength && (
          <span
            onClick={toggleTruncated}
            className="text-[#7ff39a] text-sm cursor-pointer hover:opacity-100"
          >
            {" "}
            {isTruncated ? " See More " : ""}
          </span>
        )}
      </p>
    </div>
  );
};
