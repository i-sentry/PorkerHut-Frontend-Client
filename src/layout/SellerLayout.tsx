import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import VendorsNav from "../components/vendors-component/VendorsNav";
import SellerSideNav from "../pages/sellers-dashboard/SellerSideNav";
import logo from "../assets/images/porkerlogo.png";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const accessToken = localStorage.getItem("vendorAccessToken");

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
        <div className="hide-scroll-bar h-screen w-screen overflow-hidden">
          <div className="grid h-full w-full grid-rows-[auto_1fr]">
            <div className="sticky top-0 left-0 right-0 z-50">
              <VendorsNav />
            </div>
            <div className="hide-scroll-bar h-full w-full overflow-x-hidden md:flex">
              <SellerSideNav />

              <div className="hide-scroll-bar flex-1 overflow-y-auto pt-10 md:px-4 md:pt-4 lg:pt-[40px]">
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
