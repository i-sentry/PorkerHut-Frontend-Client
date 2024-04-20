import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import VendorsNav from "../components/vendors-component/VendorsNav";
import SellerSideNav from "../pages/sellers-dashboard/SellerSideNav";
import logo from "../assets/images/porkerlogo.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useGetVendorById } from "../services/hooks/Vendor";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const vendors = JSON.parse(localStorage.getItem("vendor") as string);
  const vendor = vendors?.vendor;

  const accessToken = localStorage.getItem("vendorAccessToken");

  const [vendorStatus, setVendorStatus] = useState<string>(vendor?.storeStatus);
  const { data: vInfo } = useGetVendorById(vendor?._id);

  console.log(vInfo, "viddd");

  useEffect(() => setVendorStatus(vInfo?.storeStatus), [vInfo]);

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
            {vendor?.storeStatus !== "approved" && (
              <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black bg-opacity-70">
                <div className="relative mx-4 w-1/2 rounded-lg bg-white p-8">
                  <h3 className="mb-4 text-center text-2xl font-semibold">
                    Welcome to Porker Hut
                  </h3>
                  <p className="leading-relaxed">
                    Welcome to PorkerHut. We are thrilled to have you on board
                    as our newest vendor, and we are looking forward to a
                    successful and mutually beneficial partnership. We are
                    dedicated to providing an exceptional online shopping
                    experience, and your unique products will undoubtedly
                    contribute to our diverse and high-quality offerings. We
                    believe that your presence will enhance our platform and
                    bring fresh perspectives to our customers.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    Please be informed that your account status is currently
                    pending, as our team diligently conducts a thorough
                    assessment to ensure a seamless onboarding process for you.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    We understand the significance of this step in our
                    partnership, and we want to assure you that your application
                    is receiving the careful attention it deserves. We
                    anticipate completing the review within the next{" "}
                    <strong>48 hours</strong>, and you can expect a prompt
                    response from us. Your patience during this period is highly
                    valued, and we thank you for your understanding.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    If you have any urgent inquiries or require further
                    clarification, please do not hesitate to reach out to us at{" "}
                    <span className="text-green-700">porkerhut@gmail.com</span>.
                    We are here to assist you and provide any necessary
                    information.
                  </p>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('../../public/images/porker.jpeg')`,
                        opacity: 0.2,
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {vendorStatus === "deactivated" && (
              <div className="absolute top-0 left-0 z-[90] flex h-screen w-full items-center justify-center  overflow-auto bg-black bg-opacity-50 px-4 pt-24 backdrop-blur-md lg:fixed">
                <div className="relative z-[65] mx-auto mb-8 flex h-auto flex-col items-center rounded-t-lg bg-white p-5 text-center sm:w-[500px] md:mt-0 md:w-[700px] md:p-8">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full text-red-600 ring-2  ring-red-600">
                    <IoCloseCircleSharp size={72} />
                  </span>
                  <h2 className="mb-1 mt-5 text-xl font-semibold sm:text-2xl md:text-center">
                    Your account has been deactivated
                  </h2>
                  <p className="leading-[150%]">
                    Please contact Porkerhut at{" "}
                    <a
                      href="mailto:info@porkerhut.com"
                      className="font-medium text-green-700"
                    >
                      info@porkerhut.com
                    </a>{" "}
                    for further assistance.
                  </p>
                </div>
              </div>
            )}
            <div className="sticky top-0 left-0 right-0 z-[70]">
              <VendorsNav />
            </div>
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
