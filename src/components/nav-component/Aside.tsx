import React from "react";
import { useSidebarState } from "../../store/overlay";
import Submenu from "../../components/admin-dashboard-components/Submenu";
import { MainSideBarLinks } from "../../utils/Navigation";
import NavButton from "./NavButton";
import { MdOutlinePerson } from "react-icons/md";

const Aside = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  return (
    <div
      className={`lg:flex fixed lg:relative md:top-16 lg:top-0 left-0 z-40 bg-[#EEEEEE] lg:bg-white  w-[284px] border-r   h-screen flex-col  pt-20 transition-all duration-500 overflow-y-hidden ${
        !sideBarOpen ? "-translate-x-full lg:translate-x-0" : ""
      }`}
    >
      {/* <div className="flex items-center pl-5 my-7 gap-1">
        <MdOutlinePerson size={24} color={"#197b30"} />
        <span className="pl-1 text-[#333333] text-[18px] leading-[21px] font-normal whitespace-nowrap">

          Hi, {user?.firstName}
        </span>
      </div> */}
      {MainSideBarLinks.map((item, index) => {
        //@ts-ignore
        return (
          <>
            <Submenu item={item} key={index} />
          </>
        );
      })}
      <div className="flex flex-col lg:hidden gap-3 pr-4 px-5 mt-4">
        <NavButton className={signUpBtn} text="Sign Up" path="/sign-up" />
        <NavButton className={loginBtn} text="Login" path="/login" />
      </div>
    </div>
  );
};

export default Aside;

const signUpBtn =
  "border border-[#197B30] text-sm lg:py-2 xxs:py-3.5 px-[30px] rounded-sm text-[#fff] bg-[#197B30] hover:bg-white hover:text-[#479559] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-[#197B30] text-sm lg:py-2 xxs:py-3.5 px-[35px] rounded-sm text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
