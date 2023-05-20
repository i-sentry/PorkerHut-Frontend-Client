import React, { ReactNode } from "react";
import NavBar from "../nav-component/NavBar";
import Footer from "../footer-component/Footer";
import { SearchBar } from "../slider-component/Slider";
import { ISearch, useSearchStore } from "../../store/showSearch";
interface IAppLayoutProps {
  children: ReactNode;
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  const showSearch = useSearchStore((state) => state.showSearch);
  const setShowSearch = useSearchStore((state) => state.setShowSearch);
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
        <div className="children">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
