import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import VendorsNav from "../components/vendors-component/VendorsNav";
import SellerSideNav from "../pages/sellers-dashboard/SellerSideNav";
import logo from "../assets/images/porkerlogo.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useGetVendorById } from "../services/hooks/Vendor";
import { BsArrowLeft } from "react-icons/bs";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { jwtDecode } from "jwt-decode";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const vendors = JSON.parse(localStorage.getItem("vendor") as string);
  const vendor = vendors?.vendor;

  const accessToken = localStorage.getItem("accessToken");

  const [vendorStatus, setVendorStatus] = useState<string>(vendor?.storeStatus);
  const { data: vInfo } = useGetVendorById(vendor?._id);

  useEffect(() => setVendorStatus(vInfo?.storeStatus), [vInfo]);

  useEffect(() => {
    const path = window.location.pathname;
    if (
      path.startsWith("/vendor") &&
      (!accessToken || accessToken === "undefined" || accessToken === null)
    ) {
      navigate("/sign-in?q=vendor");
    }
    setLoading(false);
  }, [accessToken, navigate]);

  const SESSION_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
  const SESSION_KEY = "accessToken";

  useEffect(() => {
    const checkSession = () => {
      try {
        const storedSession = localStorage.getItem(SESSION_KEY) as string;
        const decodedToken: { iat: number; exp: number } =
          jwtDecode(storedSession);

        const storedTimestamp = decodedToken?.exp * 1000;
        const currentTime = new Date().getTime();
        const sessionExpired =
          currentTime - storedTimestamp >= SESSION_DURATION;

        // Logo Out user once the session expires
        if (sessionExpired) {
          // Optionally, inform the user about the session expiry
          alert("Your session has expired. Please log in again.");
          localStorage.removeItem(SESSION_KEY);
          localStorage.removeItem("vendor");
          navigate("/sign-in?q=vendor");
        }
      } catch (error) {
        console.error("Error checking session:", error);
        // Handle the error (e.g., log it, show a user-friendly message)
      }
    };

    checkSession();
  }, [SESSION_DURATION]);

  return (
    <>
      {loading ? (
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="loaderLogo"
              className="h-20 w-20 animate-pulse"
            />
            <p className="text-[14px] leading-[24px] text-[#333333]">
              Fetching Data...
            </p>
          </div>
        </div>
      ) : (
        <div className="hide-scroll-bar h-screen w-screen overflow-x-hidden">
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
            Porker Hut Naija uses cookies to improve functionality, performance,
            and user experience. <br /> By continuing to use this site, you
            agree to the use of cookies in accordance with our{" "}
            <a href="/privacy-policy" className="text-[#197B30] underline">
              Privacy Policy
            </a>
            .
          </CookieConsent>
          <div className="relative grid h-full w-full grid-rows-[auto_1fr]">
            <div className="sticky top-0 left-0 right-0 z-[70]">
              <VendorsNav />
            </div>
            <div className="hide-scroll-bar w-full overflow-x-hidden md:flex lg:h-screen">
              <SellerSideNav />

              <div className="hide-scroll-bar relative flex-1 overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      )}

      {vendor?.storeStatus !== "approved" && (
        <div className="absolute inset-0 z-[90] min-h-[1000px] w-full items-center justify-center bg-black bg-opacity-70 p-2 pt-3 sm:fixed sm:flex sm:min-h-screen">
          <div className="relative overflow-y-auto rounded-lg bg-white p-4 md:w-[650px] lg:w-1/2 lg:p-8">
            <div className="hide-scroll-bar relative z-20">
              <h3 className="mb-4 text-left text-xl font-semibold sm:text-center md:text-2xl">
                Welcome to Porker Hut
              </h3>
              <p className="leading-relaxed">
                Welcome to PorkerHut. We are thrilled to have you on board as
                our newest vendor, and we are looking forward to a successful
                and mutually beneficial partnership. We are dedicated to
                providing an exceptional online shopping experience, and your
                unique products will undoubtedly contribute to our diverse and
                high-quality offerings. We believe that your presence will
                enhance our platform and bring fresh perspectives to our
                customers.
              </p>
              <p className="mt-4 leading-relaxed">
                Please be informed that your account status is currently
                pending, as our team diligently conducts a thorough assessment
                to ensure a seamless onboarding process for you.
              </p>
              <p className="mt-4 leading-relaxed">
                We understand the significance of this step in our partnership,
                and we want to assure you that your application is receiving the
                careful attention it deserves. We anticipate completing the
                review within the next <strong>6-12 hours</strong>, and you can
                expect a prompt response from us. Your patience during this
                period is highly valued, and we thank you for your
                understanding.
              </p>
              <p className="mt-4 leading-relaxed">
                If you have any urgent inquiries or require further
                clarification, please do not hesitate to reach out to us at{" "}
                <span className="text-green-700">porkerhut@gmail.com</span>. We
                are here to assist you and provide any necessary information.
              </p>

              <button
                onClick={() => navigate("/")}
                className="mt-2 rounded-md bg-green-700 px-6 py-2 text-white"
              >
                Go to Porkerhut.com
              </button>
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('./images/porker.jpeg')`,
                  opacity: 0.1,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {vendorStatus === "deactivated" && (
        <div className="absolute top-0 left-0 z-[90] flex h-screen w-full items-center justify-center  overflow-auto bg-black bg-opacity-50 px-4 backdrop-blur-md lg:fixed">
          <div className="relative z-[65] mx-auto mb-8 flex h-auto flex-col items-center rounded-t-lg bg-white p-5 text-center sm:w-[500px] md:mt-0 md:w-[700px] md:p-8">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full text-red-600 ring-2  ring-red-600">
              <IoCloseCircleSharp size={72} />
            </span>
            <h2 className="mb-1 mt-5 text-xl font-semibold sm:text-2xl md:text-center">
              Your account has been deactivated
            </h2>
            <p className="leading-[150%]">
              Please contact Porkerhut at{" "}
              <a
                href="mailto:info@porkerhut.com"
                className="font-medium text-green-700"
              >
                info@porkerhut.com
              </a>{" "}
              for further assistance.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;

export const clientInitails = (name: string) => {
  const value = name?.split(" ");
  let initials: string = "";
  value?.forEach((el) => {
    initials += el?.slice(0, 1);
  });

  return initials;
};
