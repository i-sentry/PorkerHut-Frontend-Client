import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { ImBlog } from "react-icons/im";
import { GiPig } from "react-icons/gi";
import { BiHealth } from "react-icons/bi";
import { TbMeat } from "react-icons/tb";
import { RiHandHeartLine, RiContactsLine, RiBook3Line } from "react-icons/ri";

export const links = [
  {
    name: "Home",
    subMenu: false,
    icon: <IoHomeOutline size={20} />,
    path: "/",
  },
  {
    name: "Products",
    subMenu: false,
    icon: <BsBoxSeam size={20} />,
    path: "/products",
  },
  {
    name: "Services",
    subMenu: true,
    path: "",
    icon: <RiHandHeartLine />,
    subLinks: [
      {
        head: "We Offer",
        subLink: [
          {
            name: "Agro Services",
            link: "/services?service=agro-service",
            icon: <GiPig size={20} />,
          },
          {
            name: "Veterinary Services",
            link: "/services?service=veterinary-services",
            icon: <BiHealth size={20} />,
          },
          {
            name: "Weekend Kills",
            link: "/services?service=weekend-kills",
            icon: <TbMeat size={20} />,
          },
        ],
      },
    ],
  },
  {
    name: "About-Us",
    subMenu: false,
    path: "/about-us",
    icon: <RiBook3Line size={20} />,
  },
  {
    name: "Blog",
    subMenu: false,
    path: "/blog",
    icon: <ImBlog size={20} />,
  },
  {
    name: "Contact",
    subMenu: false,
    path: "/contact-us",
    icon: <RiContactsLine size={20} />,
  },
];
