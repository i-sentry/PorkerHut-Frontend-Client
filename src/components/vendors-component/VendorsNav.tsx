import { Menu, Transition } from "@headlessui/react";
import {HiOutlineSearch} from "react-icons/hi";
import React, { Fragment } from "react";
import classNames from "classnames";

import PorkerLogo from "../../assets/images/porker.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// import { FaBars } from "react-icons/fa";
import { MdOutlineClose, MdOutlineViewHeadline } from "react-icons/md";
import { useSidebarState } from "../../store/overlay";

// interface Iprop {
//   setToggle: React.Dispatch<React.SetStateAction<boolean>>;
//   setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
//   item: any;
// }

// const linkClass =
//   "flex items-center gap-4 text-[#A2A2A2] text-base font-light px-4 md:py-4 xxs:py-6 hover:text-[#197b30] ";

const VendorsNav = () => {
  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);
  const navigate = useNavigate();

  return (
    <div className="  border-b border-[#D9D9D9] h-[80px] w-full px-4 flex items-center justify-between shadow z-50 bg-[#fff]">
      <div className="flex items-center justify-center md:gap-2 xxs:gap-3">
        <div className="lg:hidden md:block block">
          {showSideBar ? (
            <div
              onClick={() => toggleSidebar(false)}
              className=" cursor-pointer text-[#323232] "
            >
              <MdOutlineClose size={34} />
            </div>
          ) : (
            <div
              onClick={() => toggleSidebar(true)}
              className=" cursor-pointer text-[#323232] "
            >
              <MdOutlineViewHeadline size={34} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <img
            src={PorkerLogo}
            alt="logo"
            className="md:cursor-pointer xxs:h-9 md:h-12"
          />
          <h1 className="porker md:text-[30px]  xxs:text-lg  leading-[53px] text-[#197B30]  font-Roboto-slab select-none">
            Porker Hut
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between gap-20">
        <div className="lg:relative lg:flex lg:items-center lg:justify-center md:hidden hidden">
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
            {/* <HiOutlineSearch size={20} className="md:hidden" /> */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="  flex justify-between md:gap-2 gap-1">
                  <div className="flex items-center">
                    <div
                      className="md:h-12 md:w-12 xxs:h-9 xxs:w-9 rounded-full bg-cover bg-no-repeat bg-center flex"
                      style={{
                        backgroundImage:
                          'url("https://source.unsplash.com/80x80?face")',
                      }}
                    ></div>
                    <div className="lg:flex lg:flex-col lg:gap-1 md:hidden hidden">
                      <span className="text-base font-bold leading-4">
                        John Doe
                      </span>
                      <span className="text-xs font-light">Administrator</span>
                    </div>
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

export default VendorsNav;
