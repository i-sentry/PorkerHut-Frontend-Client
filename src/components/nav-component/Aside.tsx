import { Fragment } from "react";
import React, { useEffect, useState } from "react";
import { useSidebarState } from "../../store/overlay";
import Submenu from "../../components/admin-dashboard-components/Submenu";
import { MainSideBarLinks } from "../../utils/Navigation";
import NavButton from "./NavButton";
import { MdOutlinePerson } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { ImDownload } from "react-icons/im";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

interface User {
  firstName: string;
}

const Aside = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  const toggleSideBar = useSidebarState((state) => state.toggleSidebar);
  const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState(null);

  const navigate = useNavigate();
  // const [temp, setTemp] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (route: string) => {
    toggleSideBar(false);
    navigate(route);
  };

  useEffect(() => {
    //@ts-ignore
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser !== null) {
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    // setTemp(true);
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("user");
  };

  return (
    <div
      className={`hide-scroll-bar fixed top-0 left-0 z-40 h-screen w-[284px] flex-col overflow-auto border-r bg-[#EEEEEE]  py-[64px] transition-all duration-500  md:top-0 lg:relative  lg:top-0 lg:flex lg:bg-white ${
        !sideBarOpen ? "-translate-x-full lg:translate-x-0" : ""
      }`}
    >
      {user !== null && (
        <>
          <div className="my-7 flex items-center gap-2 pl-5">
            <MdOutlinePerson size={24} color={"#197b30"} />
            <span className="whitespace-nowrap pl-1 text-[18px] font-normal leading-[21px] text-[#333333]">
              Hi,{" "}
              {user?.firstName
                ? user.firstName.charAt(0).toUpperCase() +
                  user.firstName.slice(1)
                : ""}
            </span>
            {isOpen ? (
              <BiChevronUp
                className="cursor-pointer"
                size={20}
                onClick={toggleDropdown}
              />
            ) : (
              <BiChevronDown
                className="cursor-pointer"
                size={20}
                onClick={toggleDropdown}
              />
            )}
          </div>

          <Menu as="div" className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              show={isOpen}
            >
              <Menu.Items className="absolute right-4 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => handleMenuClick("/profile")}
                      className={classNames(
                        active && "bg-gray-100",
                        "cursor-pointer rounded-sm px-4 py-2  focus:bg-gray-200 active:bg-gray-200",
                      )}
                    >
                      <h1 className="flex items-center gap-3  text-[14px] font-normal leading-[16px] text-[#333333]">
                        <HiOutlineUserCircle size={24} />
                        My Account
                      </h1>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => handleMenuClick("/my__orders")}
                      className={classNames(
                        active && "bg-gray-100",
                        "cursor-pointer rounded-sm px-4 py-2 focus:bg-gray-200 active:bg-gray-200",
                      )}
                    >
                      <h1 className="flex items-center gap-3 text-[14px]  font-normal leading-[16px] text-[#333333]">
                        <ImDownload size={24} />
                        My Order
                      </h1>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => handleMenuClick("/favorite+products")}
                      className={classNames(
                        active && "bg-gray-100",
                        "cursor-pointer rounded-sm px-4 py-2 focus:bg-gray-200 active:bg-gray-200",
                      )}
                    >
                      <h1 className="flex items-center gap-3 text-[14px]  font-normal leading-[16px] text-[#333333]">
                        <IoMdHeartEmpty size={24} />
                        My Favorites
                      </h1>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active && "bg-gray-100",
                        "group flex w-full cursor-pointer rounded-sm border-t border-[#197B30] px-4 py-2 hover:bg-[#197B30]  active:bg-gray-200",
                      )}
                    >
                      <h1
                        onClick={handleLogout}
                        className="flex w-full justify-center text-[14px] font-normal leading-[16px] text-[#197B30] group-hover:text-[#fff]"
                      >
                        Logout
                      </h1>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      )}

      {/* <div className="flex items-center pl-5 my-7 gap-1">
        <MdOutlinePerson size={24} color={"#197b30"} />
        <span className="pl-1 text-[#333333] text-[18px] leading-[21px] font-normal whitespace-nowrap">

          Hi, {user?.firstName}
        </span>
      </div> */}

      {MainSideBarLinks?.map((item, index) => {
        //@ts-ignore
        return (
          <>
            <Submenu item={item} key={index} />
          </>
        );
      })}
      {user === null && (
        <div className="mt-4 flex flex-col gap-3 px-5 pr-4 lg:hidden">
          <NavButton className={signUpBtn} text="Sign Up" path="/sign-up" />
          <NavButton className={loginBtn} text="Login" path="/login" />
        </div>
      )}
    </div>
  );
};

export default Aside;

const signUpBtn =
  "border border-[#197B30] text-sm lg:py-2 xxs:py-3.5 px-[30px] rounded-sm text-[#fff] bg-[#197B30] hover:bg-white hover:text-[#479559] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-[#197B30] text-sm lg:py-2 xxs:py-3.5 px-[35px] rounded-sm text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
