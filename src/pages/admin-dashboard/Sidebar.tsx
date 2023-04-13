import classNames from "classnames";
import React, { useState } from "react";
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

const SidebarLink = ({ item }: any) => {
  const [showSublinks, setShowSublinks] = useState(false);
  const { pathname } = useLocation();

  const handleSublinksToggle = () => {
    setShowSublinks((prevState) => !prevState);
  };

  const renderSublinks = () => {
    if (showSublinks && item.subLinks) {
      return (
        <ul className="px-6">
          {item.subLinks[0].subLink.map((subItem: any, index: number) => (
            <li key={index}>
              <NavLink
                to={subItem.path}
                className={classNames(
                  "flex items-center  gap-2 text-[#A2A2A2] text-base font-light px-6 md:py-3 xxs:py-6 hover:text-[#197b30]",
                  pathname === subItem.path && 
                    "border-r-4 border-r-[#197b30] text-[#197b30] rounded-l"
                )}
              >
                <span className="" />
                <span className="text-base font-normal">{subItem.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <>
      <div
        className={classNames(
          "flex items-center cursor-pointer",
          showSublinks && "bg-[#F7FAFC]"
        )}
        onClick={handleSublinksToggle}
      >
        <NavLink
          to={item.path}
          className={classNames(
            pathname === item.path &&
              "border-r-4 border-r-[#197b30] text-[#197b30] rounded-l",
            linkClass
          )}
        >
          <span className="">{item.icon}</span>
          <span className="text-base font-normal">{item.label}</span>
          {item.subLinks && item.subLinks[0].subLink && (
            <span className="ml-auto">{item.icon_two}</span>
          )}
        </NavLink>
      </div>
      {renderSublinks()}
    </>
  );
};






