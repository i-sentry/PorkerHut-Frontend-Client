import React from "react";
import Pigdesktop from "../../src/assets/images/Pigdesktop.png";
import PlantImg from "../../src/assets/images/PlantImg.png";
import BreadCrumbs from "../components/utility/BreadCrumbs";
import AppLayout from "../components/utility/AppLayout";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <AppLayout>
      <div
        className=" flex   items-center md:justify-start xxs:justify-center w-full md:h-[400px] xxs:h-[300px] bg-cover bg-center  md:px-14 "
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Pigdesktop}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",

        }}
      >
        <div className=" ">
          <h1 className="mb-2 font-normal tracking-tight md:text-[40px] md:leading-[47px] xxs:text-[32px] xxs:leading-[38px]  text-[#fff]">
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
      <div className="md:px-14 py-16 ">
        <div className=" bg-[#F4F4F4]     md:flex ">
          <div className="md:w-1/2 xxs:px-3 xxs:pt-16 md:pt-0 flex-1 flex justify-center md:pl-20 flex-col md:pr-8">
            <h1 className=" md:font-medium  md:text-[40px] md:leading-[47px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] flex justify-self-start font-bold text-[#333333]   mb-2">
              What we do
            </h1>
            <p className=" leading-6 xxs:text-[14px] md:text-[16px] text-[#797979] text-justify">
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
          <figure className="md:w-1/2">
            <img
              className="object-cover w-full xxs:py-10 h-full  xxs:px-3 md:p-0"
              src={PlantImg}
              alt="aboutImg"
            />
          </figure>
        </div>
      </div>

      <div className="md:p-14 xxs:mt-7 md:mt-0 xxs:px-3 xxs:py-16 bg-[#F4F4F4] mb-16">
        <div className="md:max-w-[500px] ">
          <h1 className=" mb-4 md:font-medium md:leading-[47px] md:text-[40px] xxs:font-normal xxs:text-[20px] xxs:leading-[23px] text-[#333333]">
            Why choose Porkerhut?
          </h1>
          <p className=" md:leading-6 text-[14px] md:text-[16px] text-[#797979] xxs:text-[14px] xxs:leading-[24px]">
            At Porkerhut, we are committed to providing the highest quality pork
            products to our customers. Our core values include:
          </p>
        </div>

        <div className="md:grid md:grid-cols-3  md:gap-8">
          <div className=" bg-white rounded mt-12 px-8 py-10 shadow-md">
            <h1 className="md:text-lg xxs:text-[18px] xxs:leading-[21px] font-medium mb-4 text-[#333333]">
              Sustainable and Responsible Farming Practices
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              We believe in promoting a sustainable food system, which starts
              with the way we raise our animals. Our farm practices humane and
              environmentally responsible pig rearing, providing a comfortable
              and stress-free environment for our pigs to grow, with ample
              access to natural resources like water, fresh air, and
              high-quality grain to feed on.
            </p>
          </div>

          <div className=" bg-white rounded md:mt-12 xxs:mt-5 px-8 py-10 shadow-md">
            <h1 className="mb-4 md:text-lg xxs:text-[18px] xxs:leading-[21px] font-medium text-[#333333] ">
              Unique Services
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
              Apart from our premium pork products, Porkerhut also offers a
              range of services to meet the specific needs and preferences of
              our customers. Our weekend kill is an innovative and sustainable
              solution for customers looking to enjoy fresh and delicious pork
              while supporting ethical and responsible farming practices. In
              addition to that, we also offer veterinary services, agro
              services, and logistic services.
            </p>
          </div>

          <div className=" bg-white rounded md:mt-12 xxs:mt-5 px-8 py-10 shadow-md">
            <h1 className="md:text-lg xxs:text-[18px] xxs:leading-[21px] font-medium mb-4 text-[#333333]">
              High-Quality Products
            </h1>
            <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
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
