import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { TfiLock } from 'react-icons/tfi';

interface PasswordProp {
    setShowTab: React.Dispatch<React.SetStateAction<boolean>>

}

const Password = ({ setShowTab }: any) => {
    const [eyeState, setEyeState] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();


    const toggleEye = (e: any) => {
        e.preventDefault();
        setEyeState((prev) => !prev);
    };

    return (

        <div>

            <div className="flex gap-3 justify-between text-[#197B30] mt-5 mb-4">
            <div onClick={() => setShowTab((prev: any) => !prev)} className=' text-[#197B30]'>
                <HiOutlineArrowNarrowLeft size={30} />
            </div>
                <span className='flex gap-2 items-center'>
                <TfiLock size={24} />

                    Change Password
                </span>
            </div>



            <form action="" className='bg-[#F4F4F4] py-6 px-2 flex flex-col gap-3'>
                <div className=" relative">
                    <label htmlFor="" className=" block">
                        Old password
                    </label>
                    <input
                        {...register("password", {
                            required: true,
                        })}
                        autoComplete="on"
                        type={eyeState ? "text" : "password"}
                        name="password"
                        placeholder="**********"
                        id="password"
                        className={` w-full p-2 pl-4  border-2 border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${errors.password
                            ? "border-[#e10] focus-within:border-[#e10]"
                            : "border-[##EEEEEE] "
                            }`}
                    />
                    <button
                        className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute left-[280px] pt-4 pr-5"
                        onClick={toggleEye}
                    >
                        {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                    </button>
                </div>
                <div className=" relative">
                    <label htmlFor="" className=" block">
                        New password
                    </label>
                    <input
                        {...register("password", {
                            required: true,
                        })}
                        autoComplete="on"
                        type={eyeState ? "text" : "password"}
                        name="password"
                        placeholder="**********"
                        id="password"
                        className={` w-full p-2 pl-4  border-2 border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${errors.password
                            ? "border-[#e10] focus-within:border-[#e10]"
                            : "border-[##EEEEEE] "
                            }`}
                    />
                    <button
                        className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute left-[280px] pt-4 pr-5"
                        onClick={toggleEye}
                    >
                        {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                    </button>
                </div>
                <div className=" relative">
                    <label htmlFor="" className=" block">
                        Repeat password
                    </label>
                    <input
                        {...register("password", {
                            required: true,
                        })}
                        autoComplete="on"
                        type={eyeState ? "text" : "password"}
                        name="password"
                        placeholder="**********"
                        id="password"
                        className={` w-full p-2 pl-4  border-2 border-[#EEEEEE] placeholder:text-sm placeholder:text-[#EEEEEE] active:border-[#197B30] focus-within:border-[#197B30] mt-1 focus:outline-none appearance-none focus:ring-[#197b30] rounded ${errors.password
                            ? "border-[#e10] focus-within:border-[#e10]"
                            : "border-[##EEEEEE] "
                            }`}
                    />
                    <button
                        className="outline-[#0eb683] rounded-r-md text-center text-gray-500 absolute left-[280px] pt-4 pr-5"
                        onClick={toggleEye}
                    >
                        {eyeState ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                    </button>
                </div>

                <div className='flex items-center justify-center mt-8  '>
                    <button className='bg-[#197B30] py-4 px-7 text-white rounded'>Save Changes</button>

                </div>
            </form>
        </div>


    )
}

export default Password