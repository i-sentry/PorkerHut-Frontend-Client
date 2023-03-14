import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      This is Product Page
      <NavLink to="/sellers-dashboard">Go to dashboard</NavLink>
    </div>
  );
}

export default Product