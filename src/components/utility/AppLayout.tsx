import React, { ReactNode, useCallback } from "react";
import NavBar from "../nav-component/NavBar";
import Footer from "../footer-component/Footer";
import { SearchBar } from "../slider-component/Slider";
import { useSearchStore } from "../../store/showSearch";
import { useSidebarState } from "../../store/overlay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IAppLayoutProps {
  children: ReactNode;
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  const showSearch = useSearchStore((state) => state.showSearch);
  const setShowSearch = useSearchStore((state) => state.setShowSearch);
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  // const toggleSideBarOpen = useSidebarState((state) => state.toggleSidebar);

  // const toggleBodyScrolling = () => {
  //   document.body.style.overflow = sideBarOpen ? "hidden" : "auto";
  // };

  const toggleBodyScrolling = useCallback(() => {
    document.body.style.overflow = sideBarOpen ? "hidden" : "auto";
  }, [sideBarOpen]);

  React.useEffect(() => {
    toggleBodyScrolling();
  }, [sideBarOpen, toggleBodyScrolling]);
  return (
    <div>
      <NavBar />
      <div className="mt-10"></div>
      <div className="relative">
        {showSearch && (
          <div className="absolute flex items-center justify-center w-full top-28 md:hidden z-30">
            <SearchBar setShowSearch={setShowSearch} />
          </div>
        )}
        <ToastContainer style={{ width: "500px" }}  />
        <div className="children">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
