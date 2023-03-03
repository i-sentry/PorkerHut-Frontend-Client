import React from "react"
import { BsShopWindow, BsTag } from "react-icons/bs";
import { RiArrowDownSLine, RiFileDownloadLine } from "react-icons/ri";
import { FiFolderPlus } from "react-icons/fi";
import { TfiCreditCard } from "react-icons/tfi";
import { HiChartBar } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";



export const ORDER_DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "/sellers-dashboard",
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
            path: "/sellers-dashboard/product/manage-products",
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


