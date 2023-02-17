import React, { useState, useCallback } from 'react'


const UseOpenControl = (initialState: any) => {
    const [isOpen, setOpenState] = useState(initialState);

    const toggle = useCallback(() => {
        setOpenState((state: any) => !state)
    }, [setOpenState])
  
    return { isOpen, toggle };
}

export default UseOpenControl