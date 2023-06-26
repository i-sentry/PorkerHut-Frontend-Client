import React from "react";
import VendorAside from "./VendorAside";
import { useSidebarState } from "../../store/overlay";

const SellerSideNav = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  const toggleSideBarOpen = useSidebarState((state) => state.toggleSidebar);
  return (
    <div className="">
      <div
        className={`fixed bg-[#020101a6] w-full h-[100%]   top-0  left-0 z-10 lg:hidden overflow-y-hidden border-r  ${
          !sideBarOpen ? "hidden" : ""
        }`}
        onClick={() => toggleSideBarOpen()}
      ></div>

      <VendorAside />
    </div>
  );
};

export default SellerSideNav;
