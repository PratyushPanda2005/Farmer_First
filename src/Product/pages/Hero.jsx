import Button from "../../Common/Button"

const Hero = () => {
  return (
    <section className='relative'>
      <img src='/product/product-hero.png' alt='Product Hero' className='h-full w-full object-cover' />
      <Button
      routeLink="/product-catalog"
      text="shop now"
      className="absolute bottom-[6vw] left-1/2 -translate-x-[50%]"
      bgColor="#E8500E"
      textColor="#DDDB00"
      />
    </section>
  )
}

export default Hero
