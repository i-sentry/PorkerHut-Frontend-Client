import PorkerLogo from "../../assets/images/PorkerLogo.svg";
import SearchLogo from "../../assets/images/SearchLogo.svg";
import CartLogo from "../../assets/images/CartLogo.svg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { HamburgerMenuIcon } from "../../assets/icons";
import { IoIosHelpCircleOutline, IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import NavButton from "./NavButton";
import { FiMenu } from "react-icons/fi";
// import { BiSearchAlt2 } from 'react-icons/bi'
// import { BsCart4 } from 'react-icons/bs'

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [toggle, setToggle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

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

  return (
    <div className="bg-white fixed top-0 w-full z-50 ">
      <nav className="md:flex  items-center font-medium justify-around">
        {/* Menu Btn */}

        <div className="z-50 p-5 md:w-auto w-full flex items-center gap-4">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-3xl md:hidden flex"
          >
            {toggle ? <IoMdClose size={38} /> : <IoMdMenu size={38} />}
          </button>
          <div className="flex items-center">
            <img src={PorkerLogo} alt="" className="md:cursor-pointer h-9" />
            <h1 className="porker text-xl font-bold text-[#197B30] pt-1 font-Roboto-slab">
              Porker Hut
            </h1>
          </div>
        </div>

        <ul className="md:flex hidden uppercase items-center gap-8 font-semibold">
          <li>
            <Link to={""} className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLink />
        </ul>
        <div className="md:flex  hidden">
          <NavButton className={loginBtn} text="Login" path="/login" />
          <NavButton className={signUpBtn} text="Sign Up" path="/sign-up" />
        </div>

        {/* <div className="action-btns flex gap-3 ml-auto mr-4">
          <button className=" p-[6px] rounded w-8">
            <img className="w-6" src={SearchLogo} alt="" />
          </button>
          <button className=" p-[6px] rounded w-8">
            <img className="w-6" src={CartLogo} alt="" />
          </button>
        </div> */}

        {/* Mobile */}
        <ul
          className={`md:hidden bg-[#F5F5F5] fixed  top-20 w-full h-screen overflow-y-auto bottom-0 py-24 pl-4
        duration-500  ${toggle ? "  left-0" : " left-[-100%]"}`}
        >
          <li>
            <Link to={""} className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLink />
        </ul>
      </nav>

      {/* <button
        className="bg-slate-50 p-[6px] rounded lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <HamburgerMenuIcon />
      </button> */}
    </div>
  );
};

export default NavBar;

const signUpBtn =
  "border border-[#479559] text-sm py-2 px-[30px] rounded-md text-[#fff] bg-[#479559] hover:bg-white hover:text-[#479559] md:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-[#479559] text-sm py-3 px-[35px] rounded-md text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
