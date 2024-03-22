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
        <div className=" to to relative h-[350px] w-full flex-col items-center justify-center bg-slate-600 bg-gradient-to-r from-slate-500 xxs:flex lg:flex lg:flex-col lg:items-center lg:justify-center">
          <img
            src={AffiPageImg}
            alt=""
            className="absolute h-full w-full object-cover mix-blend-overlay"
          />
          <div className=" absolute text-center">
            <h1 className="my-7 font-semibold leading-[47px] text-white xxs:text-2xl lg:text-[40px]">
              Become a Porker Hut Partner
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="  mt-12 text-[20px]">
          <h1 className="mb-4 text-center text-[32px] font-semibold leading-[47px] tracking-wide text-[#333]">
            Terms of Services
            <div className=" m-auto h-1  bg-[#197B30] xxs:w-20 md:w-24"></div>
          </h1>
          <p className="text-[16px] font-normal leading-[150%] text-[#333333] ">
            The Terms of Service (ToS) outlines the obligations and
            responsibilities of affiliates, such as promoting the agro
            e-commerce platform, adhering to advertising guidelines, and
            maintaining accurate and up-to-date information.
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li className="text-base text-[#333]">
              <strong>Commission Structure:</strong> Details regarding the
              commission structure, including the percentage or fixed amount of
              commission, payment schedule for earning commissions are typically
              included.
            </li>

            <li className="text-base text-[#333]">
              <strong>Prohibited Activities:</strong> The ToS explicitly state
              activities that are strictly prohibited, such as engaging in
              fraudulent or deceptive practices, misrepresenting the e-commerce
              platform, or using unauthorized marketing tactics.
            </li>
            <li className="text-base text-[#333]">
              <strong>Intellectual Property:</strong> Affiliate agreements
              usually mention the protection of intellectual property rights of
              the agro e-commerce platform, including trademarks, copyrights,
              and patents. Affiliates are generally prohibited from using these
              intellectual properties without explicit permission.
            </li>
            <li className="text-base text-[#333]">
              <strong>Termination:</strong> The process and circumstances under
              which an affiliate's participation may be terminated are outlined
              in the ToS. It may include termination for violation of the terms,
              fraudulent activities, or at the discretion of the agro e-commerce
              platform.
            </li>
            <li className="text-base text-[#333]">
              <strong>Modifications:</strong> There may be a clause stating that
              the agro e-commerce platform has the right to modify the ToS at
              any time, with or without prior notice to affiliates.
            </li>
            <li className="text-base text-[#333]">
              <strong>Limitation of Liability:</strong> The platform typically
              includes a disclaimer of liability, indicating that they are not
              responsible for any losses incurred by affiliates and that
              affiliates assume their own risks.
            </li>
          </ul>
        </div>{" "}
        <div className="w-full grid-cols-2 justify-center py-5 xxs:block lg:grid lg:gap-7">
          <div className="xxs:w-full">
            <h1 className="text-[ #333333] mb-8 text-left text-2xl font-medium xxs:block  lg:hidden">
              About Marketplace
            </h1>
            <div className=" ">
              <img
                // className="lg:ml-10 flex-1 h-full w-full p-4"
                src={PublicMktImg}
                alt=""
                width="100%"
              />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-[ #333333] mb-1 text-[24px] font-bold leading-[28px] xxs:hidden  lg:block">
              About Marketplace
            </h1>
            <div className="w-full">
              <p className="text-[16px] font-normal leading-[150%] tracking-normal text-[#797979]">
                The marketplace is going first to our farmer’s whitelist. In
                order to guarantee sales/distribution for farmers, not all
                registered accounts will be activated immediately. However,
                activation of account depends on:
              </p>
              <ul className="list-disc space-y-3 pl-5  text-sm text-[#797979]">
                <li className="text-[16px] font-normal leading-[24px]">
                  The location of the farmer
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  The completion of our vetting process and procedure
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  Type of produce
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  Business information
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  Quality of product
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  Image quality{" "}
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  Product pricing
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  Brand of product
                </li>
                <li className="text-[16px] font-normal leading-[24px]">
                  Quantity of product{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-20">
          <div className=" lg:my-4">
            <h1 className="text-center text-xl font-bold  leading-[68px] tracking-wider  lg:text-[58px]">
              Become Our Partner Today
            </h1>
          </div>
          <div className=" mt-10 grid xxs:gap-8 lg:grid-cols-3">
            <div className=" text-center  ">
              <span className=" text-[40px] font-bold leading-[47px]">1</span>
              <h1 className=" my-2 font-medium leading-[38px] text-[#333] xxs:text-lg lg:text-[32px] ">
                Sell on Porker Hut
              </h1>
              <p className=" text-[16px] font-semibold leading-[19px] text-[#333] xxs:text-lg">
                <Link
                  to="/create-account"
                  className="text-[16px] font-semibold leading-[19px] text-[#197B30] underline"
                >
                  Sign up here
                </Link>{" "}
                {"  "}
                to become a Porker Hut partner
              </p>
            </div>
            <div className=" text-center  ">
              <span className="text-[40px] font-bold leading-[47px]">2</span>
              <h1 className=" my-2 text-lg font-medium leading-[38px] text-[#333] lg:text-[32px]">
                Become a Vet Partner
              </h1>
              <p className="text-[16px] font-semibold leading-[19px] text-[#333] ">
                <Link
                  to="/affiliate/vet-partner-account"
                  className="text-[16px] font-semibold leading-[19px] text-[#197B30] underline"
                >
                  Sign up here
                </Link>{" "}
                {"  "}
                to Join our Vet Team
              </p>
            </div>
            <div className=" text-center  ">
              <span className="text-[40px] font-bold leading-[47px] ">3</span>
              <h1 className=" my-2 font-medium leading-[38px] text-[#333] xxs:text-lg lg:text-[32px]">
                Become Logistics Service Partner
              </h1>
              <p className="text-[16px] font-semibold leading-[19px] text-[#333] ">
                <Link
                  to="/affiliate/logistics-partner-account"
                  className="text-[#197B30] underline"
                >
                  Sign up here
                </Link>{" "}
                {"  "}
                to Partner with Us
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AffiliatePage;
