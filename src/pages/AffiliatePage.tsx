import React from "react";
import NavBar from "../components/nav-component/NavBar";
import AffiPageImg from "../../src/assets/images/AffiPageImg.png";
import PublicMktImg from "../../src/assets/images/PublicMktImg.png";
import Footer from "../components/footer-component/Footer";

import { BsDot } from "react-icons/bs";

const AffliatePage = () => {
  return (
    <>
      <nav className="mb-20">
        <NavBar />
      </nav>
      <div className="mb-10">
        <div className="  xxs:flex flex-col items-center justify-center h-[300px] w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600 md:justify-center md:flex md:flex-col align-middle">
          <img
            src={AffiPageImg}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className=" md:items-center md:pt-10 absolute">
            <h1 className=" ml-2 font-medium text-[24px] md:text-[40px] text-white  ">
              Become a Porker Hut Partner
            </h1>
            <div className="md:flex md:items-center md:justify-center xxs:ml-8 md:pl-0 md:ml-24">
              <button className=" mt-3 m-auto border border-[#479559] md:text-[24px] text-[14px] md:py-4 md:px-12 py-4 px-[45px] rounded-sm text-[#fff] bg-[#197B30] hover:bg-white hover:text-[#479559] md:inline-block select-none tracking-wider font-medium whitespace-nowrap ml-12">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center mt-12 text-[20px]">
        <h1 className=" text-[20px] mb-4 font-bold text-[#333]">
          Terms of Service
          <div className=" xxs:w-20 h-1 w-10 bg-[#197B30] m-auto"></div>
        </h1>
        <p className=" p-4 md:mx-20">
          Lorem ipsum dolor sit amet consectetur. Vel ac velit pretium mi elit
          in eu massa nisi. Auctor imperdiet magna viverra dignissim.
          Consectetur at quisque pharetra laoreet varius eget. Phasellus
          imperdiet non laoreet bibendum orci. Fames elementum tristique laoreet
          morbi eu aliquet sed quam et. Consectetur volutpat tristique enim orci
          ut eu libero. Fusce placerat nec sed quisque placerat scelerisque
          tortor a. Nullam vel id elit id suspendisse quis et varius. Integer id
          accumsan varius sit et nullam donec malesuada. Feugiat dui aliquet
          lacus auctor morbi cras orci. Molestie non diam nibh hac dictum proin
          elementum nulla. Turpis tincidunt donec sapien odio. Dolor sem lectus
          scelerisque in interdum feugiat nibh gravida nisl. Ligula dui cras
          amet morbi massa. Aenean neque imperdiet ut diam ipsum diam tellus.
          Quisque est gravida morbi massa at. Faucibus libero ut porttitor
          commodo dictum proin ac a molestie. Mauris luctus laoreet laoreet amet
          eget. Odio praesent et neque consectetur maecenas laoreet odio in.
          Nisl faucibus varius vitae integer sit amet sed. Massa egestas lorem
          quis platea a. Purus enim aliquam dui luctus ipsum cursus amet platea
          diam. At integer dictum velit in.
        </p>
      </div>

      <div className=" md:text-center">
        <h1 className=" text-[20px] mb-4 font-bold text-[#333] ml-4">
          About Marketplace
        </h1>
      </div>
      <div className=" mt-12 text-[20px] md:flex md:flex-1 gap-48 ">
        <div className=" p-2">
          <figure className=" ">
            <img
              className="object-cover h-full p-2 "
              src={PublicMktImg}
              alt=""
            />
          </figure>
        </div>

        <div>
          <div className=" hidden">
            
            <p>
              The marketplace is going first to our farmer’s waitlist. In order
              to guarantee sales/distribution for farmers, not all registered
              accounts will be activated immediately. However, activation of
              account depends on:
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
          <div className=" flex ml-6 items-center">
            <BsDot size={60} />
            <p className=" text-[#797979] text-[14px]">
              The location of the farmer
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className=" text-center text-[20px] font-bold my-12 text-[#333333] md:text-[58px]">
          Become a Partner Today
        </h1>
      </div>
      <div className="  text-center w-full grid grid-rows-3 md:grid-cols-3">
        <div className="py-5">
          <h1 className=" font-bold text-4xl md:text-[58px]">1</h1>
          <p className=" text-[18px] text-[#333333] font-medium py-3 md:text-[40px]">
            Join the Program
          </p>
          <p className=" text-[16px]">
            <a href="/" className=" text-[#479559]">
              Sign up here
            </a>{" "}
            to become a Porker Hut partner
          </p>
        </div>
        <div className=" py-5">
          <h1 className=" font-bold text-4xl text-[#333333] md:text-[58px]">
            2
          </h1>
          <p className=" text-[18px] text-[#333333] font-medium py-3 md:text-[40px]">
            Reach
          </p>
          <p className=" text-[16px]">
            Market your product to millions of vistors every month.
          </p>
        </div>
        <div className="py-5">
          <h1 className="font-bold text-4xl text-[#333333] md:text-[58px]">
            3
          </h1>
          <p className="text-[18px] text-[#333333] font-medium py-3 md:text-[40px]">
            Make Money
          </p>
          <p className=" text-[16px]">
            No maintenance fees, no listing fees, just standard commissions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AffliatePage;
