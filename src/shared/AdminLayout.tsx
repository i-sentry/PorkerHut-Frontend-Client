import { Outlet } from "react-router-dom";
import AdminDashboard from "../pages/admin-dashboard/AdminDashboard";
import Navbar from "../pages/admin-dashboard/Navbar";
import Sidebar from "../pages/admin-dashboard/Sidebar";

const AdminLayout = () => {
  return (
    <div className="h-screen w-screen ">
      <div className="bg-teal-200 h-16">
        <Navbar />
      </div>
      <div className="flex">
        <div className=" flex-[1]  mb-2 border-r-2">
          <Sidebar />
        </div>

        <div className="flex-[5]">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
