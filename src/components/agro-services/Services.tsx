import React from "react";
import { Link } from "react-router-dom";
let backgroundMobile = require("../../assets/images/Agro-mobile.jpg");
let backgroundweb = require("../../assets/images/Agro-web.jpg");

const Services = () => {
  return (
    <section className=" bg-[#F4F4F4]  md:w-full md:flex-wrap md:overflow-hidden   md:mb-20 xxs:mb-0 xxs:p-4 md:p-0">
      <div className=" flex xxs:flex-col md:flex-row items-center justify-center xxs:py-0 md:py-10">
        <div className="hidden md:block md:w-[45%] xxs:w-full bg-[#FFFFFF] py-10 px-10 z-10 md:mr-[-100px] xxs:mr-0 max-h-[400px]">
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

        <div className="block md:w-[55%] xxs:w-full relative">
          <img
            src={backgroundweb}
            alt=""
            className="bg-cover bg-center md:mb-[-50px] xxs:mb-0"
          />
          <div className="px-5">
            <div className="-translate-y-16  p-5 bg-white bg">
              <h1 className="font-medium text-lg pb-1">Agro Services</h1>
              <div className="xxs:w-20 h-1 w-10 bg-[#197B30]"></div>
              <p className="py-5 text-justify text-[#797979] tracking-tighter">
                Agro services play a crucial role in pork meat production and
                supply chain, which involves farrow-to-finish operations,
                genetics, feed formulation, animal health, and waste management
                services. These services are essential in delivering
                high-quality, sustainable, and healthy pork meat that meets the
                needs and preferences of customers.
              </p>

              <Link
                to="/services/agro-services"
                className="py-3 px-5 bg-[#197B30] rounded text-white "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
