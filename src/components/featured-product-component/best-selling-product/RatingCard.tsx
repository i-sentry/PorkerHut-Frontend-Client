import React from 'react'
import { MdKeyboardArrowRight, MdMessage } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import RatingWidget from '../../RatingWidget'

const RatingCard = () => {

    const ratingData = [
        {
            "id": 1,
            "name": "John Doe",
            "date": "2023-03-10",
            "rating": 4.5
        },
        {
            "id": 2,
            "name": "Alice Smith",
            "date": "2023-03-12",
            "rating": 3.0
        },
        {
            "id": 3,
            "name": "Bob Johnson",
            "date": "2023-03-15",
            "rating": 5.0
        },
        {
            "id": 4,
            "name": "Emily Wong",
            "date": "2023-03-09",
            "rating": 2.5
        },
        {
            "id": 5,
            "name": "Michael Chen",
            "date": "2023-03-06",
            "rating": 4.0
        },
        {
            "id": 6,
            "name": "Jessica Lee",
            "date": "2023-03-03",
            "rating": 4.5
        },
        {
            "id": 7,
            "name": "David Kim",
            "date": "2023-03-08",
            "rating": 3.5
        },


    ]
    return (
        <>

            <div className='md:grid md:gap-4 md:grid-cols-3 md:mt-10'>
                {ratingData.map(data => (
                    <div className='bg-[#F4F4F4] h-28 p-2 flex flex-col gap-4 rounded-sm xxs:mb-4 md:mb-0'>
                        <div className='flex justify-between'>
                            <div className='items-center flex gap-2'>
                                <MdMessage size={20} />
                                <h1 className='inline'>{data.name}</h1>
                            </div>
                            <div>
                                <span className='text-[#A2A2A2] text-xs'>{data.date}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-5 h-5 text-[#FE6600]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-[#FE6600]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-[#FE6600]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-[#FE6600]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>

                        <div>
                            <span className=''>Awesome products and swift delivery to my doorstep</span>
                        </div>
                    </div>

                ))}



            </div>

            <NavLink to="/product/:id/rating-page" className='flex items-center justify-center underline mt-10 gap-2'>

                <button className='font-semibold'>SEE ALL</button>
                <MdKeyboardArrowRight size={20}/>
            </NavLink>
        </>

    )
}

export default RatingCard