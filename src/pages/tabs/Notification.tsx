import React from 'react'
// import { useForm } from 'react-hook-form'
import {     HiOutlineChevronLeft } from 'react-icons/hi'

import ToggleSwitch from '../../components/toggle-switch/ToggleSwitch'
import { MdOutlineNotifications } from 'react-icons/md'

interface NotificationProp {
    setShowTab: React.Dispatch<React.SetStateAction<boolean>>
}

const Notification = ({ setShowTab }: NotificationProp) => {


    return (
      <div>
        <div className="flex items-center gap-2  ">
          <div onClick={() => setShowTab((prev) => !prev)} className=" text-[]">
            <HiOutlineChevronLeft size={20} />
          </div>
          <span className="flex gap-1 items-center text-[#197b30] text-[16px] md:leading-[19px]">
            <MdOutlineNotifications size={24} />
            Notification
          </span>
        </div>
        <div className="flex flex-col gap-6 mt-5 bg-[#F4F4F4] px-4 py-6 ">
          <div className="flex justify-between py-2">
            <span className="text-[14px] leading-[16px]">
              Notification about new orders
            </span>
            <ToggleSwitch />
          </div>
          <div className="flex justify-between py-2">
            <span className="text-[14px] leading-[16px]">Newsletter feed</span>
            <ToggleSwitch />
          </div>
          <div className="flex justify-between py-2">
            <span className="text-[14px] leading-[16px]">
              Order Summary Report
            </span>
            <ToggleSwitch />
          </div>
          <div className="flex justify-between py-2">
            <span className="text-[14px] leading-[16px]">
              Failed Delivery Report
            </span>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    );
}

export default Notification