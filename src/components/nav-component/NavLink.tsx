import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./NavbarDropdown";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
interface Iprop {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavLink = ({ setToggle }: Iprop) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link: any, index: number) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group ">
            <div className="relative">
              <Link
                to={link?.path}
                onClick={() => {
                  heading !== link?.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                  setToggle(link?.name === "Services" ? true : false);
                }}
                className="py-7 flex justify-between md:pr-0 pr-5 hover:text-[#197B30] group  xxs:hover:bg-[#AED1B740] md:hover:bg-transparent  hover:bg-[#4a85584b] p-2 px-2 rounded-full"
              >
                <span className="flex items-center gap-4 whitespace-nowrap">
                  <span className="md:hidden">{link?.icon}</span>
                  <span className="md:link md:link--metis whitespace-nowrap">
                    {link?.name}
                  </span>
                </span>
                <span className=" md:hidden inline ">
                  {link?.subMenu === false ? (
                    ""
                  ) : heading === link?.name ? (
                    <IoChevronUp />
                  ) : (
                    <IoChevronDown />
                  )}
                </span>
                <span className=" md:mt-1 md:ml-2 hidden md:block group-hover:rotate-180">
                  {link?.subMenu === false ? "" : <IoChevronDown />}
                </span>
              </Link>
            </div>
            {link.subMenu && (
              <div>
                <div className="absolute top-[50px] hidden group-hover:md:block hover:md:block shadow-sm">
                  {/* <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-[#F5F5F5] rotate-45"></div>
                  </div> */}
                  <div className="bg-[#FFFFFF]  relative  border rounded-sm border-slate-300 p-1 w-40">
                    {link.subLinks.map((mySubLink: any, index: number) => (
                      <div key={index}>
                        {mySubLink.subLink.map((s: any, index: number) => (
                          <li
                            key={index}
                            className="text-sm text-slate-500 my-2.5 hover:font-semibold "
                          >
                            <Link
                              to={s?.link}
                              className=" hover:text-[#197B30] hover:bg-[#4a85584b] p-2  rounded-md w-full whitespace-nowrap"
                            >
                              {s?.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menu */}
          <div className={`${heading === link?.name ? "md:hidden" : "hidden"}`}>
            {link?.subLinks?.map((s: any, index: number) => (
              <div key={index}>
                <div>
                  <div>
                    {s?.subLink?.map((slink: any, index: number) => (
                      <li key={index} className="py-3 pl-14 md:hidden">
                        <Link
                          onClick={() => setToggle(false)}
                          to={slink?.link}
                          className=" flex items-center gap-4"
                        >
                          {slink?.icon}
                          {slink?.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLink;

export const HelpLink = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const helpLink = [
    {
      name: "Help",
      subMenu: true,
      icon: "",
      path: "/",
      help: [
        { name: "Help Center" },
        { name: "Track Order" },
        { name: "Cancellation of Order " },
      ],
    },
  ];
  return (
    <>
      {helpLink?.map((link: any, index: number) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group ">
            <div className="relative">
              <Link
                to={link?.path}
                // onClick={() => {
                //   heading !== link?.name
                //     ? setHeading(link.name)
                //     : setHeading("");
                //   setSubHeading("");
                //   setToggle(link?.name === "Services" ? true : false);
                // }}
                className="py-7 flex justify-between md:pr-0 pr-5 hover:text-[#197B30] group  xxs:hover:bg-[#AED1B740] md:hover:bg-transparent   md:link md:link--metis"
              >
                <span className="flex items-center gap-4 md:link md:link--metis">
                  <span className="md:hidden">{link?.icon}</span>
                  <span className="md:link md:link--metis">{link?.name}</span>
                </span>
                <span className="text-xl md:hidden inline">
                  {/* {link?.subMenu === false ? (
                    ""
                  ) : heading === link?.name ? (
                    <IoChevronUp />
                  ) : (
                    <IoChevronDown />
                  )} */}
                </span>
                <span className="text-xl md:mt-1 md:ml-2 hidden md:block group-hover:rotate-180">
                  {link?.subMenu === false ? "" : <IoChevronDown />}
                </span>
              </Link>
            </div>
            {link.subMenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-[#F5F5F5] rotate-45"></div>
                  </div>
                  <div className="bg-[#F5F5F5] p-3.5 relative">
                    {link.subLinks.map((mySubLink: any, index: number) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold ">
                          {mySubLink.head}
                        </h1>
                        {mySubLink.subLink.map((s: any, index: number) => (
                          <li
                            key={index}
                            className="text-sm text-slate-500 my-2.5"
                          >
                            <Link
                              to={s?.link}
                              className="link link--metis hover:text-[#197B30]"
                            >
                              {s?.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menu */}
          <div className={`${heading === link?.name ? "md:hidden" : "hidden"}`}>
            {link?.subLinks?.map((s: any, index: number) => (
              <div key={index}>
                <div>
                  {/* <h1
                    onClick={() =>
                      setSubHeading !== s?.head
                        ? setSubHeading(s?.head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-14 font-semibold md:pr-0 pr-5 flex justify-between items-center  md:hidden"
                  >
                    {s.head}
                  </h1> */}
                  <div>
                    {s?.subLink?.map((slink: any, index: number) => (
                      <li key={index} className="py-3 pl-14 md:hidden">
                        <Link
                          // onClick={() => setToggle(false)}
                          to={slink?.link}
                          className="hover-text-[#197B30] flex items-center gap-4"
                        >
                          {slink?.icon}
                          {slink?.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}{" "}
    </>
  );
};
