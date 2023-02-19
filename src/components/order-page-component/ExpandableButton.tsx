import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const ExpandableButton = ({isOpen, toggle}: any) => {
  return (
      <button onClick={toggle}>
          <span className='flex justify-center items-center gap-2'>
              <h1>Details</h1>
              <RiArrowDownSLine style={{transform: `rotate(${isOpen ? 180 : 0}deg)`, translate: "all 0.25s"}} />
          </span>
    </button>
  )
}

export default ExpandableButton