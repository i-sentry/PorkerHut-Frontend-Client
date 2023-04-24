import { DashBoardData } from "../../utils/Navigation";
import Submenu from "./Submenu";

const Sidebar = () => {
  return (
    <aside
      className={`md:flex fixed md:relative top-0 left-0  bg-[#0c0d1f] md:bg-[#fff] w-60 md:border-r text-gray-200 md:text-[#071827]  h-screen flex-col  p-7 md:p-0 transition-all duration-500`}
    >
      {DashBoardData.map((item, index) => {
        //@ts-ignore
        return <Submenu item={item} key={index} />;
      })}
    </aside>
  );
};

export default Sidebar;
