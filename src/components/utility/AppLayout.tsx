import React, { ReactNode, useCallback } from "react";
import NavBar from "../nav-component/NavBar";
import Footer from "../footer-component/Footer";
import { SearchBar } from "../slider-component/Slider";
import { useSearchStore } from "../../store/showSearch";
import { useSidebarState } from "../../store/overlay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
interface IAppLayoutProps {
  children: ReactNode;
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  const showSearch = useSearchStore((state) => state.showSearch);
  const setShowSearch = useSearchStore((state) => state.setShowSearch);
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);

  // const toggleBodyScrolling = useCallback(() => {
  //   document.body.style.overflow = sideBarOpen ? "hidden" : "auto";
  // }, [sideBarOpen]);

  // React.useEffect(() => {
  //   toggleBodyScrolling();
  // }, [sideBarOpen, toggleBodyScrolling]);
  return (
    <div>
      <NavBar />
      <div className="mt-10"></div>
      <div className="relative">
        {showSearch && (
          <div className="absolute left-1/2 top-10 z-[999] flex w-auto -translate-x-1/2 items-center justify-center xl:hidden">
            <SearchBar setShowSearch={setShowSearch} />
          </div>
        )}
        <div
          onClick={() => setShowSearch(false)}
          className={`absolute top-0 left-0 z-[20] h-full w-full bg-black duration-300 xl:hidden ${
            showSearch ? "bg-opacity-80" : "invisible bg-opacity-0"
          }`}
        ></div>
        <ToastContainer style={{ width: "500px" }} />
        <div className="children">{children}</div>
        <a
          href="https://wa.me/+2348057808076?text=Hello%20PorkerHut%20Support!"
          target="_blank"
          aria-label="Whatsapp"
          className="group fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-700"
        >
          <BsWhatsapp
            size={28}
            color="#fff"
            className="duration-300 group-hover:scale-[.85]"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
