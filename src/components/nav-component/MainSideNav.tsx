import { useSidebarState } from "../../store/overlay";
import Aside from "./Aside";

const MainSideNav = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  const toggleSideBarOpen = useSidebarState((state) => state.toggleSidebar);
  return (
    <div className="">
      <div
        className={`fixed top-0 left-0 z-10   h-[100%]  w-full overflow-y-hidden border-r bg-[#020101a6] lg:hidden  ${
          !sideBarOpen ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
        }`}
        onClick={() => toggleSideBarOpen()}
      ></div>

      <Aside />
    </div>
  );
};

export default MainSideNav;
