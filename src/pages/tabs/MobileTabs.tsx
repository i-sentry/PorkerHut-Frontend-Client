import React, { useState } from 'react'
import { BiShieldQuarter } from 'react-icons/bi'
import { IconType } from 'react-icons/lib'
import { MdOutlinePerson } from 'react-icons/md'
import { RxBell } from 'react-icons/rx'
import { TfiLock } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import Notification from './Notification'
import Password from './Password'
import QualityCheck from './QualityCheck'

interface ITab {
  id: string;
  name: string;
  icon: any
}

const MobileTabs = () => {
  const [showTab, setShowTab] = useState(false)
  const [currentTab, setCurrentTab] = useState("Account Information")
  const tabs: ITab[] = [
    {
      id: "1",
      name: "Account Information",
      icon: <MdOutlinePerson size={24} />
    },
    {
      id: "2",
      name: "Quality Control",
      icon: <BiShieldQuarter size={24} />
    },
    {
      id: "3",
      name: "Notification",
      icon: <RxBell size={24} />
    },
    {
      id: "4",
      name: "Change Password",
      icon: <TfiLock size={24} />
    },
  ]

  const displayTab = (tabs: string) => {
    switch (tabs) {
      case "Account Information":
        return <AccountInfo setShowTab={setShowTab } />;
      case "Quality Control" :
        return <QualityCheck setShowTab={setShowTab}  />;
      case "Notification":
        return <Notification setShowTab={setShowTab} />;
      case "Change Password":
        return <Password setShowTab={setShowTab} />;
      default:
    }
  }

  const handleTab = (tab: string) => {
    setShowTab((prev) => !prev)
    setCurrentTab(tab)
    //do somthing
  }
  return (
    <div className="px-4">
      <>
        {!showTab ? (
          <>
            <div>
              <div className="mt-8 mb-6">
                <h1 className="text-2xl font-medium">Settings</h1>
                <span className="text-[#A2A2A2] text-base">
                  All information available.
                </span>
              </div>

              {tabs.map((tab) => (
                <div
                  onClick={() => handleTab(tab?.name)}
                  className="flex gap-4  items-center mt-10    rounded-sm select-none text-[#797979]"
                >
                  <span className="">{tab.icon}</span>
                  <span className="text-[16px] leading-[19px] text-[#797979]">
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
}

export default MobileTabs