import React from "react";
import Pigdesktop from "../../src/assets/images/Pigdesktop.png";
//@ts-ignore
import PigImg from "../../src/assets/about.jpg";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import AppLayout from "../components/utility/AppLayout";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div
        className=" flex   w-full items-center bg-cover bg-center xxs:h-[300px] xxs:justify-center lg:h-[300px] lg:justify-start  lg:px-14 "
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Pigdesktop}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
        <div className=" ">
          <h1 className="mb-2 font-normal tracking-tight text-[#fff] xxs:text-[32px] xxs:leading-[38px] lg:text-[32px]  lg:leading-[47px]">
            About Us
          </h1>
          <div className="">
            <BreadCrumbs
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "About Us",
                  link: "/",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="py-16 lg:px-14 ">
        <div className=" bg-[#F4F4F4]     lg:flex ">
          <div className="flex flex-1 flex-col justify-center xxs:px-3 xxs:pt-16 lg:w-1/2 lg:pt-0 lg:pl-10 lg:pr-8">
            <h1 className=" mb-2  flex justify-self-start font-bold text-[#333333] xxs:text-[20px] xxs:font-normal xxs:leading-[23px] lg:text-[32px] lg:font-medium   lg:leading-[47px]">
              What we do
            </h1>
            <p className=" text-justify leading-6 text-[#797979] xxs:text-[14px] lg:text-[14px]">
              Porker Hut is a premium pork destination that offers a
              comprehensive range of pork products, from bacon to pork cuts and
              sausages, all crafted to surpass your expectations. As a pig farm,
              we are committed to delivering the freshest, healthiest, and most
              delicious pork products available. Thank you for choosing
              Porkerhut. We are thrilled to offer you premium-quality pork
              products that reflect our passion for responsible pig rearing and
              exceptional taste.
            </p>
          </div>
          <figure className="lg:w-1/2">
            <img
              className="h-full w-full object-cover xxs:py-10  xxs:px-3 lg:p-0"
              src={PigImg}
              alt="aboutImg"
            />
          </figure>
        </div>
      </div>

      <div className="mb-16 bg-[#F4F4F4] xxs:mt-7 xxs:px-3 xxs:py-16 lg:mt-0 lg:p-14">
        <div className="lg:max-w-[500px] ">
          <h1 className=" mb-4 text-[#333333] xxs:text-[20px] xxs:font-normal xxs:leading-[23px] lg:text-[32px] lg:font-medium lg:leading-[47px]">
            Why choose Porkerhut?
          </h1>
          <p className=" text-justify text-[14px] text-[#797979] xxs:text-[14px] xxs:leading-[24px] lg:text-[14px] lg:leading-6">
            At Porkerhut, we are committed to providing the highest quality pork
            products to our customers. Our core values include:
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3  lg:gap-8">
          <div className=" mt-12 rounded bg-white px-8 py-10 shadow-lg">
            <h1 className="mb-4 font-medium text-[#333333] xxs:text-[18px] xxs:leading-[21px] lg:text-lg">
              Sustainable and Responsible Farming Practices
            </h1>
            <p className=" text-justify text-[14px] leading-6 text-[#797979] lg:text-[14px]">
              We believe in promoting a sustainable food system, which starts
              with the way we raise our animals. Our farm practices humane and
              environmentally responsible pig rearing, providing a comfortable
              and stress-free environment for our pigs to grow, with ample
              access to natural resources like water, fresh air, and
              high-quality grain to feed on.
            </p>
          </div>

          <div className=" rounded bg-white px-8 py-10 shadow-lg xxs:mt-5 lg:mt-12">
            <h1 className="mb-4 font-medium text-[#333333] xxs:text-[18px] xxs:leading-[21px] lg:text-lg ">
              Unique Services
            </h1>
            <p className=" text-justify text-[14px] leading-6 text-[#797979] lg:text-[14px]">
              Apart from our premium pork products, Porkerhut also offers a
              range of services to meet the specific needs and preferences of
              our customers. Our weekend kill is an innovative and sustainable
              solution for customers looking to enjoy fresh and delicious pork
              while supporting ethical and responsible farming practices. In
              addition to that, we also offer veterinary services, agro
              services, and logistic services.
            </p>
          </div>

          <div className=" rounded bg-white px-8 py-10 shadow-lg xxs:mt-5 lg:mt-12">
            <h1 className="mb-4 font-medium text-[#333333] xxs:text-[18px] xxs:leading-[21px] lg:text-lg">
              High-Quality Products
            </h1>
            <p className=" text-justify text-[14px] leading-6 text-[#797979] lg:text-[14px]">
              Our extensive line of pork products is carefully hand-selected,
              ensuring they meet our high-quality standards. We offer a wide
              variety of products, including freshly cut bacon, sausage, and
              more, each prepared with care to deliver unparalleled taste and
              quality.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default About;
