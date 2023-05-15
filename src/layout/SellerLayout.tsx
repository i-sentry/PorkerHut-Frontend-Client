import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import OrderNavbar from "../components/sellers-order-page-component/OrderNavbar";
import OrderSidebar from "../pages/sellers-dashboard/OrderSidebar";


const Layout = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden md:overflow-x-hidden">
      <div className=" ">
        <div className="">
          <OrderNavbar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className="md:flex md:w-screen md:h-screen">
          <div className="md:flex md:flex-[1]">
            <OrderSidebar sidebar={sidebar} setSidebar={setSidebar} />
          </div>

          <div className="overflow-y-scroll md:outlet md:flex-[5]  pt-[47px] pl-[80px] pr-[25px] ">
            {<Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
