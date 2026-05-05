import Products from '../data/Products'
import ProductCard from '../component/ProductCard'

function Women({search }) {
  const womenProducts = Products.filter(
    (item) => item.category === "women"&&
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {womenProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default Women