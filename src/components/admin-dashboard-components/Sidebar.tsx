import { AdminSideBarLink } from "../../utils/Navigation";
import Submenu from "./Submenu";

const Sidebar = () => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-60   flex-col p-7 text-[#A2A2A2] transition-all   duration-500 md:relative  md:flex md:border-r md:bg-[#fff] md:p-0`}
    >
      {AdminSideBarLink.map((item, index) => {
        return <Submenu item={item} key={index} />;
      })}
    </aside>
  );
};

export default Sidebar;
