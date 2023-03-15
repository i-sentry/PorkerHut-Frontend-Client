import classNames from "classnames";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ADMIN_DASHBOARD_SIDEBAR_LINK } from "../../utils/Navigation";

type SidebarProps = {
  key: string;
  label: string;
  path: string;
  icon: React.ReactElement;
};

const linkClass =
  "flex items-center  gap-2 text-[#A2A2A2] text-base font-light px-6 md:py-3 xxs:py-6 hover:text-[#197b30]";

const Sidebar = () => {
  return (
    <div className="flex flex-col py-4">
      {ADMIN_DASHBOARD_SIDEBAR_LINK.map((item) => (
       <SidebarLink key={item.key} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;


const SidebarLink = ({item}: any) => {

  const {pathname} = useLocation()
  return (
    <NavLink
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "border-r-4 border-r-[#197b30] text-[#197b30] rounded-l"
          : "text-[#A2A2A2]",
        linkClass
      )}
    >
      <span className="">{item.icon}</span>
      <span className="text-base font-normal">{item.label}</span>
    </NavLink>
  );
}
