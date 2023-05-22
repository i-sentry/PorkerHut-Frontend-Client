import React, { useState } from "react";
import { BsTag } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { ORDER_DASHBOARD_SIDEBAR_LINKS } from "../../utils/Navigation";

interface Iprop {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  item: any;
  selectedIcon: string;
  setSelectedIcon: React.Dispatch<React.SetStateAction<string>>;
}

const linkClass =
  "flex items-center gap-2 pl-6 text-[#A2A2A2] text-base font-light  md:py-5 xxs:py-6 hover:text-[#197b30]";

const selectedLinkClass =
  "flex items-center gap-2 pl-6 text-[#197b30] border-r-[#197b30] text-base font-light  md:py-5 xxs:py-6";

const selectedLinkBorderClass = "border-r-4 border-[#197b30]";

const OrderSidebar = ({ sidebar }: any) => {
  const [selectedIcon, setSelectedIcon] = useState("");
  return (
    <div>
      <div
        className={`md:h-full md:pt-4 border-r-2 border-[#D9D9D9]   fixed w-[18%]`}
      >
        <div>
          {ORDER_DASHBOARD_SIDEBAR_LINKS.map((item: any) => (
            <SidebarLink
              key={item.key}
              item={item}
              setToggle={() => {}}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSidebar;

function SidebarLink({
  item,
  setToggle,
  selectedIcon,
  setSelectedIcon,
}: Iprop) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation();

  const toggleSubMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const isSelected = selectedIcon === item.label;

  const linkClasses = isSelected
    ? `${selectedLinkClass} ${selectedLinkBorderClass}`
    : linkClass;

  const SidebarLinkContent = () => (
    <>
      <span className="h-[18px] w-[19.99px]">{item.icon}</span>
      <span
        className={`text-[16px] leading-[19px] font-medium  ${
          isSelected ? "text-[#197B30]" : "text-[#A2A2A2]"
        }`}
      >
        {item.label}
      </span>
      <span className="h-[18px] w-[19.99px]">{item.icon_two}</span>
    </>
  );

  const SubMenu = React.memo(() => {
    return (
      <div className="pl-12 py-2 relative">
        {item.subLinks[0].subLink.map((subItem: any) => {
          const isSelected = selectedIcon === subItem.label;
          const linkClasses = isSelected
            ? "text-[#197b30] leading-[19px] font-medium border-r-[#197b30] border-r-4"
            : "text-[#A2A2A2] leading-[19px] font-medium";

          return (
            <Link
              to={subItem.path}
              key={subItem.label}
              className={`flex flex-col gap-4 py-3  ${linkClasses} `}
            >
              {subItem.label}
            </Link>
          );
        })}
      </div>
    );
  });

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
          className={linkClasses}
          onClick={() => {
            setToggle(item.label === "Products");
            setIsOpen(false);
            setSelectedIcon(item.label);
          }}
        >
          <SidebarLinkContent />
        </Link>
      )}
    </>
  );
}
