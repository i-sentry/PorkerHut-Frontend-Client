import React from "react";
import { Link } from "react-router-dom";
import { links } from "./NavbarDropdown";

const NavLink = () => {
  return (
    <>
      {links.map((link: any) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-7">{link?.name}</h1>
            {link.subMenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-[#F5F5F5] rotate-45"></div>
                  </div>
                  <div className="bg-[#F5F5F5] p-3.5">
                    {link.subLinks.map((mySubLink: any) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mySubLink.head}
                        </h1>
                        {mySubLink.subLink.map((s: any) => (
                          <li className="text-sm text-slate-500 my-2.5">
                            <Link to={s?.link} className="hover:text-[#197B30]">
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
          <div>
            {/* {link.subLinks.map((s: any) => (
              <div>
                <div>
                  <h1>{ s.head}</h1>
                </div>
              </div>
            ))} */}
          </div>

        </div>
      ))}
    </>
  );
};

export default NavLink;
