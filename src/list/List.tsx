import React from 'react';
import ProductCard from '../components/featured-product-component/ProductCard';
import { productData } from '../utils/productData';


const List = () => {
  return (
      <div className=' grid grid-cols-4 mb-6'>
          {productData?.map(item => (
              <ProductCard item={item} key={ item.id} />
          ))}
    </div>
  )
}

export default List