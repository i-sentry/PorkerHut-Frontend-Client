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
  MdOutlineArticle,
  MdOutlineDashboard,
  MdOutlineDns,
  MdOutlineMessage,
  MdShare,
  MdStorefront,
} from "react-icons/md";
import { FaPaw, FaShuttleVan } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { GoTag } from "react-icons/go";
import { AiOutlineSound } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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


export const DashBoardData = [
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
    name: "Category",
    url: "/admin/category",
    icon: <MdOutlineDns width={"20px"} height={"20px"} />,
    iconClosed: <BiChevronDown />,
    iconOpen: <BiChevronUp />,
    subNav: [
      {
        id: 0,
        name: "Pork",
        url: "/admin/category/pork",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 1,
        name: "Farm Feeds",
        url: "/admin/category/feed",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
      {
        id: 1,
        name: "Livestock",
        url: "/admin/category/livestock",
        // icon: <WalletIcon width={"20px"} height={"20px"} />,
      },
    ],
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
    id: 14,
    name: "Settings",
    url: "/admin/settings",
    icon: <IoSettingsOutline width={"20px"} height={"20px"} />,
  },
];
