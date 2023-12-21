import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let backgroundweb = require("../../assets/images/Agro-web.jpg");

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);
  
  return (
    <section className=" bg-[#F4F4F4]   lg:w-full lg:flex-wrap lg:overflow-hidden   lg:mb-20 xxs:mb-0 xxs:p-[4%] lg:p-0">
      <div className=" flex xxs:flex-col lg:flex-row items-center justify-center xxs:py-0 lg:py-16">
        <div className="hidden lg:block lg:w-[45%] xxs:w-full bg-[#FFFFFF] py-10 px-10 z-10 lg:mr-[-100px] xxs:mr-0 max-h-[400px]">
          <h1 className="font-medium text-[40px] leading-[47px]  pb-2">
            Agro Services
          </h1>
          <div className="xxs:w-20 h-1.5 w-10 bg-[#197B30]"></div>
          <p className="py-5 text-justify text-[#797979] tracking-tighter font-normal text-[14px] leading-[24px] mb-4">
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
            className="py-3 px-5 bg-[#197B30] text-[14px] leading-[24px] rounded text-white font-medium"
          >
            Learn More
          </Link>
        </div>

        <div className="block lg:w-[55%] xxs:w-full relative">
          <img
            src={backgroundweb}
            alt=""
            className="bg-cover bg-center object-cover w-full"
          />

            <div className=" mx-5 lg:hidden xxs:block -translate-y-24  p-8 bg-white bg">
              <h1 className="font-medium text-[18px] leading-[21px] ">
                Agro Services
              </h1>
              <div className="xxs:w-20 h-1.5 w-10 bg-[#197B30] my-3"></div>
              <p className="pb-10 text-justify text-[#797979] leading-[24px] ">
                Agro services play a crucial role in pork meat production and
                supply chain, which involves farrow-to-finish operations,
                genetics, feed formulation, animal health, and waste management
                services. These services are essential in delivering
                high-quality, sustainable, and healthy pork meat that meets the
                needs and preferences of customers.
              </p>

              <Link
                to="/services/agro-services"
                className="py-3 px-6 bg-[#197B30] rounded text-white shadow text-[14px] leading-[24px] font-medium"
              >
                Learn More
              </Link>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
