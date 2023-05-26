import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import AffiPageImg from "../../src/assets/images/AffiPageImg.png";
import PublicMktImg from "../../src/assets/images/PublicMktImg.png";

import { Link } from "react-router-dom";

const AffiliatePage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <>
      <NavBar />

      <nav className="mb-20">
        <NavBar />
      </nav>
      <div className="mb-10">
        <div className=" xxs:flex flex-col md:flex-col md:flex md:items-center md:justify-center items-center justify-center h-[350px] w-full relative bg-gradient-to-r from-slate-500 to to bg-slate-600">
          <img
            src={AffiPageImg}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className=" absolute text-center">
            <h1 className="xxs:text-2xl text-white font-semibold my-7 md:text-[40px] leading-[47px]">
              Become a Porker Hut Partner
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="  mt-12 text-[20px]">
          <h1 className="text-center tracking-wide text-[40px] leading-[47px] font-semibold mb-4 text-[#333]">
            Terms of Services
            <div className=" xxs:w-20 h-2  w-20 bg-[#197B30] m-auto"></div>
          </h1>
          <p className=" p-4 md:px-28 text-justify font-normal leading-[19px] text-[#333333] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Vel ac velit pretium mi elit
            in eu massa nisi. Auctor imperdiet magna viverra dignissim.
            Consectetur at quisque pharetra laoreet varius eget. Phasellus
            imperdiet non laoreet bibendum orci. Fames elementum tristique
            laoreet morbi eu aliquet sed quam et. Consectetur volutpat tristique
            enim orci ut eu libero. Fusce placerat nec sed quisque placerat
            scelerisque tortor a. Nullam vel id elit id suspendisse quis et
            varius. Integer id accumsan varius sit et nullam donec malesuada.
            Feugiat dui aliquet lacus auctor morbi cras orci. Molestie non diam
            nibh hac dictum proin elementum nulla. Turpis tincidunt donec sapien
            odio. Dolor sem lectus scelerisque in interdum feugiat nibh gravida
            nisl.
          </p>
        </div>
      </div>

      <div className="w-full xxs:block md:flex justify-center py-5 md:px-16 xxs:px-2">
        <div className="md:w-1/2 xxs:w-full">
          <h1 className="xxs:block md:hidden text-2xl font-medium text-[ #333333] mb-8  text-left">
            About Marketplace
          </h1>
          <div className=" ">
            <img
              // className="md:ml-10 flex-1 h-full w-full p-4"
              src={PublicMktImg}
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div className="md:w-1/2 xxs:w-full  md:px-3">
          <div className=" w-full">
            <h1 className="md:block xxs:hidden text-[24px] leading-[28px] font-medium text-[ #333333]  text-center">
              About Marketplace
            </h1>
            <div className="  w-full">
              <p className="xxs:py-4 md:p-4 text-[#797979] text-[16px] leading-[24px] font-normal tracking-normal ">
                The marketplace is going first to our farmer’s whitelist. In
                order to guarantee sales/distribution for farmers, not all
                registered accounts will be activated immediately. However,
                activation of account depends on:
              </p>
              <ul className="space-y-3 list-disc text-[#797979]  xxs:px-4 md:px-0 text-sm md:ml-10 xxs:ml-3">
                <li className="text-[16px] leading-[24px] font-normal">
                  The location of the farmer
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  The completion of our vetting process and procedure
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  Type of produce
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  Business information
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  Quality of product
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  Image quality{" "}
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  Product pricing
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  Brand of product
                </li>
                <li className="text-[16px] leading-[24px] font-normal">
                  Quantity of product{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <div className=" md:my-4">
          <h1 className="text-xl md:text-[58px] leading-[68px]  text-center font-bold  tracking-wider">
            Become Our Partner Today
          </h1>
        </div>
        <div className=" grid md:grid-cols-3 xxs:gap-8 mt-10">
          <div className=" text-center  ">
            <span className=" text-[40px] leading-[47px] font-bold">1</span>
            <h1 className=" xxs:text-lg text-[#333] my-2 font-medium leading-[38px] md:text-[32px] ">
              Sell on Porker Hut
            </h1>
            <p className=" xxs:text-lg text-[#333] text-[16px] leading-[19px] font-semibold">
              <Link
                to="/create-account"
                className="underline text-[#197B30] text-[16px] leading-[19px] font-semibold"
              >
                Sign up here
              </Link>{" "}
              {"  "}
              to become a Porker Hut partner
            </p>
          </div>
          <div className=" text-center  ">
            <span className="text-[40px] leading-[47px] font-bold">2</span>
            <h1 className=" text-lg text-[#333] my-2 font-medium leading-[38px] md:text-[32px]">
              Become a Vet Partner
            </h1>
            <p className="text-[16px] leading-[19px] font-semibold text-[#333] ">
              <Link
                to="/affiliate/vet-partner-account"
                className="underline text-[#197B30] text-[16px] leading-[19px] font-semibold"
              >
                Sign up here
              </Link>{" "}
              {"  "}
              to Join our Vet Team
            </p>
          </div>
          <div className=" text-center  ">
            <span className="text-[40px] leading-[47px] font-bold ">3</span>
            <h1 className=" xxs:text-lg text-[#333] my-2 font-medium leading-[38px] md:text-[32px]">
              Become Logistics Service Partner
            </h1>
            <p className="text-[16px] leading-[19px] font-semibold text-[#333] ">
              <Link
                to="/affiliate/logistics-partner-account"
                className="underline text-[#197B30]"
              >
                Sign up here
              </Link>{" "}
              {"  "}
              to Partner with Us
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AffiliatePage;
