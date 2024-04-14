import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let backgroundweb = require("../../assets/side-view.jpg");

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <section className=" bg-[#F4F4F4]   xxs:mb-0 xxs:p-[4%] lg:mb-20   lg:w-full lg:flex-wrap lg:overflow-hidden lg:p-0">
      <div className=" flex items-center justify-center xxs:flex-col xxs:py-0 lg:flex-row lg:py-16">
        <div className="z-10 hidden max-h-[400px] bg-[#FFFFFF] py-10 px-10 xxs:mr-0 xxs:w-full lg:mr-[-100px] lg:block lg:w-[45%]">
          <h1 className="pb-2 text-[40px] font-medium  leading-[47px]">
            Agro Services
          </h1>
          <div className="h-1.5 w-10 bg-[#197B30] xxs:w-20"></div>
          <p className="mb-4 py-5 text-[14px] font-normal leading-[24px] tracking-tighter text-[#797979]">
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
            className="rounded bg-[#197B30] py-3 px-5 text-[14px] font-medium leading-[24px] text-white"
          >
            Learn More
          </Link>
        </div>

        <div className="relative block xxs:w-full lg:w-[55%]">
          <img
            src={backgroundweb}
            alt=""
            className="w-full bg-cover bg-center object-cover"
          />

          <div className=" bg mx-5 -translate-y-24 bg-white  p-8 xxs:block lg:hidden">
            <h1 className="text-[18px] font-medium leading-[21px] ">
              Agro Services
            </h1>
            <div className="my-3 h-1.5 w-10 bg-[#197B30] xxs:w-20"></div>
            <p className="pb-10 leading-[24px] text-[#797979] ">
              Agro services play a crucial role in pork meat production and
              supply chain, which involves farrow-to-finish operations,
              genetics, feed formulation, animal health, and waste management
              services. These services are essential in delivering high-quality,
              sustainable, and healthy pork meat that meets the needs and
              preferences of customers.
            </p>

            <Link
              to="/services/agro-services"
              className="rounded bg-[#197B30] py-3 px-6 text-[14px] font-medium leading-[24px] text-white shadow"
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
