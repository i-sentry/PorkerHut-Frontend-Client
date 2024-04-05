import React, { useState } from "react";
import { BiShieldQuarter } from "react-icons/bi";
// import { IconType } from 'react-icons/lib'
import { MdOutlinePerson } from "react-icons/md";
import { RxBell } from "react-icons/rx";
import { TfiLock } from "react-icons/tfi";
// import { NavLink } from 'react-router-dom'
import AccountInfo from "./AccountInfo";
import Notification from "./Notification";
import Password from "./Password";
import QualityCheck from "./QualityCheck";
import { useSearchParams } from "react-router-dom";

interface ITab {
  id: string;
  name: string;
  link: string;
  icon: any;
}

const MobileTabs = () => {
  const [showTab, setShowTab] = useState(false);
  const [currentTab, setCurrentTab] = useState("Account Information");
  const [, setSearchParams] = useSearchParams();
  const tabs: ITab[] = [
    {
      id: "1",
      name: "Account Information",
      link: "account",
      icon: <MdOutlinePerson size={24} />,
    },
    {
      id: "2",
      name: "Quality Control",
      link: "quality-control",
      icon: <BiShieldQuarter size={24} />,
    },
    {
      id: "3",
      name: "Notification",
      link: "notification",
      icon: <RxBell size={24} />,
    },
    {
      id: "4",
      name: "Change Password",
      link: "change-password",
      icon: <TfiLock size={24} />,
    },
  ];

  const displayTab = (tabs: string) => {
    switch (tabs) {
      case "Account Information":
        return <AccountInfo setShowTab={setShowTab} />;
      case "Quality Control":
        return <QualityCheck setShowTab={setShowTab} />;
      case "Notification":
        return <Notification setShowTab={setShowTab} />;
      case "Change Password":
        return <Password setShowTab={setShowTab} />;
      default:
    }
  };

  const handleTab = (tab: string, link: string) => {
    setShowTab((prev) => !prev);
    setCurrentTab(tab);
    setSearchParams({ tab: link });
    //do somthing
  };
  return (
    <div className="px-4 pt-6">
      <>
        {!showTab ? (
          <>
            <div>
              <div className="mt-2 mb-6">
                <h1 className="text-2xl font-medium">Settings</h1>
                <span className="text-base text-[#A2A2A2]">
                  All information available.
                </span>
              </div>

              {tabs.map((tab) => (
                <div
                  onClick={() => handleTab(tab?.name, tab?.link)}
                  className="group mt-10  flex cursor-pointer select-none   items-center gap-4 rounded-sm text-[#797979] hover:text-[#197B30]"
                >
                  <span className="">{tab.icon}</span>
                  <span className="text-[16px] leading-[19px] text-[#797979] group-hover:text-[#197B30]">
                    {tab.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>{displayTab(currentTab)}</div>
        )}
      </>
    </div>
  );
};

export default MobileTabs;
