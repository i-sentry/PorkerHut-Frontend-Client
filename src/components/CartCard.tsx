import React from 'react'
import { MdOutlineSpeakerNotes } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { decrementProductQty, deleteProductFromCart, incrementProductQty, IProduct } from '../redux/features/product/productSlice'
import { useDispatch } from 'react-redux'

const CartCard: React.FC<{item: IProduct}> = ({ item }) => {
    const dispatch = useDispatch()
    
  return (
    <div className=" checkout-container flex border-b-2 border-[#D9D9D9]">
        <div className=" p-5">
          <div>
            <img style={{ width: 150, height: 125 }} src={item.img} alt="" />
          </div>
          <div className=" flex items-center gap-2 p-3">
            <MdOutlineSpeakerNotes size={24} />
            <p className=" text-[16px] leading-4 text-[#797979]">Add a note</p>
          </div>
        </div>
        <div className=" pork-prices mt-4 ml-5 ">
          <span className=" text-[16px]">{item.product?.name}</span>
          <p className=" font-semibold">₦{parseFloat(item.price).toLocaleString()}</p>
          <div className="flex md:hidden">
            <div className=" h-[70px] w-[70px] border border-[#D9D9D9]" onClick={() => dispatch(decrementProductQty({id: item.id}))}>
              <p className="flex justify-center mt-[30%] font-semibold">-</p>
            </div>
            <div className=" h-[70px] w-[80px] border border-[#D9D9D9] font-semibold">
              <p className="flex justify-center mt-[28%] ">{item?.quantity}</p>
            </div>
            <div className=" h-[70px] w-[70px] border border-[#D9D9D9] font-semibold" onClick={() => dispatch(incrementProductQty({id: item.id}))}>
              <p className="flex justify-center mt-[30%] ">+</p>
            </div>
          </div>
        
          <div className=" mt-2">
            <h1 className=" text-[#197B30] text-[18px] leading-4 md:hidden">
              Save for later
            </h1>
          </div>
        </div>
        <div className=" mt-4 ml-4 md:hidden" onClick={() => dispatch(deleteProductFromCart({id: item.id}))}>
          <RiDeleteBin6Line size={30} />
        </div>
      </div>
  )
}

export default CartCard