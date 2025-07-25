import Carousel from './components/Carousel'
import Partner from './components/Partner'
import BestSelling from './pages/BestSelling'
import FarmTour from './pages/FarmTour'
import Hero from './pages/Hero'
import ProductType from './pages/ProductType'

const Product = () => {
  return (
    <div>
      <Hero/>
      <Partner/>
      <Carousel/>
      <ProductType/>
      <BestSelling/>
      <FarmTour/>
    </div>
  )
}

export default Product
