import React from "react";
let Logo = require("../../images/logo.png");

const Footer = () => {
  return (
    <div className="bg-[#333333] h-100">
      <div className="flex flex-col max-md:px-10 max-md:mx-0 mx-20">
        <div className="bg-[#F4F4F4] max-md:mt-5  rounded-md mb-2 p-8 mt-10">
          <div className="wrapper flex lg:justify-between items-center max-sm:flex-col max-sm:overflow-hidden max-md:flex-col">
            <span className="font-semibold text-2xl max-md:mb-2">
              Subscribe to Our Newsletter
            </span>

            <form className="max-md:items-center ">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 border-solid border-2 border-[#D9D9D9] border-r-0 w-96 rounded-l-md outline-0 border-inherit max-md:w-full max-md:border-solid max-md:border-2 max-md:rounded-r-md max-md:mb-2 placeholder:text-[#A2A2A2] placeholder:text-sm"
              />
              <button type="submit" className="p-2 text-white bg-[#197B30] w-32 rounded-md border-hidden items-center max-md:rounded-l-md tracking-wider select-none max-sm:w-full max-sm:rounded-md hover:bg-green-900">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between gap-12 mt-7 mb-6 max-md:flex-wrap">
          <div className="items flex-1 flex flex-col gap-3 text-justify">
            <div className="flex items-center gap-1">
              <img src={Logo} alt="" />

              <span className="text-xl font-semibold not-italic text-[#FFFFFF]">
                Porker Hut
              </span>
            </div>
            <div>
              <p className="text-[#D9D9D9] font-normal text-sm ">
                An Agro-Commerce E-Commerce platform where you can put your
                products and get customers from you at no extra cost
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 text-justify">
            <h1 className="text-xl font-semibold not-italic text-[#FFFFFF] font-Roboto">
              Company
            </h1>
            <span className="primary-span">Affiliate</span>
            <span className="primary-span">About</span>
            <span className="primary-span">Blog</span>
            <span className="primary-span">Contact Us</span>
          </div>
          <div className="flex-1 flex flex-col gap-3 text-justify">
            <h1 className="text-xl font-semibold not-italic text-[#FFFFFF]">
              Products
            </h1>
            <span className="primary-span">Porks</span>
            <span className="primary-span">Animal Feeds</span>
            <span className="primary-span">Livestocks</span>
            <span className="primary-span">Agro Services</span>
          </div>
          <div className="flex-1 flex flex-col gap-3 text-justify">
            <h1 className="text-xl font-semibold not-italic text-[#FFFFFF]">
              Social Media
            </h1>
            <span className="primary-span">Facebook</span>
            <span className="primary-span">Instagram</span>
            <span className="primary-span">Twitter</span>
            <span className="primary-span">LinkedIn</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-2 mb-4 max-md:flex-wrap">
          <div className="flex items-center gap-10">
            <span className="primary-span">Legal Notice</span>
            <span className="primary-span">Privacy Policy </span>
            <span className="primary-span">Terms & Conditions</span>
          </div>
          <div className="max-md:mt-2">
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto">
              &copy; {new Date().getFullYear()}. All rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
