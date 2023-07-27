import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSidebarState } from "../../store/overlay";

const SideBarLink = styled(NavLink)`
  display: flex;

  align-items: center;
  justify-items: space-between;
  padding: 28px;
  height: 60px;
  padding-top: 24px;

  &:hover {
    color: #197b30;
    cursor: pointer;
  }
  &:active {
    color: #197b30;
    font-weight: bold;
  }
`;
const SideBarLabel = styled.span`
  margin-left: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
`;

const DropDownLink = styled(Link)`
  color: #676767;
  height: 60px;
  padding-left: 3rem;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  &:hover {
    color: #0eb683;
    cursor: pointer;
  }
  &:active {
    color: #0eb683;
    font-weight: bold;
  }
`;

const Submenu = ({ item }: { item: any }) => {
  const location = useLocation();
  const [subnav, setSubnav] = useState(false);
  const toggleSideBar = useSidebarState((state) => state.toggleSidebar);

  const activeLink = `text-[#197B30] rounded-tl-lg rounded-bl-lg border-r-4 border-[#197B30] font-bold bg-[#e3f9e985]`;

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <IconContext.Provider value={{ size: "20" }}>
        <SideBarLink
          to={item.url}
          className={`border- ${
            location.pathname === item.url
              ? activeLink
              : "text-[#A2A2A2] font-light hover:cursor-pointer"
          }`}
          onClick={() => (item.subNav ? showSubnav() : toggleSideBar(false))}
        >
          <div>{item.icon}</div>
          <SideBarLabel>{item.name}</SideBarLabel>
          <div className={`ml-auto`}>
            {item.subNav && subnav
              ? item.iconOpen
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SideBarLink>
        {subnav &&
          item.subNav.map((item: any, index: any) => {
            return (
              <NavLink
                to={item.url}
                // activeClassName="active-link"
                className={` h-16 pl-1 pb-5 flex items-center hover:cursor-pointer ${
                  location.pathname === item.url ? activeLink : "text-[#A2A2A2]"
                }`}
                key={index.id}
                onClick={() => toggleSideBar(false)}
              >
                <p className="ml-14 ">{item.icon}</p>
                <SideBarLabel>{item.name}</SideBarLabel>
              </NavLink>
            );
          })}
      </IconContext.Provider>
    </>
  );
};

export default Submenu;
