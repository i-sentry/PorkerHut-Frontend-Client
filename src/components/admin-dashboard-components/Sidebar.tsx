import { AdminSideBarLink } from "../../utils/Navigation";
import Submenu from "./Submenu";

const Sidebar = () => {
  return (
    <aside
      className={`md:flex fixed md:relative top-0 left-0   md:bg-[#fff] w-60 md:border-r text-[#A2A2A2]   h-screen flex-col  p-7 md:p-0 transition-all duration-500`}
    >
      {AdminSideBarLink.map((item, index) => {
        return <Submenu item={item} key={index} />;
      })}
    </aside>
  );
};

export default Sidebar;
