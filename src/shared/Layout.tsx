import React from "react";
import { Outlet } from "react-router-dom";
import OrderNavbar from "../components/order-page-component/OrderNavbar";
import OrderSidebar from "../components/order-page-component/OrderSidebar";

const Layout = () => {
  return (
    <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <div className=" ">
        <div className="">
          <OrderNavbar />
        </div>
        <div className="flex w-screen h-screen">
          <div className="flex flex-1">
          <OrderSidebar />
          </div>
          <div className=" outlet">{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
