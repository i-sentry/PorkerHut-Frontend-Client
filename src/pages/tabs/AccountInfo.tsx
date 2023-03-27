import React, { useState } from 'react'
import { FiCamera } from 'react-icons/fi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { MdOutlinePerson } from 'react-icons/md';
interface IAccount {
  setShowTab: React.Dispatch<React.SetStateAction<boolean>>
}
const AccountInfo = ({ setShowTab }: IAccount) => {

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };
  return (
    <div className=''>


      <div className="flex justify-between text-[#197b30]">
        <div onClick={() => setShowTab((prev) => !prev)} className=' text-[#197B30]'>
          <HiOutlineArrowNarrowLeft size={30} />
        </div>
        <span className='flex gap-1 items-center'>
          <MdOutlinePerson size={24} />
          Account Information

        </span>

      </div>
      <form className='bg-[#F4F4F4] pt-5 pb-2 rounded-md px-3'>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="uploaded image"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                className="w-22 h-22 rounded-full "
              />
            ) : (
              <>

                <label
                  htmlFor="file"
                  className=""
                >
                  <FiCamera size={20} className="text-gray-400" />
                  <span className=" cursor-pointer  my-auto text-[#197B30]">

                  </span>{" "}
                </label>

                <input
                  id="file"
                  type="file"
                  name="file"
                  onClick={handleImage}
                  className=" hidden appearance-none outline-none text-sm "
                />
              </>
            )}
          </div>

          <h3
            className="text-lg font-medium  text-[#333333]"
            style={{ transition: "opacity 0.5s ease-in" }}
          >
            John Doe
          </h3>
          <label
            htmlFor="file"
            onClick={handleImage}

            className="text-sm flex items-center gap-2 text-right"
          >
            <FiCamera className="text-[#197B30]" />
            <span className=" cursor-pointer  text-[#197B30]">

              Change profile picture
            </span>{" "}
          </label>
        </div>








        <div className=' mb-2'>
          <h1 className=" text-sm">Full Name</h1>

          <input type="text" placeholder="Enter name" className="border-2 pl-2 border-[#D9D9D9] py-1 text-xs  w-full focus:outline-none rounded-sm  placeholder-gray-500 text-gray-900" />
        </div>
        <div className='mb-2'>
          <h1 className="text-sm">Store Name</h1>

          <input type="text" placeholder="Enter store name" className="border-2 pl-2 border-[#D9D9D9] py-1 text-xs  w-full focus:outline-none rounded-sm  placeholder-gray-500 text-gray-900" />
        </div>


        <div className="mb-2">
          <h1 className="text-sm">Email</h1>

          <input type="text" placeholder="Enter name" className="border-2 border-[#D9D9D9] py-1 pl-2 focus:outline-none text-xs  w-full rounded-sm  placeholder-gray-500 text-gray-900" />
        </div>
        <div className='mb-2'>
          <h1 className="text-sm">Store ID</h1>

          <input type="text" placeholder="Enter store name" className="border-2 border-[#D9D9D9] py-1 pl-2 w-full focus:outline-none rounded-sm text-xs  placeholder-gray-500 text-gray-900" />
        </div>


        <div className="mb-2">
          <h1 className="text-sm">Street Address</h1>

          <input type="text" placeholder="Enter name" className="border-2 border-[#D9D9D9] py-1 pl-2 focus:outline-none w-full rounded-sm text-xs   placeholder-gray-500 text-gray-900" />
        </div>
        <div className='mb-2'>
          <h1 className="text-sm">Location</h1>

          <input type="text" placeholder="Enter store name" className="border-2 border-[#D9D9D9] py-1 pl-2 w-full focus:outline-none text-xs  rounded-sm  placeholder-gray-500 text-gray-900" />
        </div>


        <div className="">
          <h1 className="text-sm">Phone number</h1>

          <input type="number" placeholder="Enter phone no." className="border-2 border-[#D9D9D9] py-1  focus:outline-none w-full rounded-sm text-xs   placeholder-gray-500 text-gray-900 pl-2" />
        </div>



        <div className="flex justify-between mt-6">
          <button className="border border-[#F91919] text-[#F91919] py-[7px] px-[10px] rounded text-sm">Delete Account</button>
          <button className="bg-[#197B30] text-white py-[7px] px-[10px] rounded text-sm">Save Changes</button>
        </div>

      </form>
    </div>
  )
}

export default AccountInfo