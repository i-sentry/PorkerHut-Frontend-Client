import React from "react";
import { BsShopWindow, BsTag } from "react-icons/bs";
import {
  RiArrowDownSLine,
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
  MdOutlineDashboard,
  MdOutlineMessage,
  MdShare,
  MdStorefront,
} from "react-icons/md";
import { FaPaw, FaShuttleVan } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { AiOutlineSound } from "react-icons/ai";

export const ORDER_DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "/vendor/home",
    icon: <BsShopWindow />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/vendor/order",
    icon: <RiFileDownloadLine />,
  },
  {
    key: "products",
    label: "Products",
    path: "/vendor/product",
    icon: <BsTag />,
    icon_two: <RiArrowDownSLine />,
    subLinks: [
      {
        subLink: [
          {
            label: "Manage Products",
            path: "/vendor/product",
          },
          {
            label: "Manage Product Images",
            path: "/vendor/product/manage-product-images",
          },
        ],
      },
    ],
  },
  {
    key: "create Products",
    label: "Create Products",
    path: "/vendor/create-product",
    icon: <FiFolderPlus />,
  },
  {
    key: "account statement",
    label: "Account Statement",
    path: "/vendor/account",
    icon: <TfiCreditCard />,
  },
  {
    key: "performance",
    label: "Performance",
    path: "/vendor/performance",
    icon: <HiChartBar />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/vendor/setting",
    icon: <IoSettingsOutline />,
  },
];

export const ADMIN_DASHBOARD_SIDEBAR_LINK = [
  {
    key: "overview",
    label: "Overview",
    path: "/admin/overview",
    icon: <MdOutlineDashboard />,
  },
  {
    key: "order",
    label: "Order",
    path: "/admin/admin-order",
    icon: <MdOutlineArchive />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/admin/customers",
    icon: <HiOutlineUserGroup />,
  },
  {
    key: "analytics",
    label: "Analytics",
    path: "/admin/analytics",
    icon: <MdOutlineAnalytics />,
  },
  {
    key: "stores",
    label: "Stores",
    path: "/admin/stores",
    icon: <MdStorefront />,
    icon_two: <RiArrowDownSLine />,
    subLinks: [
      {
        subLink: [
          {
            label: "New Stores",
            path: "/admin/stores/new-store",
          },
          {
            label: "Store Profiles",
            path: "/admin/stores/store-profile",
          },
        ],
      },
    ],
  },
  {
    key: "vet-partner",
    label: "Vet Partner",
    path: "/admin/new__vet",
    icon: <FaPaw />,
    icon_two: <RiArrowDownSLine />,
    subLinks: [
      {
        subLink: [
          {
            label: "New Vets",
            path: "/admin/new__vet",
          },
          {
            label: "Vets",
            path: "/admin/vet",
          },
        ],
      },
    ],
  },
  {
    key: "logistics-service",
    label: "Logistic Service",
    path: "/admin/logistic-services",
    icon: <FaShuttleVan />,
  },
  {
    key: "calender",
    label: "Calendar",
    path: "/admin/calender",
    icon: <RiCalendar2Line />,
  },
  {
    key: "blog",
    label: "Blog",
    path: "/admin/create__blog",
    icon: <CgLoadbarDoc />,
    icon_two: <RiArrowDownSLine />,
    subLinks: [
      {
        subLink: [
          {
            label: "Create Blog",
            path: "/admin/create__blog",
          },
          {
            label: "Blog Post",
            path: "/admin/blog",
          },
        ],
      },
    ],
  },
  {
    key: "announcement",
    label: "Announcement",
    path: "/admin/announcement",
    icon: <AiOutlineSound />,
  },
  {
    key: "payments",
    label: "Payments",
    path: "/admin/payment",
    icon: <TfiCreditCard />,
  },
  {
    key: "services",
    label: "Services",
    path: "/admin/service",
    icon: <MdShare />,
    icon_two: <RiArrowDownSLine />,
    subLinks: [
      {
        subLink: [
          {
            label: "Agro Services",
            path: "/admin/agro_services",
          },
          {
            label: "Vet Services",
            path: "/admin/vet__services",
          },
          {
            label: "Weekend Kill",
            path: "/admin/weekend_kill",
          },
        ],
      },
    ],
  },
  {
    key: "product-created",
    label: "Product Created",
    path: "/admin/product-created",
    icon: <BsTag />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/admin/messages",
    icon: <MdOutlineMessage />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/admin/settings",
    icon: <IoSettingsOutline />,
  },
];
