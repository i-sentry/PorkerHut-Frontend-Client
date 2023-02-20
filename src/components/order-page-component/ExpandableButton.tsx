import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const ExpandableButton = ({isOpen, toggle}: any) => {
  return (
    <button onClick={toggle}>
      <span className="flex justify-center items-center gap-2">
        <h1>Details</h1>
        <RiArrowDownSLine
          className={`md:transform md:transition-all duration-300 ease-in-out
  ${ isOpen ? 'md:rotate-180' : 'md:rotate-0' }`}
          
        />
        
      </span>
    </button>
  );
}

export default ExpandableButton