import React, { useMemo } from "react";
import PorkerLogo from "../../assets/images/porker.png";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllCategories } from "../../services/hooks/Vendor/category";

const Footer = () => {
  const { data: allCategories, isLoading, isSuccess } = useGetAllCategories();
  const categories = useMemo(() => {
    return !isLoading && isSuccess ? allCategories?.data : [];
  }, [isLoading, isSuccess, allCategories]);

  const categoryChecker = (type: string) => {
    const category = categories?.find(
      (item: any) => item?.name?.toLowerCase() === type?.toLowerCase(),
    );

    const url =
      category !== undefined
        ? `/category/${category?._id}?q=${encodeURIComponent(category?.name.toLowerCase())}`
        : "/products";

    return url;
  };

  const navigate = useNavigate();
  return (
    <div className="bg-[#333333]">
      <div className="flex flex-col px-[4%]">
        <div className="mb-2 mt-10  rounded-md bg-[#F4F4F4] p-6 md:mt-5">
          <div className=" flex items-center max-md:flex-col max-sm:flex-col  max-sm:overflow-hidden md:flex-col md:justify-between lg:flex-row">
            <span className="md::mb-2  font-semibold sm:text-base md:mb-4 md:text-[32px] md:text-2xl  lg:mb-0 ">
              Subscribe to Our Newsletter
            </span>

            <form className="max-md:items-center xxs:mt-3 md:mt-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-96 rounded-l border border-r-0 border-solid border-[#D9D9D9] border-inherit p-2 outline-0 placeholder:text-sm placeholder:text-[#A2A2A2] max-md:mb-2 max-md:w-full max-md:rounded-r-md max-md:border-2 max-md:border-solid"
              />
              <button
                type="submit"
                className="z-50 select-none items-center rounded border-hidden bg-[#197B30] p-2 tracking-wider text-white hover:bg-green-900 max-md:rounded-l-md max-sm:w-full   max-sm:rounded-md md:w-32 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-7 mb-6 gap-12 max-md:flex-wrap md:flex md:justify-between">
          <div className="flex flex-col gap-3 text-justify">
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-1 "
            >
              <img src={PorkerLogo} alt="porkerhutLogo" />
              <div className="flex flex-col md:mx-0">
                <p className="title text  text-left font-Roboto-slab text-xl  font-semibold text-[#FFFFFF]">
                  Porker Hut
                </p>
              </div>
            </div>

            <div>
              <p className="text-left text-sm font-normal text-[#D9D9D9] xxs:leading-8 md:leading-6">
                An Agro-Commerce E-Commerce platform where <br /> you can put
                your products and get customers <br /> at no extra cost
              </p>
            </div>
          </div>
          <div className=" xxs:flex-col xxs:pt-10 md:pt-0">
            <div className="flex flex-1 flex-col text-justify xxs:gap-5 md:gap-3">
              <h1 className="font-Roboto text-xl font-semibold not-italic text-[#FFFFFF]">
                Company
              </h1>
              <Link
                to={"/affiliate"}
                className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
              >
                Affiliate
              </Link>
              <span
                onClick={() => navigate("/about-us", { replace: true })}
                className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
              >
                About
              </span>
              <span
                onClick={() => navigate("/blog", { replace: true })}
                className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
              >
                Blog
              </span>
              <span
                onClick={() => navigate("/contact-us", { replace: true })}
                className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
              >
                Contact Us
              </span>
            </div>
            <div className="gap-2 xxs:mt-5 xxs:flex xxs:flex-1 xxs:flex-col xxs:gap-5 xxs:py-5 md:hidden">
              <h1
                onClick={() => navigate("/products")}
                className="text-xl font-semibold not-italic text-[#FFFFFF]"
              >
                Products
              </h1>
              {productLink?.map((link: any) => {
                return (
                  <Link
                    key={link.value}
                    to={categoryChecker(link.value)}
                    // onClick={() => categoryChecker(link.value)}
                    className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
                  >
                    {link?.label}
                  </Link>
                );
              })}
              <span
                onClick={() =>
                  navigate("/services/agro-services", { replace: true })
                }
                className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
              >
                Agro-Services
              </span>
            </div>
          </div>

          <div className="flex-col gap-3 text-justify xxs:hidden md:flex">
            <h1 className="text-xl font-semibold not-italic text-[#FFFFFF]">
              Products
            </h1>
            {productLink?.map((link: any) => {
              return (
                <Link
                  key={link.value}
                  to={categoryChecker(link.value)}
                  className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
                >
                  {link?.label}
                </Link>
              );
            })}

            <span
              onClick={() =>
                navigate("/services/agro-services ", { replace: true })
              }
              className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]"
            >
              Agro-Services
            </span>
          </div>
          <div className=" flex-col gap-3 text-justify xxs:hidden md:flex">
            <div className="flex flex-col text-xl font-semibold not-italic text-[#FFFFFF] xxs:mx-auto xxs:text-center md:mx-0 md:text-left">
              <p>Social Media</p>
            </div>

            <span className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]">
              <a
                rel="noreferrer"
                href="https://web.facebook.com/profile.php?id=100087600040948"
                target="_blank"
              >
                Facebook
              </a>
            </span>
            <span className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]">
              <a
                rel="noreferrer"
                href="https://www.instagram.com/porkerhutnaija/"
                target="_blank"
              >
                Instagram
              </a>
            </span>
            <span className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] ">
              <a
                rel="noreferrer"
                href="https://twitter.com/PorkerN87229"
                target="_blank"
              >
                Twitter
              </a>
            </span>
            <span className="font-Roboto cursor-pointer text-sm font-normal text-[#D9D9D9] hover:text-[#197b30]">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/porker-hut-24b1222b8/"
                target="_blank"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </div>
        <hr className="xxs:hidden md:block" />

        <div className="items-center justify-between md:mt-5 md:flex">
          <div className="mb-6 flex items-center justify-center  xxs:mb-2 xxs:gap-8 md:gap-10 ">
            <span className="font-Roboto cursor-pointer text-xs font-normal text-[#D9D9D9] hover:text-[#197b30] md:text-sm ">
              Legal Notice
            </span>
            <span className="font-Roboto cursor-pointer text-xs font-normal text-[#D9D9D9] hover:text-[#197b30] md:text-sm">
              Privacy Policy{" "}
            </span>
            <span className="font-Roboto cursor-pointer text-xs font-normal text-[#D9D9D9] hover:text-[#197b30] md:text-sm">
              Terms & Conditions
            </span>
          </div>
          <hr className=" xxs:w-full md:hidden" />

          <div className="max-md:mt-2 xxs:mb-8 xxs:mt-4 xxs:flex xxs:items-center xxs:justify-center">
            <span className="font-Roboto text-sm font-normal text-[#D9D9D9]">
              &copy; {new Date().getFullYear()}. All rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const productLink = [
  {
    label: "Pork",
    value: "pork",
  },
  {
    label: "Livestock",
    value: "Livestocks",
  },
  {
    label: "Animal Feeds",
    value: "animal feeds",
  },
];
