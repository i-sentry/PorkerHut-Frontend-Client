import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../pages/admin-dashboard/Navbar";
import Sidebar from "../components/admin-dashboard-components/Sidebar";
import ImageOverLay from "../components/admin-dashboard-components/ImageOverLay";
import { useCategoryModal, useImageOverlay } from "../store/overlay";
import CustomCatModal from "../components/admin-dashboard-components/CustomCatModal";
import { useEffect } from "react";


const AdminLayout = () => {
  const navigate = useNavigate()
  const showOverlay = useImageOverlay((state) => state.showOverlay);
  const showModal = useCategoryModal((state) => state.showModal);

   const accessToken = localStorage.getItem("accessToken");

useEffect(() => {
  const path = window.location.pathname;
  if ((path.startsWith("/admin") ) && (!accessToken || accessToken === "undefined" || accessToken === null)) {

    navigate("/admin-login");
  }
}, [accessToken, navigate]);


  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr] w-full h-full">
        <div className=" h-16">
          <Navbar />
        </div>
        <div className="flex h-full w-full overflow-x-hidden">
          <div className="w-80 overflow-y-scroll hide-scroll-bar">
            <Sidebar />
          </div>
          <div className="flex-1 overflow-y-scroll">
            <main>{<Outlet />}</main>
          </div>
        </div>
      </div>
      {showOverlay && <ImageOverLay />}
      {showModal && <CustomCatModal />}
    </div>
  );
};

export default AdminLayout;
