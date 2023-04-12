import React from 'react'
import ManageProductImageTable from '../../components/sellers-order-page-component/ManageProductImageTable'

const SellersManageProductImage = () => {
  return (
    <div className="mx-6">
    <div className="mt-4">
      <h1 className="my-2 text-xl">Manage Products Images</h1>
      <div className="mb-8 ">
        <span className='text-[#A2A2A2] text-sm'>Here you can work on your product image </span>
      </div>
     
    </div>


    <div className="mt-10">
      <ManageProductImageTable />

      
    </div>
  </div>
  )
}

export default SellersManageProductImage