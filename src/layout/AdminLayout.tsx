import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../pages/admin-dashboard/Navbar";
import Sidebar from "../components/admin-dashboard-components/Sidebar";
import ImageOverLay from "../components/admin-dashboard-components/ImageOverLay";
import { useCategoryModal, useImageOverlay } from "../store/overlay";
import CustomCatModal from "../components/admin-dashboard-components/CustomCatModal";
import logo from "../assets/images/porkerlogo.png";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const showOverlay = useImageOverlay((state) => state.showOverlay);
  const showModal = useCategoryModal((state) => state.showModal);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  const admin = JSON.parse(localStorage.getItem("admin") as string);
  useEffect(() => {
    const path = window.location.pathname;
    if (
      path.startsWith("/admin") &&
      (!accessToken || accessToken === "undefined" || accessToken === null) &&
      !admin?.isAdmin
    ) {
      navigate("/admin-login");
    }
    setLoading(false);
  }, [accessToken, admin?.isAdmin, navigate]);

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
        <div className="h-screen w-screen overflow-x-hidden">
          <div className="grid h-full w-full grid-rows-[auto_1fr]">
            <div className=" h-16">
              <Navbar />
            </div>
            <div className="flex h-full w-full overflow-x-hidden">
              <div className="hide-scroll-bar overflow-y-scroll md:border-r">
                <Sidebar />
              </div>
              <div className="flex-1 overflow-y-scroll">
                <main className="relative">{<Outlet />}</main>
              </div>
            </div>
          </div>
          {showOverlay && <ImageOverLay />}
          {showModal && <CustomCatModal />}
        </div>
      )}
    </>
  );
};

export default AdminLayout;
