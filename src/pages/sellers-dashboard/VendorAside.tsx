import React from "react";
import { useSidebarState } from "../../store/overlay";
import Submenu from "../../components/admin-dashboard-components/Submenu";
import { vendorsSideBarLink } from "../../utils/Navigation";

const VendorAside = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  return (
    <div
      className={`md:flex fixed md:relative xxs:top-16 md:top-0 left-0 z-40 bg-[#EEEEEE] md:bg-white  w-[284px] border-r   h-screen flex-col  md:pt-8 xxs:pt-8 transition-all duration-500 overflow-y-hidden ${
        !sideBarOpen ? "-translate-x-full md:translate-x-0" : ""
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
