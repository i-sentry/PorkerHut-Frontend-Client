import { Outlet } from "react-router-dom";
import Navbar from "../pages/admin-dashboard/Navbar";
import Sidebar from "../components/admin-dashboard-components/Sidebar";
import ImageOverLay from "../components/admin-dashboard-components/ImageOverLay";
import { useCategoryModal, useImageOverlay } from "../store/overlay";
import CustomCatModal from "../components/admin-dashboard-components/CustomCatModal";


const AdminLayout = () => {
  const showOverlay = useImageOverlay((state) => state.showOverlay);
  const showModal = useCategoryModal((state) => state.showModal);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr] w-full h-full">
        <div className=" h-16">
          <Navbar />
        </div>
        <div className="flex h-full w-full overflow-x-hidden">
          <div className="w-60 overflow-y-scroll">
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
