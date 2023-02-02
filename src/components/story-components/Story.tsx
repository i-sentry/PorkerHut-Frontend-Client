import React from "react";
const ethicalPic = require("../../assets/images/Ethical.jpg");
const qualityPic = require("../../assets/images/Quality.jpg");
const transparencyPic = require("../../assets/images/Transparency.jpg");

const Story = () => {
  return (
    <div className="md:h-screen md:mt-2">
      <div className="flex justify-center items-center md:mx-10 xxs:mt-4">
        <h1 className="font-semibold text-2xl">How We Are Different</h1>
      </div>
      <div className="flex items-center justify-center mb-5">
        <div className=" block h-1 w-20 bg-[#197B30]"></div>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-10 md:px-10 xxs:px-3">
        <div className="xxs:pb-3">
          <img src={ethicalPic} alt="" />
        </div>
        <div className="xxs:pb-3">
          <img src={qualityPic} alt="" />
        </div>
        <div className="xxs:pb-3">
          <img src={transparencyPic} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-10 xxs:mt-4 xxs:mb-6">
        <a href="" className="py-3 px-6 bg-[#197B30] text-white rounded">
          Read Our Story
        </a>
      </div>
    </div>
  );
};

export default Story;
