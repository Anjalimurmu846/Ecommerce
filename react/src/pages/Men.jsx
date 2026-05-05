import React from 'react'
import Products from '../data/Products'
import ProductCard from '../component/ProductCard'

function Men({search}) {

  
  const menProducts = Products.filter(
    (item) => item.category === "men" &&
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {menProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item} 
          />
        ))}
      </div>
    </div>
  )
}

export default Men