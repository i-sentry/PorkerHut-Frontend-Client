import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ORDER_DASHBOARD_SIDEBAR_LINKS } from "../../utils/Navigation";

interface Iprop {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  item: any
}

const linkClass =
  "flex items-center gap-4 text-[#A2A2A2] text-base font-light px-6 py-4 hover:text-[#197b30]";

const OrderSidebar = () => {
  return (
    <div className=" bg-white h-full pt-4 border-r border-slate-400 overflow-y-auto w-60">
      <div>
        {ORDER_DASHBOARD_SIDEBAR_LINKS.map((item: any) => (
          <SidebarLink key={item.key} item={item} setToggle={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          } } />
        ))}
      </div>
    </div>
  );
};

export default OrderSidebar;

function SidebarLink({ item, setToggle }: Iprop) {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const pathname = useLocation();

  function classNames(): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <Link to={item.path} className={linkClass}
      onClick={() => {
        heading !== item.label
          ? setHeading(item.label)
          : setHeading("");
        setSubHeading("");
        setToggle(item.label === "Products" ? true : false);

    }}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
      {item.icon_two}
      
    </Link>
  );
}
