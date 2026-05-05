import React from "react";
import { useParams } from "react-router-dom";
import Products from "../data/Products";

function ProductDetails() {
  const { id } = useParams();

  const product = Products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">

          {/* ✅ Image */}
          <img
            alt={product.title}   // ⚠️ you used title, not name
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
          />

          {/* ✅ Details */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            
            {/* BRAND */}
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand || "BRAND"}
            </h2>

            {/* NAME */}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            {/* ⭐ Rating */}
            <div className="flex mb-4">
              <span className="flex items-center text-pink-500">
                ★★★★☆
              </span>
              <span className="text-gray-600 ml-3">
                {product.reviews || 4} Reviews
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="leading-relaxed">
              {product.description || "No description available"}
            </p>

            {/* 🔥 CONDITIONAL SECTION */}
            <div className="mt-6 pb-5 border-b-2 border-gray-100 mb-5">

              {/* 👕 Clothes */}
              {(product.category === "men" ||
                product.category === "women" ||
                product.category === "kids") && (

                <div className="flex items-center">

                  {/* Color */}
                  <div className="flex">
                    <span className="mr-3">Color</span>

                    {(product.colors || ["gray", "black", "pink"]).map((color, i) => (
                      <button
                        key={i}
                        style={{ backgroundColor: color }}   // ✅ FIXED
                        className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6"
                      />
                    ))}
                  </div>

                  {/* Size */}
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>

                    <select className="rounded border border-gray-300 py-2 px-3">
                      {(product.sizes || ["S", "M", "L", "XL"]).map((size, i) => (
                        <option key={i}>{size}</option>
                      ))}
                    </select>
                  </div>

                </div>
              )}

              {/* 🏠 Home Appliances */}
              {product.category === "home" && (
                <div className="space-y-2">
                  <p><strong>Brand:</strong> {product.brand}</p>
                  <p><strong>Warranty:</strong> {product.warranty || "1 Year"}</p>
                  <p><strong>Power:</strong> {product.power || "Standard"}</p>
                </div>
              )}

            </div>

            {/* PRICE + BUTTON */}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{product.price}
              </span>

              <button className="flex ml-auto text-white bg-pink-500 py-2 px-6 rounded hover:bg-pink-600">
                Add to Cart
              </button>

              <button className="rounded-full w-10 h-10 bg-gray-200 ml-4 flex items-center justify-center">
                ❤️
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;