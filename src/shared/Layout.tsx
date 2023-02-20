import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import OrderNavbar from "../components/order-page-component/OrderNavbar";
import OrderSidebar from "../components/order-page-component/OrderSidebar";

const Layout = () => {

  const [sidebar, setSidebar] = useState(false);




  return (
    <div className="h-screen w-screen overflow-hidden overflow-x-hidden">
      <div className=" ">
        <div className="">
          <OrderNavbar sidebar={sidebar} setSidebar={setSidebar} />
        </div>

        <div className="flex w-screen h-screen">
          <div className="flex md:flex-1">

          <OrderSidebar sidebar={sidebar} setSidebar={setSidebar} />
          </div>

          <div className="overflow-y-scroll outlet">{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
