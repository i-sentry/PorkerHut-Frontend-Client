import React, { ReactNode } from "react";
import NavBar from "../nav-component/NavBar";
import Footer from "../footer-component/Footer";
import { SearchBar } from "../slider-component/Slider";
import { useSearchStore } from "../../store/showSearch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsWhatsapp } from "react-icons/bs";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
interface IAppLayoutProps {
  children: ReactNode;
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  const showSearch = useSearchStore((state) => state.showSearch);
  const setShowSearch = useSearchStore((state) => state.setShowSearch);

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
        <Link
          to="https://wa.me/+2348057808076?text=Hello%20PorkerHut%20Support!"
          target="_blank"
          aria-label="Whatsapp"
          className="group fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-700"
        >
          <BsWhatsapp
            size={28}
            color="#fff"
            className="duration-300 group-hover:scale-[.85]"
          />
        </Link>
      </div>
      <CookieConsent
        location="bottom"
        cookieName="porkerHutCookies"
        declineButtonText="I decline"
        enableDeclineButton={true}
        buttonText="I understand"
        declineButtonClasses="decline"
        contentClasses="content-cookies"
        buttonClasses="accept"
        containerClasses="por items-center"
        buttonWrapperClasses="btn-wrap"
        // style={{
        //   background: "#2B373B",
        //   flexDirection: "row",
        //   display: "flex",
        // }}
        // buttonStyle={{
        //   background: "#197b30",
        //   fontSize: "16px",
        //   color: "#fff",
        // }}
        expires={30}
      >
        Porker Hut Naija uses cookies to improve functionality, performance, and
        user experience. <br /> By continuing to use this site, you agree to the
        use of cookies in accordance with our{" "}
        <a href="/privacy-policy" className="text-[#197B30] underline">
          Privacy Policy
        </a>
        .
      </CookieConsent>
      <Footer />
    </div>
  );
};

export default AppLayout;
