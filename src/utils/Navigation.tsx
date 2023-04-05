import React from "react"
import { BsShopWindow, BsTag } from "react-icons/bs";
import { RiArrowDownSLine, RiCalendar2Line, RiFileDownloadLine } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { TfiCreditCard } from "react-icons/tfi";
import { HiChartBar, HiOutlineUserGroup } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAnalytics, MdOutlineArchive, MdOutlineDashboard, MdOutlineMessage, MdShare, MdStorefront } from "react-icons/md";
import { FaPaw, FaShuttleVan } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { AiOutlineSound } from "react-icons/ai";



export const ORDER_DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "/sellers-dashboard/home",
    icon: <BsShopWindow />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/sellers-dashboard/order",
    icon: <RiFileDownloadLine />,
  },
  {
    key: "products",
    label: "Products",
    path: "/sellers-dashboard/product",
    icon: <BsTag />,
    icon_two: <RiArrowDownSLine />,
    subLinks: [
      {
        subLink: [
          {
            label: "Manage Products",
            path: "/sellers-dashboard/product",
          },
          {
            label: "Manage Product Images",
            path: "/sellers-dashboard/product/manage-product-images",
          },
        ],
      },
    ],
  },
  {
    key: "create Products",
    label: "Create Products",
    path: "/sellers-dashboard/create-product",
    icon: <FiFolderPlus />,
  },
  {
    key: "account statement",
    label: "Account Statement",
    path: "/sellers-dashboard/account",
    icon: <TfiCreditCard />,
  },
  {
    key: "performance",
    label: "Performance",
    path: "/sellers-dashboard/performance",
    icon: <HiChartBar />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/sellers-dashboard/setting",
    icon: <IoSettingsOutline />,
  },
];


export const ADMIN_DASHBOARD_SIDEBAR_LINK = [
  {
    key: "overview",
    label: "Overview",
    path: "/admin-dashboard/overview",
    icon: <MdOutlineDashboard />,
  },
  {
    key: "order",
    label: "Order",
    path: "/admin-dashboard/admin-order",
    icon: <MdOutlineArchive />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/admin-dashboard/customers",
    icon: <HiOutlineUserGroup />,
  },
  {
    key: "analytics",
    label: "Analytics",
    path: "/admin-dashboard/analytics",
    icon: <MdOutlineAnalytics />,
  },
  {
    key: "stores",
    label: "Stores",
    path: "/admin-dashboard/stores",
    icon: <MdStorefront />,
  },
  {
    key: "vet-partner",
    label: "Vet Partner",
    path: "/admin-dashboard/vet-partner",
    icon: <FaPaw />,
  },
  {
    key: "logistics-service",
    label: "Logistic Service",
    path: "/admin-dashboard/logistic-services",
    icon: <FaShuttleVan />,
  },
  {
    key: "calender",
    label: "Calendar",
    path: "/admin-dashboard/calender",
    icon: <RiCalendar2Line />,
  },
  {
    key: "blog",
    label: "Blog",
    path: "/admin-dashboard/blog-service",
    icon: <CgLoadbarDoc />,
  },
  {
    key: "announcement",
    label: "Announcement",
    path: "/admin-dashboard/announcement",
    icon: <AiOutlineSound />,
  },
  {
    key: "payments",
    label: "Payments",
    path: "/admin-dashboard/payment",
    icon: <TfiCreditCard />,
  },
  {
    key: "services",
    label: "Services",
    path: "/admin-dashboard/service",
    icon: <MdShare />,
  },
  {
    key: "product-created",
    label: "Product Created",
    path: "/admin-dashboard/product-created",
    icon: <BsTag />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/admin-dashboard/messages",
    icon: <MdOutlineMessage />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/admin-dashboard/settings",
    icon: <IoSettingsOutline />,
  },
];


