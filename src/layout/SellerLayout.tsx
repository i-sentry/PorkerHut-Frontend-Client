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
    <div className="h-screen w-screen overflow-hidden hide-scroll-bar">
      <div className="grid grid-rows-[auto_1fr] w-full h-full">
        <div className="sticky top-0 left-0 right-0 z-50">
          <VendorsNav />
        </div>
        <div className="md:flex h-full w-full overflow-x-hidden hide-scroll-bar">
          <SellerSideNav />

          <div className="overflow-y-auto flex-1 pt-0 md:pt-4 lg:pt-[40px] md:px-4 hide-scroll-bar">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
