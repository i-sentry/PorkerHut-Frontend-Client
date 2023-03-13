import React from 'react'
import { MdOutlineSpeakerNotes } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { decrementProductQty, deleteProductFromCart, incrementProductQty, IProduct } from '../redux/features/product/productSlice'
import { useDispatch } from 'react-redux'
import RatingWidget from './RatingWidget'

const CartCard2: React.FC<{item: IProduct}> = ({ item }) => {
    const dispatch = useDispatch()
                                                                                                            
  return (
    <div className="flex gap-6">
          <div className="flex gap-4">
            <div className="img flex flex-col">
              <figure className="bg-white w-[150px] flex-1">
              <img style={{ width: 150, height: 125 }} src={item.img} alt="" />
              </figure>
            </div>
            <div className="product-info hidden md:flex flex-col gap-2">
              <h3 className='font-bold'>{item.product?.name}</h3>
              <p>Product ID: {item.id}</p>
              <RatingWidget onChange={(value) => console.log(value)} defaultValue={2} />
              <span>{item.product?.weight}</span>
            </div>
          </div>
          <div className="right-group flex flex-col gap-4 md:flex-1 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-1/2 lg:ml-auto lg:mr-20">
            <div className="details flex flex-col md:flex-row-reverse md:justify-between">
              <p className="md:hidden">{item.product?.name}</p>
              <h3 className="font-bold">₦{parseFloat(item.price).toLocaleString()}</h3>
              <div className="flex">
                <div className=" h-[40px] w-[46px] flex items-center justify-center border border-[#D9D9D9] cursor-pointer" onClick={() => dispatch(decrementProductQty({id: item.id}))}>
                  <p className="flex justify-center font-semibold">-</p>
                </div>
                <div className=" h-[40px] w-[46px] flex items-center justify-center border border-[#D9D9D9] font-semibold">
                  <p className="flex justify-center">{item?.quantity}</p>
                </div>
                <div className=" h-[40px] w-[46px] flex items-center justify-center border border-[#D9D9D9] font-semibold cursor-pointer" onClick={() => dispatch(incrementProductQty({id: item.id}))}>
                  <p className="flex justify-center ">+</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col">
              <label htmlFor="order-notes">Order Notes</label>
              <input type="text" id="order-notes" placeholder="Type here" className=" h-16 outline-none border rounded px-5 py-4 mt-2" />
            </div>
            <div className=" text-emerald-500 outline-none md:hidden inline cursor-pointer">Save for later</div>
          </div>

          <div className=" mt-4 ml-4 md:hidden" onClick={() => dispatch(deleteProductFromCart({id: item.id}))}>
            <RiDeleteBin6Line size={30} />
          </div>

        </div>
  )
}

export default CartCard2