import React from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { RxBell } from 'react-icons/rx'
import ToggleSwitch from '../../components/toggle-switch/ToggleSwitch'

interface NotificationProp {
    setShowTab: React.Dispatch<React.SetStateAction<boolean>>
}

const Notification = ({ setShowTab }: NotificationProp) => {


    return (
        <div>


            <div className="flex justify-between gap-3 text-[#197B30] ">
                <div onClick={() => setShowTab((prev) => !prev)} className=' text-[#197B30]'>
                    <HiOutlineArrowNarrowLeft size={30} />
                </div>
                <span className='flex items-center gap-2'>
                    <RxBell size={24} />

                    Notification
                </span>
            </div>
            <div className='flex flex-col gap-8 mt-5 bg-[#F4F4F4] px-2 py-6 rounded'>
                <div className='flex justify-between'>
                    <span>Notification about new orders</span>
                    <ToggleSwitch />
                </div>
                <div className='flex justify-between'>
                    <span>Newsletter feed</span>
                    <ToggleSwitch />
                </div>
                <div className='flex justify-between'>
                    <span>Order Summary Report</span>
                    <ToggleSwitch />
                </div>
                <div className='flex justify-between'>
                    <span>Failed Delivery Report</span>
                    <ToggleSwitch />
                </div>

            </div>

        </div>
    )
}

export default Notification