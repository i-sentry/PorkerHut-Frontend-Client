import React from 'react'
import { HiMinusSm, HiX } from 'react-icons/hi';
import { MdOutlineAccessAlarm } from 'react-icons/md';

type RowModalProps = {
  id: number;
  subject: string;
  content: string;
  date: string;
  show: boolean;
  CloseModal: () => void;
  isVisib: boolean;
  
}

const RowModal = ({ id, subject, content, date, show, isVisib, CloseModal }: RowModalProps) => {
    if (!isVisib) return null;
    const handleClosed = (e: any) => {
        if (e.target.id === "container") CloseModal();
      };

  return (
 
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleClosed}
    >
      <div className="w-[550px] h-full mt-20">
        <div className="bg-white  rounded">
          <div className="flex items-center justify-between px-4 py-3 bg-[#F4F4F4]">
            <h1>Announcement</h1>
            <div className="flex items-center gap-3">
              <HiMinusSm className="hover:cursor-pointer" />
              <MdOutlineAccessAlarm className="hover:cursor-pointer" />
              <HiX onClick={() => CloseModal()} className="hover:cursor-pointer" />
            </div>
          </div>
          <div>
            <form action="" className="mx-2 py-4">
              <div className='px-2'>
              <h1 className=' font-medium'>{subject}</h1>
              <hr className='mt-2 border border-[#D9D9D9]'/>

              </div>

              
              <div className="mt-4">
                <div className="rounded bg-white h-80 overflow-hidden">
                  <p className='text-sm px-2'>{content}</p>
                </div>
              </div>
              <div className="px-4 flex justify-end gap-4">
                <button className="border-[#F91919] border-2 text-[#F91919] rounded py-1 px-6">
                  Delete
                </button>
                <button className="bg-[#197B30] text-white rounded py-1 px-6">
                  Repost
                </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RowModal
