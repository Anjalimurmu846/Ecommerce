import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="border p-3 rounded shadow hover:shadow-lg cursor-pointer">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-40 object-contain bg-gray-100" />

      <h2 className="text-lg font-semibold mt-2">
        {product.title}
      </h2>

     
      <p className="text-sm text-gray-500">
        {product.brand}
      </p>

      <p className="text-pink-500 font-bold">
        ₹{product.price}
      </p>
    </div>
  )
}

export default ProductCard