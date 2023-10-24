import React from 'react'
import { IoMdClose } from 'react-icons/io';
import { Tooltip } from '../../components/utility/ToolTip';
import { useShowModal } from '../../store/overlay';

const OrderSideModal = () => {
     const toggleOpenModal = useShowModal((state) => state.toggleOpenModal);

    const closeModal = () => {
        toggleOpenModal(false)
    }
  return (
    <>
      <div
        onClick={closeModal}
        className="modal  fixed w-full h-full top-0 left-0 justify-center items-center transition-opacity duration-300 z-50 "
      >
        <div className="modal_overlay  flex xxs:justify-center xxs:p-5 md:p-0  md:justify-end h-full cursor-pointer bg-[#13111173]">
          <div className="flex flex-col bg-white  w-full max-w-sm md:max-w-sm max-h-full  md:h-full relative xxs:rounded-md md:rounded-l-md  p-5 md:px-7 overflow-auto ">
            <>
              <div className="flex items-end justify-end pb-3">
                <Tooltip message="close">
                  <div
                      onClick={closeModal}
                    className="close  flex items-center justify-center h-10 w-10  rounded-full
                    hover:bg-[#F7FBFB] p-3 hover:rounded-full hover:text-center "
                  >
                    <span className="hover:rotate-90 hover:transform  transition duration-150 ease-in-out">
                      <IoMdClose size={29} className="" />
                    </span>
                  </div>
                </Tooltip>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSideModal