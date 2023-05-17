import { Menu, Popover, Transition } from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
} from "react-icons/hi";
import React, { Fragment, useState } from "react";
import { ORDER_DASHBOARD_SIDEBAR_LINKS } from "../../utils/Navigation";
import classNames from "classnames";

import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

interface Iprop {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  item: any;
}

const linkClass =
  "flex items-center gap-4 text-[#A2A2A2] text-base font-light px-4 md:py-4 xxs:py-6 hover:text-[#197b30]";

const OrderNavbar = ({ setSidebar, sidebar }: any) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);

  const handleClose = () => {
    setShowCloseMenu(false)
  };
  

  return (
    <div className=" border border-[#D9D9D9] h-16 w-full px-4 flex items-center justify-between">
      <div className="flex items-center justify-center md:gap-2 xxs:gap-3">
        <div>
          {showCloseMenu ? (
            <MdOutlineClose
              size={20}
              onClick={handleClose}
              className="text-3xl text-textGreen cursor-pointer text-[#323232] "
            />
          ) : (
            <FaBars
              size={20}
              onClick={() => setShowCloseMenu(true)}
              className="md:hidden"
            />
          )}
          
        </div>

        <img src={PorkerLogo} alt="" className="md:cursor-pointer h-9" />
        <h1 className="porker md:text-[20px]  xxs:text-lg  leading-[53px] text-[#197B30]  font-Roboto-slab select-none">
          Porker Hut
        </h1>
      </div>

      {showCloseMenu && (
            <div className="absolute md:hidden top-0 left-0 w-full h-screen flex flex-col items-start">
              <div className="w-[80%] h-full bg-[#FFFFFF] mt-20  relative transition-all duration-100">
                <div>
                  <div>
                    <div>
                      <div>
                        {ORDER_DASHBOARD_SIDEBAR_LINKS.map((item: any) => (
                          <SidebarLink
                            key={item.key}
                            item={item}
                            setToggle={() => setShowMenu(false)}
                            setShowMenu={setShowMenu}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


      <div className="flex items-center justify-between gap-20">
        <div className="md:relative md:flex md:items-center md:justify-center xxs:hidden">
          <div className="text-[#1F1F1F] absolute top-1/2 -translate-y-1/2 left-[352px] h-9 bg-[#F4F4F4] w-10 flex items-center justify-center rounded-r-lg">
            <HiOutlineSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="text-sm focus:outline-none active:outline-none h-9 w-[350px] bg-[#F4F4F4] rounded-l-lg pl-4"
          />
        </div>

        <div className="md:pr-4">
          <div className="flex items-center justify-center gap-4">
            <HiOutlineSearch size={20} className="md:hidden" />
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="  flex items-center justify-between md:gap-2">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-no-repeat bg-center flex"
                    style={{
                      backgroundImage:
                        'url("https://source.unsplash.com/80x80?face")',
                    }}
                  ></div>
                  <div className="md:flex md:flex-col md:gap-1 xxs:hidden">
                    <span className="text-base font-bold leading-4">
                      John Doe
                    </span>
                    <span className="text-xs font-light">Administrator</span>
                  </div>

                  <div>
                    <IoIosArrowDown />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/profile")}
                        className={classNames(
                          active && "bg-gray-100",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <h1 className="text-sm">Notification Preferences</h1>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => navigate("/settings")}
                        className={classNames(
                          active && "bg-gray-100",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <h1 className="text-sm">Change Password</h1>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active && "bg-gray-100",
                          "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                        )}
                      >
                        <h1 className="text-sm">Logout</h1>
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNavbar;

function SidebarLink({ item, setToggle, setShowMenu }: Iprop) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation();

  const toggleSubMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const SidebarLinkContent = () => (
    <div className="px-4 flex gap-4 items-center">
      <span className="text-[16px] font-semibold text-[#A2A2A2]">
        {item.icon}
      </span>
      <span className="text-[16px] leading-[19px] font-medium text-[#A2A2A2]">
        {item.label}
      </span>
      <span>{item.icon_two}</span>
    </div>
  );

  const SubMenu = React.memo(() => (
    <div className="pl-12 py-2 relative">
      {item.subLinks[0].subLink.map((subItem: any) => (
        <Link
          onClick={() => {
            setShowMenu(false);
          }}
          to={subItem.path}
          key={subItem.label}
          className="text-[16px] leading-[19px] font-medium flex flex-col py-4  text-[#A2A2A2] hover:text-[#197b30]"
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
            setShowMenu(false);
          }}
        >
          <SidebarLinkContent />
        </Link>
      )}
    </>
  );
}
