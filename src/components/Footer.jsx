
const Footer = () => {
  return (
    <footer className="h-[50vh] bg-[#815D41] px-[8vw] py-[2vw]">
      <div className="flex w-full justify-between">
        <div className="flex gap-[6vw] font-raleway text-[0.8vw] text-[#B19B8C] leading-[120%]">
          <ul>
            <li>COLORLIB</li>
            <li>2024</li>
          </ul>
          <ul>
            <li>CUSTOMERS</li>
            <li>Buyer</li>
          </ul>
          <ul>
            <li>COMPANY</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>FURTHER INFORMATION</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex  flex-1 w-full justify-end px-[8vw]">
          <div>
          <h1 className="font-raleway text-[0.8vw] text-[#B19B8C] uppercase ">follow us</h1>
          <div className="flex mt-3 gap-2">
          <img src="/assets/Instagram.svg" className="size-[1.6vw]" />
          <img src="/assets/Facebook.svg" className="size-[1.6vw]" />
          <img src="/assets/Twitter.svg" className="size-[1.6vw]" />
          <img src="/assets/Youtube.svg" className="size-[1.6vw]" />
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
