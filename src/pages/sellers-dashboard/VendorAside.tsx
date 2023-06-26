import React from "react";
import { useSidebarState } from "../../store/overlay";
import Submenu from "../../components/admin-dashboard-components/Submenu";
import { vendorsSideBarLink } from "../../utils/Navigation";

const VendorAside = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  return (
    <div
      className={`lg:flex fixed lg:relative md:top-16 lg:top-0 left-0 z-40 bg-[#EEEEEE] lg:bg-white  w-[284px] border-r   h-screen flex-col  lg:pt-8 md:pt-8 transition-all duration-500 overflow-y-hidden ${
        !sideBarOpen ? "-translate-x-full lg:translate-x-0" : ""
      }`}
    >
      {vendorsSideBarLink.map((item, index) => {
        //@ts-ignore
        return <Submenu item={item} key={index} />;
      })}
    </div>
  );
};

export default VendorAside;
