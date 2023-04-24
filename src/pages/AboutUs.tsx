import React from "react";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
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
      <div className="mb-10">
        <div
          className=" md:block xxs:flex md:flex-col  md:items-center justify-center w-full md:h-[350px] xxs:h-[300px] bg-cover bg-center md:py-20 md:px-14 xxs:relative"
          style={{
            backgroundImage: ` url('${Pigdesktop}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
          }}
        >
          <div className="xxs:absolute md:top-10 xxs:top-0 mt-32 absolute">
            <h1 className="mb-2 font-normal tracking-tight text-3xl   text-[#fff]">
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
      </div>

      <div className=" bg-[#F4F4F4] mt-20 rounded-md max-w-[1350px] m-auto md:flex md:mx-10">
        <div className=" p-6 flex-1 md:p-16">
          <h1 className=" md:font-normal md:tracking-tight md:text-3xl flex justify-self-start font-bold text-[#333]  whitespace-nowrap mb-2">
            What we do
          </h1>
          <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
            Porker Hut is a premium pork destination that offers a comprehensive
            range of pork products, from bacon to pork cuts and sausages, all
            crafted to surpass your expectations. As a pig farm, we are
            committed to delivering the freshest, healthiest, and most delicious
            pork products available. Thank you for choosing Porkerhut. We are
            thrilled to offer you premium-quality pork products that reflect our
            passion for responsible pig rearing and exceptional taste.
          </p>
        </div>
        <figure className=" flex-1">
          <img
            className="object-cover h-full p-6 md:p-0"
            src={PlantImg}
            alt=""
          />
        </figure>
      </div>

      <div className=" mt-24 p-6 bg-[#F4F4F4] ">
        <div className="max-w-[500px] mx-4">
          <h1 className=" mb-4 md:font-normal md:tracking-tight md:text-3xl">
            Why choose Pokerhut?
          </h1>
          <p className=" leading-6 text-[14px] md:text-[16px] text-[#797979]">
            At Porkerhut, we are committed to providing the highest quality pork
            products to our customers. Our core values include:
          </p>
        </div>

        <div className="grid grid-cols-3 px-4 gap-6">
          <div className=" bg-white rounded mt-12 px-4 py-4">
            <h1 className="text-lg font-semibold mb-2 text-[#333]">
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

          <div className=" bg-white rounded mt-12 px-4 py-4">
            <h1 className="  mb-2 text-lg font-semibold text-[#333]">
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

          <div className=" bg-white rounded mt-12 px-4 py-4">
            <h1 className="text-lg font-semibold mb-2 text-[#333] ">
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

      {/* <Footer /> */}
    </AppLayout>
  );
};

export default About;
