import React from "react";
import { Link } from "react-router-dom";
let backgroundMobile = require("../../assets/images/Agro-mobile.jpg");
let backgroundweb = require("../../assets/images/Agro-web.jpg");

const Services = () => {
  return (
    <section className=" bg-[#F4F4F4] xxs:h- md:w-full md:flex-wrap md:overflow-hidden   md:mb-20 xxs:mb-10">
      <div className="xxs:m-4 xxs:h-screen md:hidden">
        <div className=" md:w-2/4 xl:w-2/4 md:h-[700px] my-4 xxs:pt-10">
          <img src={backgroundMobile} alt="" className="w-full h-full" />
        </div>

        <div className=" xxs:py-6 xxs:px-6 md:w-2/4 xs:h-7 md:max-h-[700px] md:py-10 md:px-12 xl:py-10 xl:px-12 bg-[#FFFFFF]  relative xxs:m-10 xxs:rounded-md xxs:mt-[-160px]">
          <h1 className="font-normal tracking-tight text-3xl">Agro Services</h1>
          <div className=" xxs:w-20 h-1 w-10 bg-[#197B30]"></div>
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          </p>
          <Link
            to="/services/agro-services"
            className="bg-[#197b30] py-4 px-6 my-4 text-white xxs:py-3 xxs:px-5 xxs:rounded xxs:text-sm xxs:font-normal"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className=" flex items-center justify-center my-0 md:py-10">
        <div className="xxs:hidden md:block w-[45%] bg-[#FFFFFF] py-10 px-10 z-10 mr-[-100px] max-h-[400px]">
          <h1 className="font-medium text-3xl pb-1">Agro Services</h1>
          <div className="xxs:w-20 h-1 w-10 bg-[#197B30]"></div>
          <p className="py-5 text-justify text-[#797979] tracking-tighter">
            Agro services play a crucial role in pork meat production and supply
            chain, which involves farrow-to-finish operations, genetics, feed
            formulation, animal health, and waste management services. These
            services are essential in delivering high-quality, sustainable, and
            healthy pork meat that meets the needs and preferences of customers.
            As a provider of agro services, we take pride in our commitment to
            animal welfare, nutrition, and sustainability, which ensures that
            our products not only taste great but also promote the health of our
            customers and the environment.
          </p>
          <Link
            to="/services/agro-services"
            className="py-3 px-5 bg-[#197B30] rounded text-white "
          >
            Learn More
          </Link>
        </div>

        <div className="xxs:hidden md:block w-[55%] ">
          <img src={backgroundweb} alt="" className="bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
};

export default Services;
