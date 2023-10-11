import React from "react";
import { BsShopWindow, BsTag } from "react-icons/bs";
import {
  // RiArrowDownSLine,
  RiCalendar2Line,
  RiFileDownloadLine,
} from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { TfiCreditCard } from "react-icons/tfi";
import { HiChartBar, HiOutlineUserGroup } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineAnalytics,
  MdOutlineArchive,
  MdOutlineArticle,
  MdOutlineDashboard,
  MdOutlineDns,
  MdOutlineMessage,
  MdShare,
  MdStorefront,
} from "react-icons/md";
import { FaPaw, FaShuttleVan } from "react-icons/fa";
// import { CgLoadbarDoc } from "react-icons/cg";
import { GoTag } from "react-icons/go";
import { AiOutlineSound, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { BsBoxSeam } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { ImBlog } from "react-icons/im";
// import { GiPig } from "react-icons/gi";
// import { BiHealth } from "react-icons/bi";
// import { TbMeat } from "react-icons/tb";
import { RiHandHeartLine, RiContactsLine, RiBook3Line } from "react-icons/ri";



export const vendorsSideBarLink = [
  {
    id: 0,
    name: "Home",
    url: "/vendor",
    icon: <BsShopWindow size={20} />,
  },
  {
    id: 1,
    name: "Orders",
    url: "/vendor/order",
    icon: <RiFileDownloadLine size={20} />,
  },
  {
    id: 2,
    name: "Products",
    url: "/vendor/products",
    icon: <BsTag size={20} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Manage Products",
        url: "/vendor/products",
      },
      {
        id: 1,
        name: "Manage Product Images",
        url: "/vendor/product/manage",
      },
    ],
  },
  {
    id: 3,
    name: "Create Products",
    url: "/vendor/create",
    icon: <FiFolderPlus size={20} />,
  },
  {
    id: 4,
    name: "Account Statement",
    url: "/vendor/account+statement",
    icon: <TfiCreditCard size={20} />,
  },
  {
    id: 5,
    name: "Performance",
    url: "/vendor/performance",
    icon: <HiChartBar size={20} />,
  },
  {
    id: 6,
    name: "Settings",
    url: "/vendor/settings",
    icon: <IoSettingsOutline size={20} />,
  },
];

export const AdminSideBarLink = [
  {
    id: 0,
    name: "Overview",
    url: "/admin",
    icon: <MdOutlineDashboard width={"20px"} height={"20px"} />,
  },
  {
    id: 1,
    name: "Order",
    url: "/admin/order",
    icon: <MdOutlineArchive width={"24px"} height={"24px"} />,
  },
  {
    id: 2,
    name: "Customers",
    url: "/admin/customers",
    icon: <HiOutlineUserGroup width={"20px"} height={"20px"} />,
  },
  {
    id: 3,
    name: "Analytics",
    url: "/admin/analytics",
    icon: (
      <MdOutlineAnalytics width={"20px"} height={"20px"} stroke="#5C6F7F" />
    ),
  },
  {
    id: 4,
    name: "Stores",
    url: "/admin/stores",
    icon: <MdStorefront width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Store Profiles",
        url: "/admin/stores",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 1,
        name: "New Stores",
        url: "/admin/stores/new",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
    ],
  },
  {
    id: 5,
    name: "Vet Partner",
    url: "/admin/vet",
    icon: <FaPaw width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Vets",
        url: "/admin/vet",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 1,
        name: "New Vets",
        url: "/admin/vet/new",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
    ],
  },
  {
    id: 6,
    name: "Logistic Service",
    url: "/admin/logistic",
    icon: <FaShuttleVan width={"20px"} height={"20px"} />,
  },
  {
    id: 7,
    name: "Calendar",
    url: "/admin/calender",
    icon: <RiCalendar2Line width={"20px"} height={"20px"} />,
  },
  {
    id: 8,
    name: "Blog",
    url: "/admin/blog",
    icon: <MdOutlineArticle width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Blog Post",
        url: "/admin/blog",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 1,
        name: "Create Blog",
        url: "/admin/blog/create",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
    ],
  },
  {
    id: 9,
    name: "Announcement",
    url: "/admin/announcement",
    icon: <AiOutlineSound width={"20px"} height={"20px"} />,
  },
  {
    id: 10,
    name: "Payments",
    url: "/admin/payment/invoice",
    icon: <TfiCreditCard width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Payment Invoice",
        url: "/admin/payment/invoice",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 1,
        name: "Payment Tracker",
        url: "/admin/payment/tracker",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
    ],
  },
  {
    id: 11,
    name: "Manage Category",
    url: "/admin/manage+category",
    icon: <MdOutlineDns width={"20px"} height={"20px"} />,

  },
  {
    id: 12,
    name: "Services",
    url: "/admin/service/agro_service",
    icon: <MdShare width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Agro Services",
        url: "/admin/service/agro_service",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 1,
        name: "Vet Services",
        url: "/admin/service/vet",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 2,
        name: "Weekend Kill",
        url: "/admin/service/weekend_kill",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
    ],
  },
  {
    id: 13,
    name: "Product Created",
    url: "/admin/products",
    icon: <GoTag width={"20px"} height={"20px"} />,
  },
  {
    id: 14,
    name: "Messages",
    url: "/dashboard/settings",
    icon: <MdOutlineMessage width={"20px"} height={"20px"} />,
  },
  {
    id: 15,
    name: "Settings",
    url: "/admin/settings",
    icon: <IoSettingsOutline width={"20px"} height={"20px"} />,
  },
];

export const MainSideBarLinks = [
  {
    id: 0,
    name: "Home",
    url: "/",
    icon: <IoHomeOutline width={"20px"} height={"20px"} />,
  },
  {
    id: 1,
    name: "Products",
    icon: <BsBoxSeam width={"20px"} height={"20px"} />,
    url: "/products",
  },
  {
    id: 2,
    name: "Services",
    url: "",
    icon: <RiHandHeartLine width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Agro Services",
        url: "/services/agro-services",
      },
      {
        id: 1,
        name: "Vet Services",
        url: "services/vet-services",
      },
      {
        id: 2,
        name: "Weekend Kill",
        url: "/services/weekend-kills",
      },
    ],
  },
  {
    id: 3,
    name: "About Us",
    url: "/about-us",
    icon: <RiBook3Line width={"20px"} height={"20px"} />,
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
    icon: <ImBlog width={"20px"} height={"20px"} />,
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact-us",
    icon: <RiContactsLine width={"20px"} height={"20px"} />,
  },
  {
    id: 6,
    name: "Help",
    url: "",
    icon: <AiOutlineQuestionCircle width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Help Center",
        url: "/contact-us",
      },
      {
        id: 1,
        name: "Tracking Orders",
        url: "/tracking+order",
      },
      {
        id: 2,
        name: "Return Order",
        url: "/return+order",
      },
      {
        id: 3,
        name: "Order Concellation",
        url: "/order+cancel",
      },
    ],
  },
];
