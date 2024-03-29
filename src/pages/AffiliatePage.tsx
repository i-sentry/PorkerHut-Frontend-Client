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
          <p className="text-[16px] font-medium leading-[150%] text-[#333333] ">
            Welcome to Porker Hut! These Terms of Service outline the rules and
            regulations governing your use of our website and the services we
            provide. By accessing or using Porker Hut's website and services,
            you agree to comply with these Terms of Service. Please read them
            carefully.
          </p>
          <ol className="mt-3 list-decimal space-y-3 pl-5">
            <li className="text-base text-[#333]">
              <strong>Account Registration and Eligibility:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  To use certain features of our website and place orders, you
                  may need to create an account with Porker Hut. You must be at
                  least 18 years old to create an account.
                </li>
                <li>
                  When creating an account, you agree to provide accurate,
                  current, and complete information. You are solely responsible
                  for maintaining the confidentiality of your account
                  information and are liable for any activities that occur under
                  your account.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Product Information and Pricing:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  Porker Hut strives to provide accurate product descriptions,
                  images, and pricing information. However, we do not warrant
                  the accuracy, completeness, or reliability of any information
                  on our website.
                </li>
                <li>
                  Prices for our pork products are subject to change without
                  prior notice. We reserve the right to modify or discontinue
                  any product without liability.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Ordering and Payment:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  When placing an order on our website, you agree to provide
                  accurate and complete information about yourself and the
                  delivery address.
                </li>
                <li>
                  All payments must be made through the available payment
                  methods on our website. By making a purchase, you authorize us
                  to charge the provided payment method for the total order
                  amount.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Shipping and Delivery:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  We strive to process and deliver orders promptly. However,
                  delivery times may vary depending on factors beyond our
                  control.
                </li>
                <li>
                  Porker Hut is not responsible for any delays, loss, or damage
                  that may occur during the shipping process. Risk of loss and
                  title for products purchased from our website pass to you upon
                  delivery.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Returns and Refunds:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  We take pride in providing high-quality pork products. If you
                  are not satisfied with your purchase, please contact our
                  customer support within 48 hours of delivery to initiate a
                  return or refund.
                </li>
                <li>
                  Returned products must be in their original condition,
                  unopened, and unused. We reserve the right to refuse returns
                  or refunds if the products are not in compliance with our
                  return policy.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Intellectual Property:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  All content on the Porker Hut website, including text, images,
                  graphics, logos, and software, is the property of Porker Hut
                  and protected by intellectual property laws.
                </li>
                <li>
                  You may not reproduce, distribute, modify, or exploit any
                  content from our website without prior written permission from
                  Porker Hut.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Governing Law and Jurisdiction:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of Nigeria.
                </li>
                <li>
                  Any disputes arising from or related to these Terms of Service
                  shall be subject to the exclusive jurisdiction of the courts
                  in Nigeria.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Modifications to the Terms of Service:</strong>
              <ul className="list-[lower-alpha] pl-5">
                <li>
                  Porker Hut reserves the right to modify or update these Terms
                  of Service at any time without prior notice.
                </li>
                <li>
                  By continuing to use our website and services after the
                  changes have been made, you agree to be bound by the revised
                  Terms of Service.
                </li>
              </ul>
            </li>
            <li className="text-base text-[#333]">
              <strong>Contact Information:</strong>
              <p>
                If you have any questions or concerns about these Terms of
                Service, please contact us at{" "}
                <a
                  href="mailto:info@porkerhut.com"
                  className="font-medium text-green-700"
                >
                  info@porkerhut.com
                </a>
              </p>
              <p className="mt-2">
                Please note that this sample Terms of Service is for reference
                purposes only and may need to be customised to fit the specific
                needs and legal requirements of your company. It is recommended
                to consult with a legal professional to ensure compliance with
                applicable laws and regulations
              </p>
            </li>
          </ol>
        </div>
        <div className="mt-5 w-full grid-cols-2 justify-center py-5 xxs:block lg:grid lg:gap-7">
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
