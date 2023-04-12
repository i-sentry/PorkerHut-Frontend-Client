import React from 'react'
import AdminCustomerTable from '../../components/admin-dashboard-components/AdminCustomerTable'

const Customers = () => {
  return (
    <div className='ml-10 mr-4 mt-4 mb-8 '>
       <div className="mb-2">
        <h1 className="text-xl font-medium ">Customers</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          All Information available
        </span>
      </div>

      <div className="flex gap-8 items-center">
        <h1 className="underline text-sm">All</h1>
        <button className="border-2 border-[#197B30] rounded-lg py-2 px-4 text-sm">
          Pending
        </button>
        <span className="underline text-sm">Ready to GO</span>
        <span className="underline text-sm">Completed</span>
        <span className="underline text-sm">Failed</span>
      </div>

      <div>
        <AdminCustomerTable />
      </div>
    </div>
  )
}

export default Customers