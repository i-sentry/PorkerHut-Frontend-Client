import React from "react";
let backgroundMobile = require("../../assets/images/Agro-mobile.jpg");
let backgroundweb = require("../../assets/images/Agro-web.jpg");

const Services = () => {
  return (
    <section className=" bg-[#F4F4F4] xxs:h-[60vh] md:w-full md:flex-wrap md:overflow-hidden md:h-screen md:mb-20">
      <div className="xxs:m-4 xxs:h-screen md:hidden">
        <div className=" md:w-2/4 xl:w-2/4 md:h-[700px] my-4 xxs:pt-10">
          <img src={backgroundMobile} alt="" className="w-full h-full" />
        </div>

        <div className=" xxs:py-6 xxs:px-6 md:w-2/4 xs:h-7 md:max-h-[700px] md:py-10 md:px-12 xl:py-10 xl:px-12 bg-[#FFFFFF]  relative xxs:m-10 xxs:rounded-md xxs:mt-[-160px]">
          <h1 className="xxs: text-lg xxs:font-medium">Agro Services</h1>
          <div className=" xxs:w-20 h-1 w-10 bg-[#197B30]"></div>
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          </p>
          <a
            href=""
            className="bg-[#197b30] py-4 px-6 my-4 text-white xxs:py-3 xxs:px-5 xxs:rounded xxs:text-sm xxs:font-normal"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className=" flex items-center justify-center my-0 md:py-10">
        <div className="xxs:hidden md:block w-[45%] bg-[#FFFFFF] py-10 px-10 z-10 mr-[-100px] max-h-[400px]">
          <h1 className="font-semibold text-2xl pb-1">Agro Services</h1>
          <div className="xxs:w-20 h-1 w-10 bg-[#197B30]"></div>
          <p className="py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            expedita delectus ut exercitationem commodi obcaecati cum dolore
            consectetur saepe atque, culpa reprehenderit accusantium cumque nisi
            aspernatur, minima animi eaque necessitatibus facere totam. Id
            quidem veritatis quod quisquam repudiandae perferendis aut dolores
            sed rem hic perspiciatis, distinctio, voluptas modi cumque ad!
          </p>
          <a href="" className="py-3 px-5 bg-[#197B30] rounded text-white ">Learn More</a>
        </div>

        <div className="xxs:hidden md:block w-[55%] ">
          <img
            src={backgroundweb}
            alt=""
            className="bg-cover bg-center h-screen"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
