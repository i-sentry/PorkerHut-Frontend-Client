import React from "react";
import PorkerLogo from "../../assets/images/PorkerLogo.svg";


const Footer = () => {
  return (
    <div className="bg-[#333333] mt-10">
      <div className="flex flex-col max-md:px-10 max-md:mx-0 mx-20 ">
        <div className="bg-[#F4F4F4] md:mt-5  rounded-md mb-2 p-6 mt-10">
          <div className="wrapper flex lg:justify-between items-center max-sm:flex-col max-sm:overflow-hidden max-md:flex-col">
            <span className="font-semibold md:text-2xl sm:text-base  md:mb-2">
              Subscribe to Our Newsletter
            </span>

            <form className="max-md:items-center xxs:mt-3 md:mt-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 border-solid border border-[#D9D9D9] border-r-0 w-96 rounded-l outline-0 border-inherit max-md:w-full max-md:border-solid max-md:border-2 max-md:rounded-r-md max-md:mb-2 placeholder:text-[#A2A2A2] placeholder:text-sm"
              />
              <button
                type="submit"
                className="p-2 z-50 text-white bg-[#197B30] w-32 rounded border-hidden items-center max-md:rounded-l-md tracking-wider select-none max-sm:w-full max-sm:rounded-md hover:bg-green-900"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="md:flex md:justify-between gap-12 mt-7 mb-6 max-md:flex-wrap">
          <div className="flex flex-col gap-3 text-justify">
            <div className="flex items-center gap-1 ">
              <img src={PorkerLogo} alt="" />
              <div className="flex flex-col md:mx-0">
                <p className="title text-xl  font-semibold text text-left  text-[#FFFFFF] font-Roboto-slab">
                  Porker Hut
                </p>

             
              </div>
            </div>

            <div>
              <p className="text-[#D9D9D9] font-normal text-sm text-left md:leading-6 xxs:leading-8">
                An Agro-Commerce E-Commerce platform where <br /> you can put
                your products and get customers <br /> from you at no extra cost
              </p>
            </div>
          </div>
          <div className=" xxs:pt-10 md:pt-0 xxs:flex-col">
            <div className="flex-1 flex flex-col md:gap-3 text-justify xxs:gap-5">
              <h1 className="text-xl font-semibold not-italic text-[#FFFFFF] font-Roboto">
                Company
              </h1>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Affiliate
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                About
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Blog
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Contact Us
              </span>
            </div>
            <div className="md:hidden xxs:flex-1 xxs:flex-col xxs:flex gap-2 xxs:mt-5 xxs:py-5 xxs:gap-5">
              <h1 className="text-xl font-semibold not-italic text-[#FFFFFF]">
                Products
              </h1>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Porks
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Animal Feeds
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Livestocks
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Agro Services
              </span>
            </div>
          </div>
          <div className=" md:flex xxs:hidden flex-col gap-3 text-justify">
            <h1 className="text-xl font-semibold not-italic text-[#FFFFFF]">
              Products
            </h1>
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Porks
            </span>
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Animal Feeds
            </span>
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Livestocks
            </span>
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Agro Services
            </span>
          </div>
          <div className=" md:flex xxs:hidden flex-col gap-3 text-justify">
            <div className="text-xl md:text-left xxs:text-center flex flex-col xxs:mx-auto md:mx-0 font-semibold not-italic text-[#FFFFFF]">
              <p>Social Media</p>
              <span className="md:hidden xxs:block h-1 w-10 bg-[#197B30] self-center "></span>
            </div>

            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Facebook
            </span>
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Instagram
            </span>
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Twitter
            </span>
            <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              LinkedIn
            </span>
          </div>
          <div className="md:hidden">
            <div className="text-xl md:text-left xxs:text-center flex flex-col xxs:mx-auto md:mx-0 font-semibold not-italic text-[#FFFFFF]">
              <p>Social Media</p>
              <span className="md:hidden xxs:block h-1 w-10 bg-[#197B30] self-center "></span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Facebook
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Instagram
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                Twitter
              </span>
              <span className="font-normal text-sm text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
        <hr className="xxs:hidden md:block" />

        <div className="md:flex justify-between items-center md:mt-5">
          <div className="md:flex xxs:flex xxs:gap-8 xxs:items-center md:items-center md:gap-10 mb-6 xxs:mb-2 ">
            <span className="font-normal md:text-sm text-xs text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30] ">
              Legal Notice
            </span>
            <span className="font-normal md:text-sm text-xs text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Privacy Policy{" "}
            </span>
            <span className="font-normal md:text-sm text-xs text-[#D9D9D9] font-Roboto cursor-pointer hover:text-[#197b30]">
              Terms & Conditions
            </span>
          </div>
          <hr className=" xxs:w-full md:hidden" />

          <div className="max-md:mt-2 xxs:flex xxs:justify-center xxs:items-center xxs:mb-8 xxs:mt-4">
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
