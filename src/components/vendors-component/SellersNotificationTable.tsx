import React from 'react'
import ToggleSwitch from '../toggle-switch/ToggleSwitch'

const SellersNotificationTable = () => {

    const data = [
        {
            id: 1,
            type: "Notification about new orders",
            email: "porkerhut@gmail.com"

        },
        {
            id: 2,
            type: "Newsletter feeds",
            email: "porkerhut@gmail.com"

        },
        {
            id: 3,
            type: "Order Summary Report",
            email: "porkerhut@gmail.com"

        },
        {
            id: 4,
            type: "Failed Delivery Report",
            email: "porkerhut@gmail.com"

        },
    ]

  return (
      <table className="bg-white rounded mb-10">
          <thead className="">
              <tr className='border-b border-gray-300 py-3'>
                  <th className="font-normal text-[16px] leading-[19px] py-3">Type</th>
                  <th className="font-normal text-[16px] leading-[19px]">Email</th>
                  <th className="font-normal text-[16px] leading-[19px]">Status</th>
              </tr>
          </thead>
          {data.map(item => (
              <tbody key={item.id} >
                  <tr className=' border-b border border-gray-300 '>
                      <td className="text-[14px] leading-[16px] font-normal px-8 py-3 border-r border-gray-300">{ item.type}</td>
                      <td className="text-[14px] leading-[16px] font-normal px-8 py-3 border-r border-gray-300">{ item.email}</td>
                      <td className="text-[14px] leading-[16px] font-normal px-8 py-3">
                          <ToggleSwitch />
                      </td>
                  </tr>
              </tbody>
          ))}

      </table>



  )
}

export default SellersNotificationTable