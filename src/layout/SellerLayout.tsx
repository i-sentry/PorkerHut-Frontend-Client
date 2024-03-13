import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import VendorsNav from "../components/vendors-component/VendorsNav";
import SellerSideNav from "../pages/sellers-dashboard/SellerSideNav";
import logo from "../assets/images/porkerlogo.png";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { vendor, token: accessToken } = JSON.parse(
    localStorage.getItem("vendor") as string,
  );

  // const accessToken = localStorage.getItem("vendorAccessToken");
  console.log(vendor, "vendor", accessToken);

  useEffect(() => {
    const path = window.location.pathname;
    if (
      path.startsWith("/vendor") &&
      (!accessToken || accessToken === "undefined" || accessToken === null)
    ) {
      navigate("/sign-in?q=vendor");
    }
    setLoading(false);
  }, [accessToken, navigate]);

  return (
    <>
      {loading ? (
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="loaderLogo"
              className="h-20 w-20 animate-pulse"
            />
            <p className="text-[14px] leading-[24px] text-[#333333]">
              Fetching Data...
            </p>
          </div>
        </div>
      ) : (
        <div className="hide-scroll-bar h-screen w-screen overflow-x-hidden">
          <div className="relative grid h-full w-full grid-rows-[auto_1fr]">
            <div className="sticky top-0 left-0 right-0 z-[90]">
              <VendorsNav />
            </div>
            {vendor?.storeStatus === "pending" && (
              <div className="absolute top-0 left-0 z-[60] h-full w-full overflow-auto bg-black  bg-opacity-70 px-4 md:flex md:h-screen md:items-center md:justify-center lg:fixed">
                <div className="relative z-[65] mt-20 mb-8 h-auto rounded-t-lg bg-white p-5 md:mt-0 md:w-[700px] md:p-8">
                  <h3 className="mb-4 text-2xl font-semibold md:text-center">
                    Welcome to Porker Hut
                  </h3>
                  <p className="leading-[150%]">
                    Welcome to PorkerHut. We are thrilled to have you on board
                    as our newest vendor, and we are looking forward to a
                    successful and mutually beneficial partnership. We are
                    dedicated to providing an exceptional online shopping
                    experience, and your unique products will undoubtedly
                    contribute to our diverse and high-quality offerings. We
                    believe that your presence will enhance our platform and
                    bring fresh perspectives to our customers. Please be
                    informed that your account status is currently pending, as
                    our team diligently conducts a thorough assessment to ensure
                    a seamless onboarding process for you.
                  </p>
                  <p className="mt-2 leading-[150%]">
                    We understand the significance of this step in our
                    partnership, and we want to assure you that your application
                    is receiving the careful attention it deserves. We
                    anticipate completing the review within the next{" "}
                    <strong>48 hours</strong>, and you can expect a prompt
                    response from us. Your patience during this period is highly
                    valued, and we thank you for your understanding. If you have
                    any urgent inquiries or require further clarification,
                    please do not hesitate to reach out to us at
                    <span className="text-green-700">info@porkerhut.com</span>
                    . We are here to assist you and provide any necessary
                    information.
                  </p>
                </div>
              </div>
            )}
            <div className="hide-scroll-bar w-full overflow-x-hidden md:flex lg:h-screen">
              <SellerSideNav />

              <div className="hide-scroll-bar relative flex-1 overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
