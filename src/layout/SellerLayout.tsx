import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import VendorsNav from "../components/vendors-component/VendorsNav";
import SellerSideNav from "../pages/sellers-dashboard/SellerSideNav";

const Layout = () => {
  const navigate = useNavigate();
  const vendor = JSON.parse(localStorage.getItem("vendor") as string);
  const accessToken = localStorage.getItem("vendorAccessToken");

  console.log(vendor, accessToken, "vendorrr");

  useEffect(() => {
    if (accessToken === "undefined" || accessToken === null) {
      // Route Back to Seller Login Screen
      navigate("/sign-in?q=vendor");
    }
  }, [accessToken, navigate]);

  return (
    <div className="hide-scroll-bar h-screen w-screen overflow-hidden">
      <div className="grid h-full w-full grid-rows-[auto_1fr]">
        <div className="sticky top-0 left-0 right-0 z-50">
          <VendorsNav />
        </div>
        <div className="hide-scroll-bar h-full w-full overflow-x-hidden md:flex">
          <SellerSideNav />

          <div className="hide-scroll-bar flex-1 overflow-y-auto pt-0 md:px-4 md:pt-4 lg:pt-[40px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
