import React from "react";
import { useSidebarState } from "../../store/overlay";
import Submenu from "../../components/admin-dashboard-components/Submenu";
import { vendorsSideBarLink } from "../../utils/Navigation";

const VendorAside = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  return (
    <div
      className={`fixed left-0 z-40 h-screen w-[284px] flex-col overflow-y-hidden border-r bg-[#EEEEEE]  transition-all duration-500 md:top-16 md:pt-8 lg:relative lg:top-0 lg:flex lg:bg-white lg:pt-8 ${
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
