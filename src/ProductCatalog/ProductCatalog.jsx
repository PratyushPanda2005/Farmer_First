import { products } from '../Config/products'
import ProductCard from './components/ProductCard'
import RecentlyViewed from './components/RecentlyViewed'

const ProductCatalog = () => {
  return (
    <>
    <section className='min-h-screen px-20 py-[10vw] flex justify-center bg-lightgray'>
      <div className='grid grid-cols-4 gap-[3vw] w-full '>
        {products.map((product) => (
          <ProductCard
          key={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          weight={product.weight}
          />
        ))}
      </div>
    </section>
    <RecentlyViewed/>
    
    </>
  )
}

export default ProductCatalog