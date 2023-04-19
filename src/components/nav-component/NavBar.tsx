import { Fragment, useContext } from "react";
import classNames from "classnames";
import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import SearchLogo from "../../assets/images/SearchLogo.svg";
import CartLogo from "../../assets/images/CartLogo.svg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { HamburgerMenuIcon } from "../../assets/icons";
import {
  IoIosHelpCircleOutline,
  IoMdClose,
  IoMdHeartEmpty,
  IoMdHelpCircleOutline,
  IoMdMenu,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import NavLink, { HelpLink } from "./NavLink";
import NavButton from "./NavButton";
import Ripples from "react-ripples";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { Menu, Transition } from "@headlessui/react";
import { ImDownload } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdCancelScheduleSend, MdSendAndArchive } from "react-icons/md";
import AuthContext from "../../context/AuthProvider";
// import { useAuth } from "../../context/AuthProvider";

import Cookies from "js-cookie";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [toggle, setToggle] = useState(false);
  //@ts-ignore
  const { auth, isLogin } = useContext(AuthContext);
  console.log(auth, "auth");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const cart = useSelector((state: RootState) => state.product.cart);

  const navigate = useNavigate();

  const handleClickOutsideDropdown = (e: any) => {
    if (open && dropdownRef.current?.contains(e.target as Node)) {
      setOpen(true);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== dropdownRef.current) {
        setOpen(false);
      }
    });
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("accessToken");
    Cookies.remove("accessToken");
  };
  console.log(isLogin, "isLogin");
  return (
    <div className="bg-white fixed xxs:h-20 top-0 w-full z-50 shadow-md md:py-0 px-[4%]">
      <nav className="md:flex h-full  items-center font-medium justify-between">
        {/* Menu Btn */}

        <div className="z-50 h-full  md:w-auto w-full flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setToggle(!toggle)}
              className="text-3xl md:hidden flex"
            >
              {toggle ? <IoMdClose size={38} /> : <IoMdMenu size={38} />}
            </button>
            <div className="flex items-center gap-2 cursor-pointer select-none">
              <img src={PorkerLogo} alt="" className="md:cursor-pointer h-9" />
              <h1 className="porker text-xl font-bold text-[#197B30]  font-Roboto-slab select-none">
                Porker Hut
              </h1>
            </div>
          </div>
          <div className="action-btns flex items-center gap-3 ml-auto  md:hidden">
            <button className=" p-[6px] rounded w-8 ">
              <img className="w-6" src={SearchLogo} alt="" />
            </button>
            <button
              className="  p-[6px] rounded w-8 "
              onClick={() => navigate("/my-cart")}
            >
              <img className="w-6" src={CartLogo} alt="" />
              <span className="flex justify-center items-center w-[15px] h-[15px] bg-emerald-500 text-white absolute top-5 right-2 rounded-full text-xs">
                {Object.values(cart).length}
              </span>
            </button>
          </div>
          <ul className="md:flex font-normal hidden items-center text-sm  ">
            <NavLink setToggle={setToggle} />
          </ul>
        </div>

        <div className="md:flex  hidden gap-2">
          <div className="action-btns flex gap-3 ml-auto mr-4 ">
            <button className=" p-[6px] rounded w-8">
              <img className="w-6" src={SearchLogo} alt="" />
            </button>
            <button
              className=" p-[6px] rounded w-8 relative"
              onClick={() => navigate("/my-cart")}
            >
              <img className="w-6" src={CartLogo} alt="" />
              <span className="flex justify-center items-center w-[15px] h-[15px] bg-emerald-500 text-white absolute top-0 right-0 rounded-full text-xs">
                {Object.values(cart).length}
              </span>
            </button>
          </div>
          <>
            {!isLogin ? (
              <>
                <NavButton className={loginBtn} text="Login" path="/login" />
                <NavButton
                  className={signUpBtn}
                  text="Sign Up"
                  path="/sign-up"
                />
              </>
            ) : (
              <>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center mt-2">
                    <HiOutlineUserCircle size={22} />
                    <p className="pl-1 text-[#333333] text-sm">
                      Hi, {auth?.data?.firstName}
                    </p>
                    <span className="rotate-180">
                      <RxCaretDown />
                    </span>
                    {/* <RxCaretUp /> */}
                  </Menu.Button>
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
                              "active:bg-gray-200 rounded-sm px-4 py-2  cursor-pointer focus:bg-gray-200"
                            )}
                          >
                            <h1 className="text-sm text-[#333333] font-light flex items-center gap-3">
                              <HiOutlineUserCircle size={24} />
                              My Account
                            </h1>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => navigate("/my__orders")}
                            className={classNames(
                              active && "bg-gray-100",
                              "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                            )}
                          >
                            <h1 className="ext-sm text-[#333333] font-light flex items-center gap-3">
                              <ImDownload size={24} />
                              My Order
                            </h1>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-gray-100",
                              "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                            )}
                          >
                            <h1 className="text-sm text-[#333333] font-light flex items-center gap-3">
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
                              "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200 border-[#197B30] border-t flex w-full"
                            )}
                          >
                            <h1
                              onClick={handleLogout}
                              className="text-sm text-[#197B30]  text-center flex"
                            >
                              Logout
                            </h1>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center mt-2">
                    <IoMdHelpCircleOutline size={22} />
                    <p className="pl-1 text-[#333333] text-sm"> Help</p>
                    <span className="rotate-180">
                      <RxCaretDown />
                    </span>
                  </Menu.Button>
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
                              "active:bg-gray-200 rounded-sm px-4 py-2  cursor-pointer focus:bg-gray-200"
                            )}
                          >
                            <h1 className="text-sm text-[#333333] font-light flex items-center gap-3">
                              <FaHandsHelping size={23} />
                              Help Center
                            </h1>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => navigate("/settings")}
                            className={classNames(
                              active && "bg-gray-100",
                              "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                            )}
                          >
                            <h1 className="ext-sm text-[#333333] font-light flex items-center gap-3">
                              <MdSendAndArchive size={23} />
                              Tracking Orders
                            </h1>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-gray-100",
                              "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200"
                            )}
                          >
                            <h1 className="text-sm text-[#333333] font-light flex items-center gap-3">
                              <TbTruckReturn size={23} />
                              Return Order
                            </h1>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-gray-100",
                              "active:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer focus:bg-gray-200  flex w-full"
                            )}
                          >
                            <h1 className="text-sm text-[#197B30]  text-center flex">
                              <MdCancelScheduleSend size={23} />
                              <span className="m-auto">Order Cancellation</span>
                            </h1>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            )}
          </>
        </div>

        {/* Mobile */}
        <ul
          className={`md:hidden bg-[#F5F5F5] fixed  top-[76px] w-full h-screen overflow-y-auto bottom-0 py-4 pl-4
        duration-500  ${toggle ? "  left-0" : " left-[-100%]"}`}
        >
          {/* <li>
            <Link to={""} className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <NavLink setToggle={setToggle} />
          {/* <HelpLink/> */}
          <div className="flex flex-col md:hidden gap-2 pr-4">
            <NavButton className={loginBtn} text="Login" path="/login" />

            <NavButton className={signUpBtn} text="Sign Up" path="/sign-up" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

const signUpBtn =
  "border border-[#479559] text-sm md:py-2 xxs:py-3 px-[30px] rounded-md text-[#fff] bg-[#479559] hover:bg-white hover:text-[#479559] md:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-[#479559] text-sm md:py-2 xxs:py-3 px-[35px] rounded-md text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
