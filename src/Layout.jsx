import Header from './Home/components/Header'
import Footer from './Home/components/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
    </>
  )
}

export default Layout