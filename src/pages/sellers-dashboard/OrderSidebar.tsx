 import React, { useState } from "react";
import { BsTag } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { ORDER_DASHBOARD_SIDEBAR_LINKS } from "../../utils/Navigation";

interface Iprop {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  item: any;
}

const linkClass = "flex items-center gap-4 text-[#A2A2A2] text-base font-light px-4 md:py-4 xxs:py-6 hover:text-[#197b30]";

const OrderSidebar = ({ sidebar }: any) => {
  return (
   < div>
      <div
        className={`${
          sidebar
            ? "left-0  xxs:h-full transform transition-all duration-300 ease-in-out"
            : " md:left-0"
        } first-letter: md:h-full md:pt-4 border-r md:border-slate-400 md:overflow-y-auto md:block xxs:fixed md:bg-white xxs:bg-white xxs:opacity-100`}
      >
        <div>
          {ORDER_DASHBOARD_SIDEBAR_LINKS.map((item: any) => (
            <SidebarLink
              key={item.key}
              item={item}
              setToggle={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSidebar;

function SidebarLink({ item, setToggle }: Iprop) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation();

  const toggleSubMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const SidebarLinkContent = () => (
    <>
      <span className="text-base font-normal">{item.icon}</span>
      <span className="text-base font-normal">{item.label}</span>
      <span>{item.icon_two}</span>
    </>
  );

  const SubMenu = React.memo(() => (
    <div className="pl-12 py-2 relative">
      {item.subLinks[0].subLink.map((subItem: any) => (
        <Link
          to={subItem.path}
          key={subItem.label}
          className="text-sm flex flex-col gap-4 font-light text-gray-600 py-2 hover:text-[#197b30]"
        >
          {subItem.label}
        </Link>
      ))}
    </div>
  ));

  return (
    <>
      {item.label === "Products" ? (
        <div>
          <button type="button" onClick={toggleSubMenu} className={linkClass}>
            <SidebarLinkContent />
          </button>
          {isOpen && <SubMenu />}
        </div>
      ) : (
        <Link
          to={item.path}
          className={linkClass}
          onClick={() => {
            setToggle(item.label === "Products");
            setIsOpen(false);
          }}
        >
          <SidebarLinkContent />
        </Link>
      )}
    </>
  );
}
